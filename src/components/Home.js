import React from 'react';
import Users from './Users'
import Messages from './Messages'
import { connect } from 'react-redux';
import { startUserChange } from '../actions/messages'

export class Home extends React.Component {
    state = {
        user: {
            uid: null,
        },
    }

    handleOnClick = (user) => {
        this.props.startUserChange(user.uid);
    }

    render() {
        const auth = this.props.auth;
        return (
            <div id="frame">
                <div id="sidepanel">
                    <div id="profile">
                        <div className="wrap">
                            <img id="profile-img" src={auth.photo} className="online" alt="" />
                            <p>{auth.name}</p>
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
    startUserChange: (uid) => dispatch(startUserChange(uid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);