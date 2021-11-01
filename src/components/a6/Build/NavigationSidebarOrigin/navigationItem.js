import {Link} from "react-router-dom";

const NavigationItem = ({togo, active}) => {
    // this.renderSwitch = function (props) {
    //     switch (props.name) {
    //         case 'Home':
    //             return "../HomeScreen/homeScreen.html";
    //         case 'Explore':
    //             return "../ExploreScreen/explore.html";
    //         default:
    //             return "/";
    // }

    if (togo.name === active) {
        if (togo.name === "Home") {
            return (
                <Link to="../HomeScreen/homeScreen.html" className="list-group-item d-flex  align-items-center active">
                    <i>togo.icon</i>
                    <span className="ps-2 d-none d-xxl-block d-xl-block ">togo.name</span>
                </Link>
            );
        } else if (togo.name === "Explore") {
            return (
                <Link to="../ExploreScreen/explore.html" className="list-group-item d-flex  align-items-center active">
                    <i>togo.icon</i>
                    <span className="ps-2 d-none d-xxl-block d-xl-block ">togo.name</span>
                </Link>
            );
        } else {
            return (
                <Link to="/" className="list-group-item d-flex  align-items-center active">
                    <i>togo.icon</i>
                    <span className="ps-2 d-none d-xxl-block d-xl-block ">togo.name</span>
                </Link>
            );
        }
    } else {
        return (

            <Link to="link" className="list-group-item d-flex  align-items-center ">
                <i>togo.icon</i>
                <span className="ps-2 d-none d-xxl-block d-xl-block ">togo.name</span>
            </Link>

        );
    }
}






export default NavigationItem;
