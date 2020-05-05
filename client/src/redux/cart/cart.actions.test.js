import CartActionTypes from './cart.types';
import {
    toggleCartHidden,
    addItem,
    removeItem,
    clearItemFromCart,
    clearCart
} from './cart.actions';


//what to test: 1. test if the correct action type and payload is fired
describe('toggleCartHidden action', () => {
    it('should create the toggleCartHidden action', () => {
        expect(toggleCartHidden().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN)
    });
});

describe('addItem action', () => {
    it('should create the addItem action', () => {
        const mockItem = {
            id: 1
        };

        const action = addItem(mockItem);

        expect(action.type).toEqual(CartActionTypes.ADD_ITEM);
        expect(action.payload).toEqual(mockItem);
    });
});

describe('removeItem action', () => {
    it('should create the removeItem action', () => {
        const mockItem = {
            id: 2
        };

        const action = removeItem(mockItem);

        expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM);
        expect(action.payload.id).toEqual(2);
    });
});

describe('clearItemFromCart action', () => {
    it('should create the clearItemFromCart action', () => {
        const mockItem = {
            id: 3
        };

        const action = clearItemFromCart(mockItem);

        expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART);
        expect(action.payload).toEqual(mockItem);
    });
});

describe('clearCart action', () => {
    it('should create the clearCart action', () => {
        expect(clearCart().type).toEqual(CartActionTypes.CLEAR_CART);
    });
});