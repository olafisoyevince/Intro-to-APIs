function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    let postLayout = document.getElementById('post-layout');
    let html = "";
    data.forEach(element => {
      
      html += `
            <div class="col-md-4 mb-4 text-decoration-none text-dark" onclick=page(${element.id})>
              <div class="card h-100">
                <div class="card-body">
                  <div class="d-flex justify-content-end">
                    <h1>${element.id}</h1>
                  </div>
                  <h5 class="post-title mb-4">${element.title}</h5>
                  <p class="post-body">${element.body}</p>
                </div>
              </div>
            </div>
      `
      postLayout.innerHTML = html;

      
    });
  })
}


getPosts();




function page(id) {

  localStorage.setItem("posts", id);

  postId = localStorage.getItem("posts");
  console.log(postId);

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(response => response.json())
  .then((element) => {

    let displayPosts = document.getElementById('post-layout');
    let html = "";

    html = `
      <div class="col-lg-3" onclick="page()">
        <div class="displayed-post-page">
          <h1>${element.id}</h1>
          <h3 class="displayed-post-title">${element.title}</h3>
          <p class="displayed-post-body">${element.body}</p>
        </div>
        <a href="API.html"><button type="submit" class="btn btn-light btn-outline-dark">Back</button></a>
      </div>
    `

    displayPosts.innerHTML = html;

  })
}



// let postTitle = document.querySelector('#post-title');
// let postBody = document.querySelector('#post-body');
// let postForm = document.querySelector('#post-form');

// postForm.addEventListener('submit', createPosts);

// function createPosts(event) {

//   event.preventDefault();

//   let pTitle = postTitle.value;
//   let pBody = postBody.value;
//   console.log('Post Title', pTitle);
//   console.log('Post Body', pBody);

//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'Post',
//     body: JSON.stringify({
//       title: pTitle,
//       body: pBody,
//       userid: 5
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('post', data)
//     alert('Post created succesfully')
//   })
// }; 



