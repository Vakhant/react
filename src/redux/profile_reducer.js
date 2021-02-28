import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    postsData: [
        { id: 1, message: 'salvete', likesCount: '3' },
        { id: 2, message: 'nihaomai', likesCount: '12' },
        { id: 3, message: 'haw is your IT', likesCount: '1' },
    ],
    newPostText: '',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let text = state.newPostText.replace(/\n/g, "<br />");
            text = text.replace(/(<br \/>){3,}/g, "<br /><br />");
            let newPost = {
                id: state.postsData.length + 1,
                message: text,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => { return { type: ADD_POST } }
export const updateNewPostActionCreator = (text) => { return { type: UPDATE_NEW_POST_TEXT, newText: text } }
export const setUserProfile = (profile) => { return { type: SET_USER_PROFILE, profile } }
export const setStatus = (status) => { return { type: SET_STATUS, status } }
export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
        console.log(response);
    });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
        console.log(response);
    });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
            console.log(response);
        }
    });
}

export default profileReducer;