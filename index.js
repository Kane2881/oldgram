const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const contentEl = document.getElementById("content")

for (let i = 0; i < posts.length; i++) {
    renderContentEl(posts[i])
}

function renderContentEl(content) {
    contentEl.innerHTML += `
        <div class="post">
            <div class="post-header">
                <img class="user-avatar" src="${content.avatar}" />
                <div class="user-info">
                    <h1 class="user-name">${content.name}</h1>
                    <p class="user-location">${content.location}</p>
                </div>
            </div>
            
            <img src="${content.post}" />
            
            <div class="post-interactions">
                <div class="icons-flexbox">
                    <img class="icons" src="images/icon-heart.png" />
                    <img class="icons" src="images/icon-comment.png" />
                    <img class="icons" src="images/icon-dm.png" />
                </div>
                <p class="post-likes">${content.likes} likes</p>
                <p class="post-comment">${content.username}<span> ${content.comment}</span></p>
            </div>
        </div>
    `
}