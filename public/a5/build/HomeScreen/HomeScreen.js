import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

(function ($) {
    $('#wd-homeScreen').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-3 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        
        <div class="col-sm-8 col-md-8 col-lg-6 col-xl-6 col-xxl-6">
            ${PostList()}
        </div>
        
        <div class="d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block col-lg-4 col-xl-4 col-xxl-4">
            ${PostSummaryList()}
        </div>
        
        </div>
    `)
})($);

// d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block

