import icons from "./icons.js";
import NavigationItem from "./navigationItem.js";

const NavigationSidebar = () => {
    return(`
            <ul class="list-group ">
                ${
                    icons.map(icon => {
                        return(NavigationItem(icon));
                    }).join('')
                    }
            </ul>
            
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
