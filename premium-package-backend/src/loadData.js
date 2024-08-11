// /src/loadData.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { faker } from '@faker-js/faker';
import connectDB from './config/db.js';
import BlogPost from './models/BlogPost.js';
import TeamMember from './models/TeamMember.js';
import Service from './models/Service.js';

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Function to generate fake data
const generateData = async () => {
    try {
        // Clear existing data
        await BlogPost.deleteMany();
        await TeamMember.deleteMany();
        await Service.deleteMany();

        // Seed Services
        const services = [];
        for (let i = 0; i < 5; i++) {
            services.push({
                title: faker.company.buzzPhrase(),
                description: faker.lorem.paragraph(),
                imageUrl: faker.image.urlLoremFlickr({ category: 'business' }),
            });
        }
        await Service.insertMany(services);
        console.log('Services seeded!');

        // Seed Team Members
        const teamMembers = [];
        for (let i = 0; i < 5; i++) {
            teamMembers.push({
                name: faker.person.fullName(),  // Replaced faker.name with faker.person
                role: faker.person.jobTitle(),  // Replaced faker.name.jobTitle with faker.person.jobTitle
                bio: faker.lorem.paragraph(),
                imageUrl: faker.image.avatar(),
            });
        }
        await TeamMember.insertMany(teamMembers);
        console.log('Team Members seeded!');

        // Seed Blog Posts
        const blogPosts = [];
        for (let i = 0; i < 5; i++) {
            blogPosts.push({
                title: faker.lorem.sentence(),
                content: faker.lorem.paragraphs(5),
                author: faker.person.fullName(),  // Replaced faker.name with faker.person
                imageUrl: faker.image.urlLoremFlickr({ category: 'abstract' }),
            });
        }
        await BlogPost.insertMany(blogPosts);
        console.log('Blog Posts seeded!');

        console.log('All data seeded!');
        process.exit();
    } catch (error) {
        console.error(`Error seeding data: ${error.message}`);
        process.exit(1);
    }
};

// Execute the data generation
generateData();
