import React from 'react';
import Users from './Users'
import Messages from './Messages'
import firebase from 'firebase'
import { startUserChange } from '../actions/messages'
import { connect } from 'react-redux';

export class Home extends React.Component {
    state = {
        user: null,
    }

    handleOnClick = (user) => {
        this.setState({
            user: user,
        })

        this.props.startUserChange(user.uid);
    }

    render() {
        const auth = firebase.auth().currentUser;
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
                        <label htmlFor=""><i className="fa fa-search" aria-hidden="true"></i></label>
                        <input type="text" placeholder="Search contacts..." />
                    </div>

                    <Users handleOnClick={this.handleOnClick} />
                </div>

                <Messages user={this.state.user} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
    startUserChange: (uid) => dispatch(startUserChange(uid))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);