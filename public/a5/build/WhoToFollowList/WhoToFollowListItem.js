

const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <img src=${who.avatarIcon} class=" rounded-circle avatar"/>
            <button type = "button" class="btn btn-primary btn-block rounded-pill fr">Follow</button>

            <div class="  ps-5 ">${who.userName}<i class="fas fa-check-circle ps-1"></i><br>
                <div class=" black-sm-text">@${who.handle}</div></div>
                

        </li>
    `)
}

export default WhoToFollowListItem;

// d-flex  align-items-center