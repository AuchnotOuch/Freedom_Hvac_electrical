// /src/components/BlogPostCard.js
import React, { useState } from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';
import './BlogPostCard.css'; // Import the CSS file for the flip effect

const BlogPostCard = ({ title, author, date, excerpt, content, imageUrl }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <Box
            className={`card ${isFlipped ? 'flipped' : ''}`}
            onClick={handleCardClick}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            cursor="pointer"
            minH="300px"
            maxH="400px"
            boxShadow={'xl'}
        >
            {/* Front Side */}
            <Box className="card-front">
                <Image src={imageUrl} alt={title} className="card-image" />
                <Box className="card-overlay">
                    <Heading as="h3" size="md" mb={2} color="white">
                        {title}
                    </Heading>
                    <Text fontSize="sm" color="white">
                        By {author} - {new Date(date).toLocaleDateString()}
                    </Text>
                    <Text mt={4} color="white">
                        {excerpt}
                    </Text>
                </Box>
            </Box>

            {/* Back Side */}
            <Box className="card-back" p="6" overflowY="auto">
                <Heading as="h3" size="md" mb={2}>
                    {title}
                </Heading>
                <Text fontSize="sm" color="gray.600" mb={4}>
                    By {author} - {new Date(date).toLocaleDateString()}
                </Text>
                <Text>
                    {content}
                </Text>
            </Box>
        </Box>
    );
};

export default BlogPostCard;
