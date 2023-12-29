import React, { useState } from 'react';


import '../App.css';

function Footer() {
  const [page, setPage] = useState('Home'); // Initialize the page state for footer

  const handleClick = (clickedPage) => {
    setPage(clickedPage); // Update the page state when a footer link is clicked
  };

  return (
    <footer>
      <p>&copy; 2023 Your Company Name. All rights reserved.</p>

    </footer>
  );
}

export default Footer;
