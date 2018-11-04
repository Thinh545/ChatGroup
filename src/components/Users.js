import React from 'react';
import User from './User'
import { connect } from 'react-redux';
import { startUsersList } from '../actions/users'

export class Users extends React.Component {

    // renderUser() {
    //     this.props.startUsersList();
    //     let result = [];

    //     return result;
    // }

    onSubmit() {
        
    }

    render() {
        this.props.startUsersList();
        console.log(this.props.users)
        return (
            <div class="people-list" id="people-list">
                <div class="search">
                    <input type="text" placeholder="search" />
                    <i class="fa fa-search"></i>
                </div>

                <ul class="list">
                    {this.props.users.map(function (item) {
                        console.log(item)
                        return <User data={item} />
                    })}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
    startUsersList: () => dispatch(startUsersList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);