// Ejercicio 1: Modelando con objetos

// Modelando TikTok con objetos

const tikTokUser = {
    user: "Marcos",
    username: "MarcosLopez",
    bio: "This is a bio",
    following: 500,
    followers: 66000,
    likes: "2.9 M",

    getGeneralInfo: function () {
        return `${this.username} has this in its bio: ${this.bio}.`;
    },
    getFollowers: function () {
        return `${this.user} has ${this.followers} followers.`;
    }
}

console.log(`${tikTokUser.user}'s content has ${tikTokUser.likes} likes.`);
console.log(tikTokUser.getGeneralInfo());
console.log(tikTokUser.getFollowers());