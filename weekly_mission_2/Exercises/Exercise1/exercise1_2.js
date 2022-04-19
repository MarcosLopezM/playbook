// Ejercicio 1: Modelando con objetos

// Modelando Facebook con objetos

/*
-----¿Qué vemos en pantalla?-----

-----* Homepage *-----

    - Stories
    - Posts
    - Reels
    - What's on your mind?

-----* Friends *-----
    
    - Friend Requests
        * User1
        * User2
    - People you may know
        * New User1
        * New User2
-----* Profile *-----
    - name
    - social media
        * Instagram
        * Pinterest
        * Tumblr
    - About info
        * Work
        * Education
            ** College
            ** High School
            ** Middle School
        * Location
        * Basic Info
            ** Gender
            ** Birthday
            ** Languages
*/

console.log("Modelando Facebook con objetos");
console.log("--------------------");

const facebookHomePage = {
    stories: {
        friendStories: ["friend1", "friend2", "friend3"],
        pagesStories: ["page1", "page2", "page3"]
    },
    posts: ["post1", "post2", "post3"],

    getTotalStories: function () {
        return `Total stories: ${this.stories.friendStories.length + this.stories.pagesStories.length}`;
    },
    getTotalPosts: function () {
        return `Total posts: ${this.posts.length}`;
    }
}

console.log(`Your friends ${facebookHomePage.stories.friendStories[0]} and ${facebookHomePage.stories.friendStories[1]} have posted stories.`);
console.log(facebookHomePage.getTotalPosts());
console.log(facebookHomePage.getTotalStories());
console.log("--------------------");

const facebookFriends = {
    friendRequests: ["user1", "user2"],
    peopleYouMayKnow: ["newUser1", "newUser2", "newUser3"],

    getFriendRequests: function () {
        return `Total friend requests: ${this.friendRequests.length}`;
    },
    getPeopleYouMayKnow: function () {
        return `You may know ${this.friendRequests[0]} or ${this.friendRequests[1]}.`;
    }
}

console.log(`You have a friend request from ${facebookFriends.friendRequests[0]}.`);
console.log(facebookFriends.getFriendRequests());
console.log(facebookFriends.getPeopleYouMayKnow());
console.log("--------------------");

const facebookProfile = {
    username: "Marcos",
    friends: 500,
    work: "Student and programmer",
    age: 22,
    socialMedia: {
        instagram: "marcos",
        pinterest: "marcos",
        tumblr: "marcos"
    },
    location: "Mexico",

    getGeneralInfo: function () {
        return `${this.username} has ${this.friends} friends and he's a ${this.work} based in ${this.location}.`;
    },
    getSocialMedia: function () {
        return `${this.username} can be found on  ${this.socialMedia.instagram} on Instagram, ${this.socialMedia.pinterest} on Pinterest and ${this.socialMedia.tumblr} on Tumblr.`;
    }
}

console.log(`${facebookProfile.username} is ${facebookProfile.age} years old.`);
console.log(facebookProfile.getGeneralInfo());
console.log(facebookProfile.getSocialMedia());