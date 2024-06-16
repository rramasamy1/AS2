// data/store-service.js

const fs = require('fs');
const path = require('path');

// File paths
const itemsFilePath = path.join(__dirname, 'items.json');
const categoriesFilePath = path.join(__dirname, 'categories.json');

// Function to read items from items.json
function getItems() {
    return new Promise((resolve, reject) => {
        fs.readFile(itemsFilePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            try {
                const items = JSON.parse(data);
                resolve(items);
            } catch (error) {
                reject(error);
            }
        });
    });
}

// Function to read categories from categories.json
function getCategories() {
    return new Promise((resolve, reject) => {
        fs.readFile(categoriesFilePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            try {
                const categories = JSON.parse(data);
                resolve(categories);
            } catch (error) {
                reject(error);
            }
        });
    });
}

// Exporting functions
module.exports = {
    getItems,
    getCategories
};
