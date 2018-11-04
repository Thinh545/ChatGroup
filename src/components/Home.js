import React from 'react';
import Users from './Users'
import firebase from 'firebase'

export class Home extends React.Component {
    render() {
        const auth = firebase.auth().currentUser;
        console.log(auth)
        return (
            <div id="frame">
                <div id="sidepanel">
                    <div id="profile">
                        <div className="wrap">
                            <img id="profile-img" src={auth.photoURL} className="online" alt="" />
                            <p>{auth.displayName}</p>
                            <i className="fa fa-chevron-down expand-button" aria-hidden="true"></i>
                            <div id="status-options">
                                <ul>
                                    <li id="status-online" className="active"><span className="status-circle"></span>
                                        <p>Online</p>
                                    </li>
                                    <li id="status-away"><span className="status-circle"></span>
                                        <p>Away</p>
                                    </li>
                                    <li id="status-busy"><span className="status-circle"></span>
                                        <p>Busy</p>
                                    </li>
                                    <li id="status-offline"><span className="status-circle"></span>
                                        <p>Offline</p>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div id="search">
                        <label for=""><i className="fa fa-search" aria-hidden="true"></i></label>
                        <input type="text" placeholder="Search contacts..." />
                    </div>

                    <Users />
                </div>

                <div className="content">
                </div>
            </div>
        )
    }
}

export default Home