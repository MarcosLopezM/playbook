const tikTok = require('./module.js')

const marcosTiktok = new tikTok('Marcos', '@marcos', 'I am a software developer', '10', '1,000', '4.5 M');

console.log(`This account is named ${marcosTiktok.name}.`);
console.log(marcosTiktok.getUserInfo());
console.log(marcosTiktok.getGeneralInfo());