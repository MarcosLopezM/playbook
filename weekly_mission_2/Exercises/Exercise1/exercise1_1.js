// Ejercicio 1: Modelando con objetos

// Modelando Twitter con objetos

console.log("Modelando Twitter con objetos");

const twitterUser = {
    name: "Marcos",
    username: "@lmmarcosml",
    bio: "FullStack Developer",
    location: "México",
    following: 500,
    followers: 1000,

    getUserInfo: function () {
        return `This is ${this.name}'s profile with username: ${this.username}`;
    },
    getFollowers: function () {
        return `${this.username} has ${this.followers} followers.`;
    }
}

console.log(`${twitterUser.name} is from ${twitterUser.location}.`);
console.log(twitterUser.getUserInfo());
console.log(twitterUser.getFollowers());
console.log("--------------------");

const twitterExplore = {
    hashtags: ["#TheFirstLady", "#Edomex", "#OurBluesJiminOST"],
    trendingTopics: ["Litio", "Corea", "Cádiz"],

    getHashtags: function () {
        return `${this.hashtags[0]} and ${this.hashtags[1]} are trending topics.`;
    },
    getTrendingTopics: function () {
        return `${this.trendingTopics[0]} and ${this.trendingTopics[1]} are trending topics.`;
    }
}

console.log(`${twitterExplore.hashtags[1]} is trending.`);
console.log(twitterExplore.getHashtags());
console.log(twitterExplore.getTrendingTopics());