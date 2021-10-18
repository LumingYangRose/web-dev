const PostItem = (post) => {
    return(` 
        <div class="wd-post">
            <img src=${post.avatar} class="wd-avatar"/>
            <div class="wd-white-lg-text">${post.userName}<Span class="wd-gray-text">    @${post.handle} ${post.time}</Span></div>
            <div class="wd-white-sm-text">${post.summary}</div>
            <img class="wd-post-img" src=${post.image}/>
            <div class="wd-post-bottom wd-white-post-text">${post.content}</span></div>
        <a href="#"><i class="far fa-comment wd-icon-1"></i><span class="wd-gray-text wd-icon-num1">${post.commentNo}</span></a>
        <a href="#"><i class="fas fa-retweet wd-icon-2"></i><span class="wd-gray-text wd-icon-num2">${post.retweetNo}</span></a>
        <a href="#"><i class="far fa-heart wd-icon-3"></i><span class="wd-gray-text wd-icon-num3">${post.likeNo}</span></a>
        <a href="#"><i class="fas fa-external-link-alt wd-icon-4"></i></a>
        </div>
    `);
}
export default PostItem;




// <div className="card text-white bg-light mb-1" style="max-width: 20rem;">
//     <div className="card-header">Header</div>
//     <div className="card-body">
//         <h4 className="card-title">Dark card title</h4>
//         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
//             content.</p>
//     </div>
// </div>