const sharp = require('sharp');
const path = require('path');
const imagePath = path.join(__dirname, 'public', 'images', 'OG.jpg');

sharp(imagePath)
    .metadata()
    .then(metadata => {
        console.log('Dimensions:', metadata.width, 'x', metadata.height);
        console.log('Format:', metadata.format);
    })
    .catch(err => {
        console.error('Error:', err.message);
    });
