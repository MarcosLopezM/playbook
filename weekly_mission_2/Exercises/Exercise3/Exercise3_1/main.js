const twitter = require('./module.js');

const marcosTwitter = new twitter('Marcos', '@lmmarcosml', 'FullStack Developer', 'México', 500, 1000, ['#TheFirstLady', '#Edomex', '#OurBluesJiminOST'], ['Litio', 'Corea', 'Cádiz']);

console.log(marcosTwitter.getUserInfo());
console.log(`Marcos is from ${marcosTwitter.location}.`);
console.log(marcosTwitter.getFollowers());
console.log(marcosTwitter.getHashtags());
console.log(`${marcosTwitter.hashtags[0]} and ${marcosTwitter.trendingTopics[1]} are trending right now.`);
console.log(marcosTwitter.getTrendingTopics());