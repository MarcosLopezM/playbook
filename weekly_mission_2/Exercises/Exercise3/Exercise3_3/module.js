class tikTokData {
    constructor(name, username, bio, following, followers, likes) {
        this.name = name,
        this.username = username,
        this.bio = bio,
        this.following = following,
        this.followers = followers,
        this.likes = likes
    }

    getUserInfo() {
        return `${this.username} has this in its bio: ${this.bio}.`;
    }
    
    getGeneralInfo() {
        return `${this.username} has ${this.followers} followers and ${this.following} following. It's content has ${this.likes} likes.`;
    }
}

module.exports = tikTokData;