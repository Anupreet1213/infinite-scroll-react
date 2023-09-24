import React from "react";
import Modal from "react-modal";

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

interface UserModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  user: User | null;
}

const UserModal: React.FC<UserModalProps> = ({
  isOpen,
  onRequestClose,
  user,
}) => {
  if (!user) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="User Details"
      className="modal"
    >
      <div className="user-details">
        <h2>{`${user.name.first} ${user.name.last}`}</h2>
        <img
          src={user.picture.medium}
          alt={`${user.name.first} ${user.name.last}`}
        />
        <p>Username: {user.login.username}</p>
      </div>
    </Modal>
  );
};

export default UserModal;
