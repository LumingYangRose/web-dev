
const PostSummaryItem = (post) => {
    return (`
        <div class=" row pt-2 pb-2" style="border-color: grey">
            <div class="col-10">
                <div class="grey-text"> ${post.topic} </div>
                <div style="color: white"> ${post.userName}
                    <i class="fas fa-check-circle"></i>
                    <span class="grey-text"> - ${post.time}</span>
                </div>
                <div style="color: white">
                    ${post.title}
                </div>
            </div>
            <div class="col-2">
                <img class="rounded fr img-fluid" src=${post.image}/>
            </div>
        </div>
    `);
}
export default PostSummaryItem;