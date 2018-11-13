import React from 'react';
import User from './User'
import { connect } from 'react-redux';
import { startUsersList } from '../actions/users'

export class Users extends React.Component {
    state = ({
        filter: "",
    })

    componentWillMount() {
        this.props.startUsersList();
    }

    createUserComponent = () => {
        let listUser = [];
        this.props.users.forEach(element => {
            if (this.state.filter === "" ||
                element.displayName.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1) {
                listUser.push(
                    <User key={element.uid} user={element} handleOnClick={this.props.handleOnClick} />
                )
            }
        });

        return listUser;
    }

    handleSearchChange = (e) => {
        this.setState({
            filter: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <div id="search">
                    <label htmlFor=""><i className="fa fa-search" aria-hidden="true"></i></label>
                    <input type="text" placeholder="Search contacts..." onChange={this.handleSearchChange} />
                </div>
                <div id="contacts">
                    <ul>
                        {this.createUserComponent()}
                    </ul>
                </div>
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