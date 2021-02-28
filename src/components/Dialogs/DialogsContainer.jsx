import React from 'react';
import { sendMessageActionCreator, updateNewMessageActionCreator } from "../../redux/dialogs_reducer";
import Dialogs from './Dialogs';
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

// const DialogsContainer = () => {

//     return <StoreContext.Consumer>
//         {
//             (store) => {

//                 let state = store.getState().dialogsPage;

//                 let sendMessage = (text) => {
//                     store.dispatch(sendMessageActionCreator(text))
//                 }
//                 let onMessageChange = (text) => {
//                     store.dispatch(updateNewMessageActionCreator(text));
//                 }
//                 return <Dialogs
//                     onMessageChange={onMessageChange}
//                     sendMessage={sendMessage}
//                     dialogsPage={state}
//                     newMessageText={state.newMessageText}
//                 />
//             }}
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(sendMessageActionCreator(text))
        },
        onMessageChange: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;