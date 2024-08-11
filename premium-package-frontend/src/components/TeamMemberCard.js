// /src/components/TeamMemberCard.js
import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';

const TeamMemberCard = ({ name, role, bio, imageUrl }) => {
    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow={'xl'}

        >
            <Image src={imageUrl} alt={name} borderRadius="full" boxSize="150px" mx="auto" mt={4} />
            <Box p="6" textAlign="center" bg="rgba(255, 255, 255, 0.7)" borderRadius="md">
                <Heading as="h3" size="md" mb={2}>
                    {name}
                </Heading>
                <Text fontSize="sm" color="gray.600">
                    {role}
                </Text>
                <Text mt={2}>{bio}</Text>
            </Box>
        </Box>
    );
};

export default TeamMemberCard;
