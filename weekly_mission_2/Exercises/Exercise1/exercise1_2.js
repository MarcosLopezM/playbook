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

const facebookFriends = {

}

const facebookProfile = {

}