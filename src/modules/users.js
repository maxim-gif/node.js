const fs = require('fs');
const path = require('path');

const getUser = () => {
    const filePath = path.join(__dirname, '../data/users.json')
    return fs.readFileSync(filePath)
}
module.exports = getUser;