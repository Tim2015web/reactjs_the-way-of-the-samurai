import { profileReducer } from "./profileReducer";
import { messagesReducer } from "./messagesReducer";
import { navBarReducer } from "./navBarReducer";

// Не используется
let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 0, text: 'Post 1', likesCount: 0 },
        { id: 1, text: 'Post 2', likesCount: 10 },
        { id: 2, text: 'Post 3', likesCount: 20 },
        { id: 3, text: 'Post 4', likesCount: 30 },
        { id: 4, text: 'Post 5', likesCount: 40 }
      ],
      newPostText: ''
    },
    messagesPage: {
      usersData: [
        { id: 0, name: 'Ilia' },
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Luda' },
        { id: 3, name: 'Pavel' },
        { id: 4, name: 'Marina' }
      ],
      dialogData: [
        { id: 0, message: `Hey there! What's up?` },
        { id: 1, message: `Hi! How's your day going?` },
        { id: 2, message: `Hello! What's new with you?` },
        { id: 3, message: `Hey, how are you doing today?` },
        { id: 4, message: `Hi! Anything exciting happening?` },
        { id: 5, message: `Hello! How's everything on your end?` },
        { id: 6, message: `Hey, long time no chat! How have you been?` },
        { id: 7, message: `Hi there! What's the latest gossip?` },
        { id: 8, message: `Hello! Ready for a quick catch-up?` },
        { id: 9, message: `Hey! How's life treating you?` },
        { id: 10, message: `Hi! Got any fun plans for the day?` },
        { id: 11, message: `Hello! What's the word on your side?` }
      ],
      newMessageBody: ''
    },
    navBar: {}
  },

  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._state.navBar = navBarReducer(this._state.navBar, action);

    this._callSubscriber(this._state);
  }
};