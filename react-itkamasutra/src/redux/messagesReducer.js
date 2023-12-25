const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
  ]
};

export function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      let newPost = { id: state.dialogData.length, message: action.newMessageBody };
      return { ...state, dialogData: [...state.dialogData, newPost], newMessageBody: '' };
    default: return state;
  }
};

export function sendMessageCreator(newMessageBody) { return { type: SEND_MESSAGE, newMessageBody } };