import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import SearchBar from "./SearchBar"; 

const PostList = () => {
  //  here State to store the full list of posts fetched from the API
  const [posts, setPosts] = useState([]);
  //here  State to store the filtered list of posts based on the search term
  const [filteredPosts, setFilteredPosts] = useState([]);

  // will Fetch posts from the API when the component mounts
  useEffect(() => {
    // here Using axios to make a GET request to the API
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // On success, update both posts and filteredPosts with the fetched data
        setPosts(response.data);
        setFilteredPosts(response.data);
      })
      .catch((error) => {
        // Log any error that occurs during the fetch
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures this runs only once after the first render

  //this Function to handle searching posts by title
  const handleSearch = (searchTerm) => {
    // Filter posts to include only those whose titles contain the search term (case-insensitive)
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Update the filteredPosts state with the search results
    setFilteredPosts(filtered);
  };

  return (
    <div>
      {/* Render the SearchBar component, passing handleSearch to it */}
      <SearchBar onSearch={handleSearch} />
      {/* Grid layout for displaying the posts in a responsive manner */}
      <Grid container spacing={2}>
        {/* Loop through filteredPosts to render each post as a card */}
        {filteredPosts.map((post) => (
          // Each post is rendered within a Grid item
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            {/* Display the post content inside a Material-UI Card */}
            <Card>
              <CardContent>
                {/* Post title */}
                <Typography variant="h5" component="h2">
                  {post.title}
                </Typography>
                {/* Post body */}
                <Typography color="textSecondary">{post.body}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PostList;
