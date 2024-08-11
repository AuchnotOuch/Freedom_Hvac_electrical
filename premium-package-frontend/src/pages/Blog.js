// /src/pages/Blog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Grid, GridItem } from '@chakra-ui/react';
import BlogPostCard from '../components/BlogPostCard';

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            const response = await axios.get('/api/blogs');
            setBlogPosts(response.data);
        };
        fetchBlogPosts();
    }, []);

    return (
        <Box>
            <Heading as="h1" mb={6} textAlign="center">
                Blog
            </Heading>
            <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
                {blogPosts.map((post) => (
                    <GridItem key={post._id}>
                        <BlogPostCard
                            id={post._id}
                            title={post.title}
                            author={post.author}
                            date={post.createdAt}
                            excerpt={post.content.substring(0, 100)}  // Show only the first 100 characters
                            content={post.content}  // Pass the full content for the back of the card
                            imageUrl={post.imageUrl}
                        />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default Blog;
