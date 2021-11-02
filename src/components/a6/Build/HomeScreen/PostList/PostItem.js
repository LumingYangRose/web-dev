import React from "react";
import './forPostList.css'

const PostItem = ({post}) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img src={`${process.env.PUBLIC_URL}/images/${post.avatar}`} className="rounded-circle float-left" width="48"/>
                </div>
                <div className="col-11">
                    <div className="fw-bold">{post.userName}
                        <span>
                            <span className="fa-stack" style={{"fontSize":"0.5em"}}>
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                            </span>
                            <span> -  {post.time}</span>
                            <span className="float-end">...</span>
                        </span>
                    </div>
                    <div>{post.summary}</div>
                    <div className="card" >
                        <img src={`${process.env.PUBLIC_URL}/images/${post.image}`} className="rounded-top  card-img-top border border-dark" />
                        <div className="card-body border border-dark rounded-bottom">
                            <p className="card-text ">{post.content}</p>
                        </div>
                    </div>


                    <div className="d-flex justify-content-around">
                        <a href="#" className="float-left pe-2"><i className="far fa-comment"></i><span className="text-secondary">{post.commentNo}</span></a>
                        <a href="#" className="float-left pe-2"><i className="fas fa-retweet"></i><span className="text-secondary">{post.retweetNo}</span></a>
                        <a href="#" className="float-left pe-2"><i className="far fa-heart"></i><span className="text-secondary">{post.likeNo}</span></a>
                        <a href="#" className="float-left pe-2"><i className="fas fa-external-link-alt"></i></a>
                    </div>

                </div>
            </div>
        </li>

    );
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

// <div className="wd-post">
//     <img src={post.avatar} className="wd-avatar"/>
//     <div className="wd-white-lg-text">{post.userName}<Span className="wd-gray-text">@{post.handle} {post.time}</Span></div>
//     <div className="wd-white-sm-text">{post.summary}</div>
//     <img className="wd-post-img" src={post.image}/>
//     <div className="wd-post-bottom wd-white-post-text">${post.content}</span></div>
// <a href="#"><i className="far fa-comment wd-icon-1"></i><span className="wd-gray-text wd-icon-num1">{post.commentNo}</span></a>
// <a href="#"><i className="fas fa-retweet wd-icon-2"></i><span className="wd-gray-text wd-icon-num2">{post.retweetNo}</span></a>
// <a href="#"><i className="far fa-heart wd-icon-3"></i><span className="wd-gray-text wd-icon-num3">{post.likeNo}</span></a>
// <a href="#"><i className="fas fa-external-link-alt wd-icon-4"></i></a>
// </div>