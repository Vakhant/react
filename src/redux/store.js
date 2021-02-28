import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'salvete', likesCount: '3' },
                { id: 2, message: 'nihaomai', likesCount: '12' },
                { id: 3, message: 'haw is your IT', likesCount: '1' },
            ],
            newPostText: ''

        },
        dialogsPage: {
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
        },
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("State changed");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // addPost(postMessage) {
    //     let newPost = {
    //         id: 5,
    //         message: postMessage,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.postsData.push(newPost);
    //     this._callSubscriber(this._state);
    // },
    // senderMessage(dialogMessage) {
    //     let newMessage = {
    //         id: this._state.dialogsPage.messagesData[0].id + 1,
    //         message: dialogMessage
    //     };
    //     this._state.dialogsPage.messagesData.unshift(newMessage);
    //     this._callSubscriber(this._state);
    // },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;