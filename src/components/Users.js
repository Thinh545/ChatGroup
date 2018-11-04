import React from 'react';
import User from './User'
import { connect } from 'react-redux';
import { startUsersList } from '../actions/users'
import AppRouter, { history } from '../routers/AppRouter';

export class Users extends React.Component {

    // renderUser() {
    //     this.props.startUsersList();
    //     let result = [];

    //     return result;
    // }

    handleOnClick = (userID) => {
        history.push(`/${userID}`);
    }

    render() {
        this.props.startUsersList();
        let listUser = [];
        this.props.users.forEach(element => {
            if (element.uid !== this.props.auth.uid)
                listUser.push(
                    <User data={element} handleOnClick={this.handleOnClick} />
                )
        });

        return (
            <div id="contacts">
                <ul>
                    {listUser}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
    users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
    startUsersList: () => dispatch(startUsersList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);