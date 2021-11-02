import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../images/react-blue.png"
        }

    }

) => {
    return (

        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="text-secondary">{post.topic}</div>
                    <div className="fw-bold">{post.userName}
                        <span>
                            <span className="fa-stack" style={{"fontSize":"0.5em"}}>
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                            </span>
                            <span> -  {post.time}</span>
                        </span>
                    </div>
                    <div>
                        {post.title}
                    </div>
                </div>
                <div className="col-2">
                    <img src={`${process.env.PUBLIC_URL}/images/${post.image}`} width="80" className="rounded-corners-all-around float-end"/>
                </div>
            </div>

        </li>


    );
}
export default PostSummaryItem;

// <div className=" row pt-2 pb-2" style={{"border-color": "grey"}}>
//     <div className="col-10">
//         <div className="grey-text"> {post.topic} </div>
//         <div style={{"color": "white"}}> {post.userName}
//             <i className="fas fa-check-circle"></i>
//             <span className="grey-text"> - {post.time}</span>
//         </div>
//         <div style={{"color": "white"}}>
//             {post.title}
//         </div>
//     </div>
//     <div className="col-2">
//         <img className="rounded fr img-fluid" src={post.image}/>
//     </div>
// </div>