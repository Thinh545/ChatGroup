import React from 'react';
import User from './User'
import { connect } from 'react-redux';
import { startUsersList } from '../actions/users'

export class Users extends React.Component {
    componentWillMount() {
        this.props.startUsersList();
    }

    createUserComponent = () => {
        let listUser = [];
        this.props.users.forEach(element => {
            if (element.uid !== this.props.auth.uid)
                listUser.push(
                    <User key={element.uid} user={element} handleOnClick={this.props.handleOnClick} />
                )
        });

        return listUser;
    }

    render() {
        return (
            <div id="contacts">
                <ul>
                    {this.createUserComponent()}
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