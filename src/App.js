import React from "react";
import PostList from "./PostList"; 
import { Container, Typography } from "@mui/material"; // Import Material-UI components

const App = () => {
  return (
    // Render the main Container component from Material-UI
    <Container>
      {/* Render a Typography component for the heading */}
      <Typography variant="h3" component="h1" gutterBottom>
        <h3>Posts</h3>
      </Typography>
      {/* Render the PostList component */}
      <PostList />
    </Container>
  );
};

export default App; 
