import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="row ps-3">
                 <div class="col-10 border border-light-grey round p-2" style="background-color: white">
                    <i class="fas fa-search icon p-1"></i>
                    <span class="ps-3" style="color:#232324">Search Twitter</span>
                </div>
                <div class="col-1"><i class="fas fa-cog p-3 font-size:2vm"></i></div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                 <li class="nav-item">
                        <a class="nav-link active"  href="for-you.html">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html" >Sports</a>
                    </li>
                    <li class="nav-item d-sm-none d-md-block">
                        <a class="nav-link" href="entertainment.html" >Entertainment</a>
                    </li>
           </ul>
           <div class="image">
                        <img src="../../images/starship.jpg" class="card-img-top" alt="Card image cap">
                        <div class="overlay-text">SpaceX's Starship</div>
                    </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
