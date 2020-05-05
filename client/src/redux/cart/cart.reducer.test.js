import CartActionTypes from './cart.types';
import cartReducer from './cart.reducer';

const initialState = {
    hidden: true,
    cartItems: []
};

//what to test: 
describe('cartReducer function', () => {
    //initial state
    it('should return initial state', () => {
        expect(cartReducer(undefined, {})).toEqual(initialState);
    });

    //toggle_cart_hidden
    it('should toggle cart state hidden', () => {
        expect(cartReducer(initialState, { type: CartActionTypes.TOGGLE_CART_HIDDEN }).hidden)
            .toEqual(false);
    });

    //add_item
    it('should increase quantity of the item by 1 if addItem is fired with the same item in the cart, and create item if item does not exist in the cart', () => {
        const mockItem = { id: 1, quantity: 1 };
        const mockPreviousState = { hidden: true, cartItems: [mockItem] };

        expect(cartReducer(mockPreviousState, { type: CartActionTypes.ADD_ITEM, payload: mockItem }).cartItems).toEqual([{ "id": 1, "quantity": 2 }]);

        const mockItem2 = { id: 3, quantity: 1 };
        const mockPreviousState2 = { hidden: true, cartItems: [] };

        expect(cartReducer(mockPreviousState2, { type: CartActionTypes.ADD_ITEM, payload: mockItem2 }).cartItems).toEqual([{ "id": 3, "quantity": 1 }]);
    });

    //remove_item
    it('should decrease quantity of the item by 1 if removeItem is fired with the same item in the cart, and remove item if item quantity is one', () => {
        const mockItem = { id: 1, quantity: 9 };
        const mockPreviousState = { hidden: true, cartItems: [mockItem] };

        expect(cartReducer(mockPreviousState, { type: CartActionTypes.REMOVE_ITEM, payload: mockItem }).cartItems).toEqual([{ "id": 1, "quantity": 8 }]);

        const mockItem2 = { id: 3, quantity: 1 }
        const mockPreviousState2 = { hidden: true, cartItems: [mockItem2] }

        expect(cartReducer(mockPreviousState2, { type: CartActionTypes.REMOVE_ITEM, payload: mockItem2 }).cartItems).toEqual([]);
    });

    //clear_item_from_cart
    it('should clear the entire quantity of item from cart', () => {
        const mockItem = { id: 1, quantity: 1 };
        const mockPreviousState = { hidden: true, cartItems: [{ id: 1, quantity: 30 }, { id: 3, quantity: 20 }] };

        expect(cartReducer(mockPreviousState, { type: CartActionTypes.CLEAR_ITEM_FROM_CART, payload: mockItem }).cartItems).toEqual([{ "id": 3, "quantity": 20 }]);
    });

    //clear_cart
    it('should clear everytime from the cart', () => {
        const mockState = { hidden: true, cartItems: [{ id: 1, quantity: 30 }, { id: 3, quantity: 20 }] };

        expect(cartReducer(mockState, {type: CartActionTypes.CLEAR_CART}).cartItems).toEqual([]);
    })
})