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