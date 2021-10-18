import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group ">
            <li class="list-group-item">Who to follow</li>
            ${
                who.map(followee => {
                    return(WhoToFollowListItem(followee));
                }).join('')
            }
        </ul>
    `);
}

export default WhoToFollowList;

