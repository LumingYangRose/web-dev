import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
        <>
            <div className="row p-2">
                <div className="col-11 rounded-pill bg-white" >
                    <i className="fas fa-search p-2"></i>
                    <span className="p-2 text-black" >Search Twitter</span>
                </div>
                <div className="col-1 ps-2"><i className="fas fa-cog"></i></div>
            </div>
            <ul className="nav mb-2 nav-tabs ">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-sm-none d-md-block">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>

            <img src={`${process.env.PUBLIC_URL}/images/starship.jpg`} alt="" className="col-12 pb-2" />
            <p className="carousel-caption">Some text here</p>

            <PostSummaryList/>
        </>

    );
}
export default ExploreComponent;
//
// <div className="image-new">
//     <img src={`${process.env.PUBLIC_URL}/images/starship.jpg`} width="30%" alt="" />
//     <h2><span>SpaceX's Starship</span></h2></div><br/>

// <div className="container">
//     <img src={`${process.env.PUBLIC_URL}/images/starship.jpg`}>
//         <div className="bottom-left">SpaceX's Starship</div>
//
// </div>

// <img src={`${process.env.PUBLIC_URL}/images/starship.jpg`} className="card-img-top" alt="Card image cap">
//     <div className="bottom-left">SpaceX's Starship</div>
// </img>

// <div className="overlay-text">SpaceX's Starship</div>

// <div className="input-group">
//
//     <input className="form-control border-end-0 border rounded-pill fa-stack" type="search" value="search"/>
//     <span >
//                     <i className="input-group-prepend fa fa-search"></i>
//                 </span>
//
// </div>

//
// `
//             <div class="row ps-3">
//                  <div class="col-10 border border-light-grey round p-2" style="background-color: white">
//                     <i class="fas fa-search icon p-1"></i>
//                     <span class="ps-3" style="color:#232324">Search Twitter</span>
//                 </div>
//                 <div class="col-1"><i class="fas fa-cog p-3 font-size:2vm"></i></div>
//            </div>
//            <ul class="nav mb-2 nav-tabs">
//                  <li class="nav-item">
//                         <a class="nav-link active"  href="for-you.html">For You</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="trending.html">Trending</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link " href="news.html">News</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="sports.html" >Sports</a>
//                     </li>
//                     <li class="nav-item d-sm-none d-md-block">
//                         <a class="nav-link" href="entertainment.html" >Entertainment</a>
//                     </li>
//            </ul>
//            <div class="image">
//                         <img src="../../images/starship.jpg" class="card-img-top" alt="Card image cap">
//                         <div class="overlay-text">SpaceX's Starship</div>
//                     </div>
//            <PostSummaryList()>
//     `
