import React from 'react';
import Users from './Users'
import Messages from './Messages'
import { connect } from 'react-redux';
import { startOnline } from '../actions/auth'
import { startUserChange } from '../actions/messages'

export class Home extends React.Component {
    componentWillMount() {
        this.props.startOnline();
    }

    handleOnClick = (user) => {
        this.props.startUserChange(user);
    }

    render() {
        const auth = this.props.auth;
        return (
            <div id="frame">
                <div id="sidepanel">
                    <div id="profile">
                        <div className="wrap">
                            <img id="profile-img" src={auth.avatarUrl} className="online" alt="" />
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

                    <Users handleOnClick={this.handleOnClick} />
                </div>

                <Messages />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.messages.user
});

const mapDispatchToProps = (dispatch) => ({
    startUserChange: (uid) => dispatch(startUserChange(uid)),
    startOnline: () => dispatch(startOnline()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);