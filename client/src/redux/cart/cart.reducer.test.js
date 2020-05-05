import CartActionTypes from './cart.types';
import cartReducer from './cart.reducer';

const initialState = {
    hidden: true,
    cartItems: []
};

//what to test: 
describe('cartReducer function', () => {
    it('should return initial state', () => {
        expect(cartReducer(undefined, {})).toEqual(initialState);
    });

    it('should toggle cart state hidden', () => {
        expect(cartReducer(initialState, { type: CartActionTypes.TOGGLE_CART_HIDDEN }).hidden)
            .toEqual(false);
    });

    it('should increase quantity of the item by 1 if addItem is fired with the same item in the cart, and create item if item does not exist in the cart', () => {
        const mockItem = { id: 1, quantity: 1 };
        const mockPreviousState = { hidden: true, cartItems: [mockItem] };

        expect(cartReducer(mockPreviousState, { type: CartActionTypes.ADD_ITEM, payload:mockItem}).cartItems).toEqual([{"id": 1, "quantity": 2}]);
    });

    it('should decrease quantity of the item by 1 if removeItem is fired with the same item in the cart, and remove item if item quantity is one', () => {
        const mockItem = { id: 1, quantity: 9 };
        const mockPreviousState = { hidden: true, cartItems: [mockItem] };

        expect(cartReducer(mockPreviousState, { type: CartActionTypes.REMOVE_ITEM, payload:mockItem}).cartItems).toEqual([{"id": 1, "quantity": 8}]);
    });

})