class twitterData {
    constructor (name, username, bio, location, following, followers, hashtags, trendingTopics) {
        this.name = name,
        this.username = username,
        this.bio = bio,
        this.location = location,
        this.following = following,
        this.followers = followers,
        this.hashtags = hashtags,
        this.trendingTopics = trendingTopics;
    }

    getUserInfo () {
        return `This is ${this.name}'s profile with username: ${this.username}`;
    }

    getFollowers () {
        return `${this.username} has ${this.followers} followers.`;
    }

    getHashtags () {
        return `The hashtags trending are ${this.hashtags}`;
    }

    getTrendingTopics () {
        return `The trending topics are ${this.trendingTopics}`;
    }
}

module.exports = twitterData;