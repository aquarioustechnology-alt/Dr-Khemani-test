const fs = require('fs');
const https = require('https');
const path = require('path');

const users = [
    { "name": "Sahid Khan", "url": "https://lh3.googleusercontent.com/a-/ALV-UjWnxJMTyiACCyXhT1eT-eQUvzkmhyh09uuciqsRbRCVIAwZoLkf=s128-c-rp-mo-br100" },
    { "name": "Riya Chakraborty", "url": "https://lh3.googleusercontent.com/a-/ALV-UjWWqNjTruglwqPCiyQkSlgU3rNgqulMSW36aMeTa6QVCMBhuZb9aw=s128-c-rp-mo-br100" },
    { "name": "Manoshi Ghosh", "url": "https://lh3.googleusercontent.com/a-/ALV-UjVlmY4oAvmugO7rVOK_qdamGinLXfwWnmouqnnU8urzjLch3_o1YQ=s128-c-rp-mo-br100" },
    { "name": "Piyasa Pramanick", "url": "https://lh3.googleusercontent.com/a-/ALV-UjUDqBmHOx1vaYjC_S6NqKgJ03hvKJZZK3ZcNoqSqtGx2f-rDEk=s128-c-rp-mo-br100" },
    { "name": "Sayashi", "url": "https://lh3.googleusercontent.com/a-/ALV-UjUA_lMlaYk92B32YFNj56hCSSYsPleS_uuEfHbeNshZKNQSj24B=s128-c-rp-mo-br100" }
];

const dir = 'D:\\Aquarious-work\\node\\Dr-khemani\\Dr-khemani\\Dr-Khemani-test\\public\\images\\avatars\\google';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

users.forEach(user => {
    const filePath = path.join(dir, user.name.replace(/ /g, '-').toLowerCase() + '.jpg');
    const file = fs.createWriteStream(filePath);
    https.get(user.url, function (response) {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${filePath}`);
        });
    }).on('error', (e) => {
        fs.unlink(filePath, () => { });
        console.error(`Error downloading ${user.name}: ${e.message}`);
    });
});
