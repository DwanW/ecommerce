import UserActionTypes from './user.type';
import userReducer from './user.reducer';

const initial_state = {
    currentUser: null,
    error: null
};

describe('userReducer test', ()=> {
    it('should return initial state', () => {
        expect(userReducer(undefined,{})).toEqual(initial_state)
    });

    it('should set currentUser to user and error to null when sign in is sucessful', () => {
        const mockUser = {id: 1, displayName:"David"}
        expect(userReducer(initial_state, {
            type: UserActionTypes.SIGN_IN_SUCCESS,
            payload: mockUser
        })).toEqual({currentUser: {id: 1, displayName:"David"}, error: null})
    });

    it('should set currentUser to null when signOut is sucessful', () => {
        expect(userReducer(initial_state, {
            type: UserActionTypes.SIGN_OUT_SUCCESS
        })).toEqual({
            currentUser:null,
            error: null
        })
    });

    it('should return error message when user action fails', ()=> {
        const mockError = {
            message: 'errored',
            code: 404
          };
      
          expect(
            userReducer(initial_state, {
              type: UserActionTypes.SIGN_IN_FAILURE,
              payload: mockError
            }).error
          ).toBe(mockError);
      
          expect(
            userReducer(initial_state, {
              type: UserActionTypes.SIGN_UP_FAILURE,
              payload: mockError
            }).error
          ).toBe(mockError);
      
          expect(
            userReducer(initial_state, {
              type: UserActionTypes.SIGN_OUT_FAILURE,
              payload: mockError
            }).error
          ).toBe(mockError);
    });
});