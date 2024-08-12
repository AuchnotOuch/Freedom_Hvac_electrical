// /src/pages/Services.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const response = await axios.get('/api/services');
            setServices(response.data);
        };
        fetchServices();
    }, []);

    return (
        <Box>
            <Heading width='100vw' textAlign='center' as="h1" mb={6}>
                Our Services
            </Heading>
            <Grid width={'100vw'} justifyContent='center' alignItems='center' templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
                {services.map((service) => (
                    <GridItem key={service._id}>
                        <ServiceCard
                            title={service.title} description={service.description}
                            imageUrl={service.imageUrl}
                        />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
};

export default Services
