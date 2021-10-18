const NavigationItem = (togo, active) => {
    let link;
    switch (togo.name) {
        case 'Home':
            link = "../HomeScreen/homeScreen.html";
            break;
        case 'Explore':
            link = "../ExploreScreen/explore.html";
            break;
        default:
            link = "/";
    }


    if (togo.name === active) {
        return (`
        <a class="list-group-item d-flex  align-items-center active"  href=${link}>
            <i class="${togo.icon}"></i>
            <span class="ps-2 d-none d-xxl-block d-xl-block ">${togo.name}</span>
        </a>
    `);
    } else {
        return (`

        <a class="list-group-item d-flex  align-items-center "  href=${link}>
            <i class="${togo.icon}"></i>
            <span class="ps-2 d-none d-xxl-block d-xl-block ">${togo.name}</span>
        </a>

    `);
    }

}
export default NavigationItem;

// <a href="/"></a>

// <i className="${togo.icon}"></i>
// <span className="ps-5 d-none d-xxl-block d-xl-block format">${togo.name}</span>