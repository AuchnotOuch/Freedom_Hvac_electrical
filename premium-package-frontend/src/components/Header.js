// /src/components/Header.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Box, Link } from '@chakra-ui/react';

const Header = () => {
    return (
        <Flex as="nav" bg="blue.600" color="white" padding="1rem" justifyContent="space-between">
            <Flex>
                <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
                    HVAC & Electrical Services
                </Link>
            </Flex>
            <Flex>
                <Link as={RouterLink} to="/" mr="4">
                    Home
                </Link>
                <Link as={RouterLink} to="/about" mr="4">
                    About
                </Link>
                <Link as={RouterLink} to="/services" mr="4">
                    Services
                </Link>
                <Link as={RouterLink} to="/blog" mr="4">
                    Blog
                </Link>
                <Link as={RouterLink} to="/contact" mr="4">
                    Contact
                </Link>
                <Link as={RouterLink} to="/login">
                    Login
                </Link>
            </Flex>
        </Flex>
    );
};

export default Header;
