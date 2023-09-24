# Infinite Scrolling React App

This is a simple React application that implements infinite scrolling using a API to display a list of random users. When the user scrolls to the bottom of the page, more users are loaded and displayed.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed on your computer. You can download it from [https://nodejs.org/](https://nodejs.org/).
- Yarn: This project uses Yarn as the package manager. Make sure you have Yarn installed. You can install Yarn from [https://classic.yarnpkg.com/en/docs/install/](https://classic.yarnpkg.com/en/docs/install/).

## Getting Started

To get this project up and running, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Anupreet1213/infinite-scroll-react.git

   ```

2. Change into the project's directory:

   ```bash
   cd infinite-scroll-react
   ```

3. Install the project dependencies:

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

## Usage

- As you scroll down the page, the application will automatically load more users from the API.
- Click on a user to view more details in a modal.
- To close the modal, click outside of it or press the "Escape" key.

## Built With

- React
- Axios
- Intersection Observer API
- TypeScript
