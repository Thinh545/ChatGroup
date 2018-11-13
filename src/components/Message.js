import React from 'react'

export class Message extends React.Component {
    render() {
        const mine = (this.props.mess.uid === this.props.auth.uid);
        let listImg = [];
        let parts = this.props.mess.text.match(/(https?|ftp:)([^\s]+)/g);
        if (parts) {
            parts.map((img, index) => {
                listImg.push(
                    <li className={mine ? "sent" : "replies"}>
                        <img src={mine ? this.props.auth.avatarUrl : this.props.user.avatarUrl} alt="" />
                        <img className="imageMess" key={index} src={img} />
                    </li>
                )
            })
        }

        if (this.props.mess.media) {
            Object.values(this.props.mess.media).map((img, index) => {
                listImg.push(
                    <li className={mine ? "sent" : "replies"}>
                        <img src={mine ? this.props.auth.avatarUrl : this.props.user.avatarUrl} alt="" />
                        <img className="imageMess" key={index} src={img} />
                    </li>
                )
            })
        }

        let mess;
        if (this.props.mess.text != "") {
            mess = (
                <li className={mine ? "sent" : "replies"}>
                    <img src={mine ? this.props.auth.avatarUrl : this.props.user.avatarUrl} alt="" />
                    <p>
                        {this.props.mess.text}
                    </p>
                </li>
            )
        }

        return (
            <div>
                {mess}
                {listImg}
            </div>
        )
    }
}

export default Message