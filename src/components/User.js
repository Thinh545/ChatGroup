import React from 'react';

export class User extends React.Component {

    userOnClick = () => {
        this.props.handleOnClick(this.props.user);
    }

    render() {
        return (
            <li className="contact" onClick={() => this.userOnClick()}>
                <div className="wrap">
                    <span className={this.props.user.active ? "contact-status online" : "contact-status"}></span>
                    <img src={this.props.user.avatarUrl} alt="" />
                    <div className="meta">
                        <p className="name">{this.props.user.displayName}</p>
                        <p className="preview">
                            {
                                this.props.user.active ? "online" : this.props.user.lastTime
                            }
                        </p>
                    </div>
                </div>
            </li>
        )
    }
}

export default User