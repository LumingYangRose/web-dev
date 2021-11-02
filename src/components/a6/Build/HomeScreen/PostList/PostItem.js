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