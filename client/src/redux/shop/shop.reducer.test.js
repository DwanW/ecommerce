import ShopActionTypes from './shop.types';
import shopReducer from './shop.reducer';

const initial_state = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

describe('shopReducer test', () => {
    it('should return initial state', () => {
        expect(shopReducer(undefined, {})).toEqual(initial_state);
    });

    it('should set isFetching to true when fetch collections start is called',() =>{
        expect(shopReducer(initial_state, {type: ShopActionTypes.FETCH_COLLECTIONS_START}).isFetching).toBe(true);
    });

    it('should set isFetching to false and get collection when fetch collection is successful', () => {
        const mockCollections = [{id: 1}, {id: 2}];
        expect(shopReducer(initial_state,{
            type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
            payload: mockCollections
        })).toEqual({
            collections: mockCollections,
            isFetching: false,
            errorMessage: undefined
        });
    });

    it('should set isFetching to false and get error and fetch fails', () => {
        expect(shopReducer(initial_state,{
            type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
            payload: 'error'
        })).toEqual({
            collections: null,
            isFetching: false,
            errorMessage: 'error'
        });
    });
});