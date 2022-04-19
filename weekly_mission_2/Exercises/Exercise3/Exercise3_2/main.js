const facebook = require('./module.js')

const marcosFacebook = new facebook('Marcos', 'MarcosLopez', 1500, 22, "This is a bio", 'México', ["Instagram", "Tumblr", "Pinterest"])

console.log(marcosFacebook.getGeneralInfo())
console.log(marcosFacebook.getSocialMedia())