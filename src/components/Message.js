import React from 'react'

export class Message extends React.Component {
    render() {
        const mine = (this.props.mess.uid === this.props.auth.uid);
        return (
            <li className={mine ? "sent" : "replies"}>
                <img src={mine ? this.props.auth.photo : this.props.user.photo} alt="" />
                <p>{this.props.mess.text}</p>
            </li>
        )
    }
}

export default Message