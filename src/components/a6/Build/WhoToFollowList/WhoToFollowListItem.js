import React from "react";

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }

) => {
    // const address = `process.env.${who.avatarIcon}`;
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={`${process.env.PUBLIC_URL}/images/${who.avatarIcon}`} alt="" width="48" className="rounded-circle float-start"/>
                </div>
                <div className="col-8">
                    <div className="fw-bold">{who.userName}
                        <span className="fa-stack" style={{"fontSize":"0.5em"}}>
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="rounded-pill float-end btn btn-primary  mt-1">Follow</button>
                </div>
            </div>
        </li>
    );
}


export default WhoToFollowListItem;

// d-flex  align-items-center