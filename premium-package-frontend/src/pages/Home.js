// /src/pages/Home.js
import React from 'react';
import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
    return (
        <Box justifyContent='center' margin='0' padding='0' display="flex" alignItems="center" className="home-container">
            {/* Left Section with Image */}
            <Box flex="1" className="image-container">
                <Image src="/images/worker1.jpg" alt="American Flag" className="blended-image" />
            </Box>
            {/* Right Section with Welcome Message */}
            <Box flex="1" textAlign="center" py={10} className="text-container">
                <Heading as="h1" size="2xl" mb={4}>
                    Welcome to Freedom HVAC & Electrical Services
                </Heading>
                <Text fontSize="lg" mb={6}>
                    Your number one trusted partner in providing top-notch HVAC and Electrical services for your home and business.
                </Text>
                <Button as={RouterLink} to="/services" colorScheme="blue" size="lg">
                    Explore Our Services
                </Button>
                <img className='ribbon' src='/images/goldribbon.png'></img>
            </Box>
        </Box>
    );
};

export default Home;
