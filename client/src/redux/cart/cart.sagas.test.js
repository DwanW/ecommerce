import { takeLatest, put } from 'redux-saga/effects';

import UserActionTypes from '../user/user.type';
import { clearCart } from './cart.actions';
import { clearCartOnSignOut, onSignOutSuccess } from './cart.sagas';

describe('saga: on signout success', () => {
    it('should trigger on sign out success', ()=> {
        const generator = onSignOutSuccess();

        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
        );
    });
});

describe('saga: clear cart on signout', () => {
    it('should fire clear cart', ()=> {
        const generator = clearCartOnSignOut();

        expect(generator.next().value).toEqual(
            put(clearCart())
        );
    });
});
