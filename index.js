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


let No1 =document.getElementById("name1")
No1.textContent=posts[0].name
let Lo1=document.getElementById("location1")
Lo1.textContent=posts[0].location
let lik1=document.getElementById("likes1")
lik1.textContent=`${posts[0].likes} likes`
let com1=document.getElementById("comments1")
com1.textContent=`${posts[0].comment}`
let username1=document.getElementById("user1")
username1.textContent=`${posts[0].username}`


let No2 =document.getElementById("name2")
No2.textContent=posts[1].name
let Lo2=document.getElementById("location2")
Lo2.textContent=posts[1].location
let lik2=document.getElementById("likes2")
lik2.textContent=`${posts[1].likes} likes`
let com2=document.getElementById("comments2")
com2.textContent=`${posts[1].comment}`
let username2=document.getElementById("user2")
username2.textContent=`${posts[1].username}`



let No3 =document.getElementById("name3")
No3.textContent=posts[2].name
let Lo3=document.getElementById("location3")
Lo3.textContent=posts[2].location
let lik3=document.getElementById("likes3")
lik3.textContent=`${posts[2].likes} likes`
let com3=document.getElementById("comments3")
com3.textContent=`${posts[2].comment}`
let username3=document.getElementById("user3")
username3.textContent=`${posts[2].username}`

