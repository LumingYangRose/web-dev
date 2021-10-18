import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-3 col-lg-1 col-xl-2">
            ${NavigationSidebar('Explore')}
        </div>
        
        <div class="col-sm-8 col-md-8 col-lg-6 col-xl-6 col-xxl-6">
            ${ExploreComponent()}
        </div>
        
        <div class="d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block col-lg-4 col-xl-4 col-xxl-4">
            ${WhoToFollowList()}
        </div>

        </div>
    `);
})($);



