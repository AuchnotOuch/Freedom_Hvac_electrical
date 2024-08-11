// /src/pages/About.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Flex, Box, Heading, Text, Grid, GridItem } from '@chakra-ui/react';
import TeamMemberCard from '../components/TeamMemberCard';

const About = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            const response = await axios.get('/api/team');
            setTeamMembers(response.data);
        };
        fetchTeamMembers();
    }, []);

    return (
        <Box>
            <Flex direction={'column'} justify={"center"} align={"center"}>
                <Heading as="h1" mb={6} textAlign="center">
                    About Us
                </Heading>
                <img width='100px' src='/images/logo.png'></img>
                <Text fontSize="lg" mb={6} textAlign="center">
                    We are a dedicated team of HVAC and Electrical service professionals committed to providing top-notch solutions for your home and business.
                </Text>
            </Flex>
            <Heading as="h2" size="lg" mb={4}>
                Meet Our Team
            </Heading>
            <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6} p={10}>
                {teamMembers.map((member) => (
                    <GridItem key={member._id}>
                        <TeamMemberCard
                            name={member.name}
                            role={member.role}
                            bio={member.bio}
                            imageUrl={member.imageUrl}
                        />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default About;
