// /src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Box, Heading, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/auth/login', { username, password });
            localStorage.setItem('token', response.data.token);
            setError('');
            // Redirect to the admin dashboard or another secure page
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <Box maxW="400px" mx="auto">
            <Heading as="h1" mb={6} textAlign="center">
                Login
            </Heading>
            <FormControl id="username" mb={4}>
                <FormLabel>Username</FormLabel>
                <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </FormControl>
            <FormControl id="password" mb={4}>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            {error && (
                <Text color="red.500" mb={4}>
                    {error}
                </Text>
            )}
            <Button colorScheme="blue" size="lg" w="full" onClick={handleLogin}>
                Login
            </Button>
        </Box>
    );
};

export default Login;
