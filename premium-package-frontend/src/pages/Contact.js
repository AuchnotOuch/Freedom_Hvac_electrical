// /src/pages/Contact.js
import React from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const Contact = () => {
    return (
        <Box maxW="600px" mx="auto">
            <Heading as="h1" mb={6} textAlign="center">
                Contact Us
            </Heading>
            <FormControl id="name" mb={4}>
                <FormLabel>Your Name</FormLabel>
                <Input type="text" />
            </FormControl>
            <FormControl id="email" mb={4}>
                <FormLabel>Your Email</FormLabel>
                <Input type="email" />
            </FormControl>
            <FormControl id="message" mb={4}>
                <FormLabel>Your Message</FormLabel>
                <Textarea />
            </FormControl>
            <Button colorScheme="blue" size="lg" w="full">
                Send Message
            </Button>
        </Box>
    );
};

export default Contact;
