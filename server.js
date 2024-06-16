/**
*  WEB322 - Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites, friends gpt or otherwise) or distributed to other students.
*  I understand that if caught doing so, I will receive zero on this assignment and possibly 
*  fail the entire course.
*  Name: RITHIKA RAMASAMY
*  Student ID: 145410221
*  Date:6/15/20241
*  Vercel Web App URL:https://vercel.com/rithikas-projects-9df69c7c
*  GitHub Repository URL:https://github.com/rramasamy1?tab=repositories&ocid=AIDcmmli8vlwie_SEM__k_Cj0KCQjwjLGyBhCYARIsAPqTz19AgtO2cWgGewcv44-jBoK2aePoNGoOH9JSuGMb6ZxR1XxPm0ta27waAqL0EALw_wcB_k_
**/

 // server.js 

const express = require('express');
cconst express = require('express');
const path = require('path');
const storeService = require('./data/store-service');

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'shop.html'));
});

app.get('/items', (req, res) => {
    storeService.getItems()
        .then(items => res.json(items))
        .catch(err => res.status(500).json({ message: err.message }));
});

app.get('/categories', (req, res) => {
    storeService.getCategories()
        .then(categories => res.json(categories))
        .catch(err => res.status(500).json({ message: err.message }));
});

// Handle 404 - Keep this at the end of all routes
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});
