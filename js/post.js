function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPost(data))
}

/*
1.get the container element where you want to the new elements 
2.create child element
3.set innerText or innerHtml 
4.appendChild
*/

function displayPost(posts){
    const postContainer=document.getElementById('posts-container')
for(const post of posts){ 
    const postDiv=document.createElement('div')
    postDiv.classList.add('post')
    console.log(post)
    postDiv.innerHTML=`
    <h4>User-${post.userId}</h4>
    <h5>Post:title:${post.title}</h5>
    <p>Post description:${post.body}</p>

    `
    postContainer.appendChild(postDiv)
}
}
loadPost()

