// /src/components/ServiceCard.js
import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';

const ServiceCard = ({ title, description, imageUrl }) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={imageUrl} alt={title} />
            <Box p="6">
                <Heading as="h3" size="md" mb={2}>
                    {title}
                </Heading>
                <Text fontSize="sm">{description}</Text>
            </Box>
        </Box>
    );
};

export default ServiceCard;
