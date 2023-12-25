import { addPostActionCreator, profileReducer } from "./profileReducer";

it('OK', () => {
  let action = addPostActionCreator('Пример');

  let state = {
    postData: [
      { id: 0, text: 'Post 1', likesCount: 0 },
      { id: 1, text: 'Post 2', likesCount: 10 },
      { id: 2, text: 'Post 3', likesCount: 20 },
      { id: 3, text: 'Post 4', likesCount: 30 },
      { id: 4, text: 'Post 5', likesCount: 40 }
    ]
  };

  let newState = profileReducer(state, action);

  expect(newState.postData.length).toBe(5);
  console.log(newState);
});
