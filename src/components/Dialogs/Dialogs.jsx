import React from 'react';
import cls from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsList = state.dialogsData.map(dialog =>
        <DialogItem id={dialog.id} key={dialog.id} name={dialog.name} />);

    let messagesList = state.messagesData.map(message =>
        <Message content={message.message} key={message.id} />);


    let newMessage = React.createRef();

    let sendMessage = () => {
        if (newMessage.current.value !== "") {
            let text = newMessage.current.value;
            props.sendMessage(text);
        }
    }
    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.onMessageChange(text);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div className={cls.dialogsWrap}>
            <div className={cls.dialogs}>
                {dialogsList}
            </div>
            <div className={cls.messages}>
                <textarea ref={newMessage} value={state.newMessageText} onChange={onMessageChange}></textarea>
                <button onClick={sendMessage}>Add post</button>
                {messagesList}
            </div>
        </div >
    )
}

export default Dialogs;