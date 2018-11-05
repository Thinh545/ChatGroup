import React from 'react';

export class User extends React.Component {
    render() {
        return (
            <li className="contact" onClick={() => this.props.handleOnClick(this.props.data)}>
                <div className="wrap">
                    <span className={this.props.data.active ? "contact-status online" : "contact-status"}></span>
                    <img src={this.props.data.photo} alt="" />
                    <div className="meta">
                        <p className="name">{this.props.data.name}</p>
                        <p className="preview">
                            {
                                this.props.data.active ? "online" : this.props.data.lastTime
                            }
                        </p>
                    </div>
                </div>
            </li>
        )
    }
}

export default User