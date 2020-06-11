const faker = require('faker');
const urls = [];

for(let i = 0; i<3; i++){
    urls.push(faker.image.imageUrl());
}

console.log(urls);