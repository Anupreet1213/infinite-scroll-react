import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import UserModal from "./UserModal";

interface User {
  login: {
    username: string;
  };
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const pageRef = useRef<number>(1);
  const results: number = 10;
  const itemsPerPage: number = 10;
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Set the selectedUser state for modal
  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  //Set the selectedUser state for modal to close
  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  useEffect(() => {
    // Function to fetch data from the Random User Generator API
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://randomuser.me/api/?results=${results}`
        );
        setUsers((prevUsers) => [...prevUsers, ...response.data.results]);
        pageRef.current += 1;
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    const endMarker = document.getElementById("end-marker");

    if (endMarker) {
      //Uses browser Api to deal with infinite scroll
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            fetchData();
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.3,
        }
      );

      observer.observe(endMarker);

      return () => {
        observer.disconnect();
      };
    }
  }, [loading, users]);

  return (
    <div className="App">
      <h1>Infinite Scrolling React App with Random Users</h1>
      <div className="user-container">
        {users.slice(0, pageRef.current * itemsPerPage).map((user, index) => (
          <div
            key={index}
            className="user"
            onClick={() => handleUserClick(user)}
          >
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
            />
            <p>{index}</p>
            <h3>{`${user.name.first} ${user.name.last}`}</h3>
            <p>{user.login.username}</p>
            {/* Add more user details as needed */}
          </div>
        ))}
      </div>
      {loading && (
        <div className="loading-overlay">
          <div className="loader"></div>
        </div>
      )}
      <div id="end-marker" style={{ height: "1px" }}></div>

      <UserModal
        isOpen={!!selectedUser}
        onRequestClose={handleCloseModal}
        user={selectedUser}
      />
    </div>
  );
}

export default App;
