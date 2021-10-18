import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

(function ($) {
    $('#wd-homeScreen').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-3 col-lg-1 col-xl-2">
            ${NavigationSidebar('Home')}
        </div>
        
        <div class="ps-3 col-sm-7 col-md-7 col-lg-7 col-xl-8 col-xxl-7">
            ${PostList()}
        </div>
        
        <div class="ps-3 d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block col-lg-4 col-xl-4 col-xxl-3">
            ${PostSummaryList()}
        </div>
        
        </div>
    `)
})($);

// d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block

