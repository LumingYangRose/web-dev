const NavigationItem = (togo) => {
    return(`
        <a class="list-group-item d-flex  align-items-center "  href="/">
            <i class="${togo.icon}"></i>
            <span class="ps-2 d-none d-xxl-block d-xl-block ">${togo.name}</span>
        </a>

    `);
}
export default NavigationItem;

// <a href="/"></a>

// <i className="${togo.icon}"></i>
// <span className="ps-5 d-none d-xxl-block d-xl-block format">${togo.name}</span>