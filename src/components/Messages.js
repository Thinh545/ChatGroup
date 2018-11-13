import React from 'react';
import Message from './Message'
import { connect } from 'react-redux';
import { changeStar, sendMessage, startListening } from '../actions/messages'
import { onStarClick } from '../actions/users'

export class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preImg: [],
            inputImg: [],
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        const message = e.target.message.value;

        if (!message.trim() && this.state.inputImg === []) {
            console.log(this.state.inputImg)
            e.target.submit.diabled = true;
            return;
        }

        this.props.sendMessage(this.props.user.uid, message, this.state.inputImg);
        e.target.reset();
        this.setState({
            preImg: [],
            inputImg: [],
        })
    }

    handleChosen = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                let preImgs = this.state.preImg.concat(e)
                this.setState({ preImg: preImgs })
            }
            reader.readAsDataURL(event.target.files[0])

            let tmp = this.state.inputImg.concat(event.target.files[0])
            this.setState({ inputImg: tmp })
            event.target.value = null;
        }
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "auto" });
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    handleStarClick = () => {
        console.log(this.props.mess.star)

        this.props.onStarClick(this.props.user.uid, !this.props.mess.star)
        this.props.changeStar(!this.props.mess.star);
    }

    handleImageClick = (e) => {
        let rm = e.target.getAttribute('data-key')
        let tmpPre = this.state.preImg
        tmpPre.splice(rm, 1)
        let tmpIn = this.state.inputImg
        tmpIn.splice(rm, 1)
        this.setState({ inputImg: tmpIn, preImg: tmpPre })
    }

    render() {
        let listMess = [];
        this.props.mess.list.forEach(element => {
            listMess.push(
                <Message mess={element} auth={this.props.auth} user={this.props.user} />
            )
        });

        let listimg = this.state.preImg.map((img, index) => {
            return (
                <img key={index} data-key={index} src={img.target.result} width="48" height="48"
                    onClick={(e) => this.handleImageClick(e)} />
            )
        })

        return (
            <div className="content">
                <div className="contact-profile">
                    <img src={this.props.user ? this.props.user.avatarUrl : ""} alt="" />
                    <p>{this.props.user ? this.props.user.displayName : ""}</p>
                    <div className={ this.props.mess.star ? "social-media-star" : "social-media"}>
                        <i className="fa fa-star" aria-hidden="true" onClick={this.handleStarClick}></i>
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
                            <label htmlFor="file">
                                <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
                            </label>
                            <button name="submit" className="submit">
                                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                            </button>

                            <input className="inputfile" type="file" id="file" accept="image/*" ref="fileUploader" onChange={(e) =>
                                this.handleChosen(e)} />
                        </form>
                    </div>
                    <div>
                        {listimg}
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
    sendMessage: (uid, text, img) => dispatch(sendMessage(uid, text, img)),
    startListening: (uid) => dispatch(startListening(uid)),
    onStarClick: (uid, status) => dispatch(onStarClick(uid, status)),
    changeStar: (star) => dispatch(changeStar(star)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);