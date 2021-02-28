const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Maximus' },
        { id: 2, name: 'Taras' },
        { id: 3, name: 'Sania' },
        { id: 4, name: 'Kiril' },
        { id: 5, name: 'Kirk' },
        { id: 6, name: 'Katia' },
        { id: 7, name: 'Rita' },
    ],
    messagesData: [
        { id: 3, message: 'Vale' },
        { id: 2, message: 'Pacs vobis cum' },
        { id: 1, message: 'Volo, Vis, Vult, Volumus, vultis, volunt' },
    ],
    newMessageText: ''
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let text = action.newMessageText.replace(/\n/g, "<br />");
            text = text.replace(/(<br \/>){3,}/g, "<br /><br />");
            return {
                ...state,
                newMessageText: "",
                messagesData: [...state.messagesData, { id: state.messagesData.length + 1, message: text }]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (text) => {
    return { type: SEND_MESSAGE, newMessageText: text }
}

export const updateNewMessageActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
}

export default dialogsReducer;