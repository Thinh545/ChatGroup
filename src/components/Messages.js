import React from 'react';
import Message from './Message'
import { connect } from 'react-redux';
import { sendMessage, startListening } from '../actions/messages'

export class Messages extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        const message = e.target.message.value;

        if (!message.trim()) {
            e.target.submit.diabled = true;
            return;
        }

        this.props.sendMessage(this.props.user.uid, message);
        e.target.reset();
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "auto" });
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        let listMess = [];
        this.props.mess.list.forEach(element => {
            listMess.push(
                <Message mess={element} auth={this.props.auth} user={this.props.user} />
            )
        });

        return (
            <div className="content">
                <div className="contact-profile">
                    <img src={this.props.user ? this.props.user.photo : ""} alt="" />
                    <p>{this.props.user ? this.props.user.displayName : ""}</p>
                    <div className="social-media">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                </div>

                <div className="messages">
                    <ul>
                        {listMess}
                    </ul>

                    <div style={{ float: "left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                </div>

                <div className="message-input">
                    <div className="wrap">
                        <form onSubmit={this.onSubmit} autoComplete="off">
                            <input type="text" name="message" placeholder="Write your message..." />
                            <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
                            <button name="submit" className="submit">
                                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.messages.user,
    mess: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
    sendMessage: (uid, text) => dispatch(sendMessage(uid, text)),
    startListening: (uid) => dispatch(startListening(uid))
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);