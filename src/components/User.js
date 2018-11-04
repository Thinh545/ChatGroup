import React from 'react';

export class User extends React.Component {
    render() {
        return (
            <li class="clearfix">
                <img class="square" src={this.props.data.photo} alt="avatar" />
                <div class="about">
                    <div class="name">{this.props.data.name}</div>
                    <div class="status">
                        online
                    </div>
                </div>
            </li>
        )
    }
}

export default User