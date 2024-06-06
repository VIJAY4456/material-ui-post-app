import React, { useState } from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  // it is State variable to hold the search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");

  //  this Function to handle changes in the search input
  const handleChange = (event) => {
    // it will Update the search term state with the new value
    setSearchTerm(event.target.value);
    // Call the onSearch function passed as a prop, passing the new search term as an argument
    onSearch(event.target.value);
  };

  return (
    // Render a Material-UI TextField component for the search bar
    <TextField
      label="Search" 
      variant="outlined" 
      value={searchTerm} 
      onChange={handleChange} 
      fullWidth 
      margin="normal" 
    />
  );
};

export default SearchBar; 
