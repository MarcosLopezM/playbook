// Ejercicio 1: Modelando con objetos

// Modelando Twitter con objetos

console.log("Modelando Twitter con objetos");

const twitter = {

    user: {
        name: "Marcos López",
        username: "@lmmarcosml",
        bio: "FullStack Developer",
        location: "México",
        birthday: "10/10/1990",
        following: "122",
        followers: "1"
    },

    trendingTopics:{
        sports: {
            sports1: "Stokes"
        },
        entertainment: {
            entertainment1: "Aespa"
        },
        news: {
            news1: "Channel"
        }
    },

    hashtags: {
        hashtag1: "#JoseRamonLopezBeltran60",
        hashtag2: "#selfiesforchan",
        hashtag3: "#JuevesSanto"
    },

    getGeneralInfo: function () {
        return `This is ${this.user.name}'s profile with username: ${this.user.username}`;
    },

    getTrendingTopics: function () {
        return `This are some trending topics in Twitter: ${this.trendingTopics.sports.sports1}, ${this.trendingTopics.entertainment.entertainment1}, ${this.trendingTopics.news.news1}.`; 
    },

    getHashtags: function () {
        return `This are some trending hashtags: ${this.hashtags.hashtag1}, ${this.hashtags.hashtag2}, ${this.hashtags.hashtag3}.`;
    }
}

console.log(twitter.getGeneralInfo());
console.log(twitter.getTrendingTopics());
console.log(twitter.getHashtags());