// /src/components/Footer.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box pos='' as="footer" bg="red.600" color="white" textAlign="center" padding="1rem" mt="auto">
            <Text>&copy; 2024 HVAC & Electrical Services. All rights reserved.</Text>
        </Box>
    );
};

export default Footer;
