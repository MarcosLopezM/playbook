class facebookData {
    constructor(name, username, friends, age, bio, location, socialMedia) {
        this.name = name;
        this.username = username;
        this.friends = friends;
        this.age = age;
        this.bio = bio;
        this.location = location;
        this.socialMedia = socialMedia;
    }

    getGeneralInfo() {
        return `${this.name} has ${this.friends} friends and lives in ${this.location}.`;
    }

    getBio() {
        return `Learn something about ${this.username}: ${this.bio}`;
    }

    getSocialMedia(socialMedia) {
        return `${this.username} has the following social media accounts: ${this.socialMedia[0]}, ${this.socialMedia[1]}, ${this.socialMedia[2]}`;
    }
}

module.exports = facebookData;