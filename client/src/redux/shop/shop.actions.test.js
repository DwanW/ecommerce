import ShopActionTypes from './shop.types';

import {
    fetchCollectionsStart,
    fetchCollectionsSuccess,
    fetchCollectionsFailure,
    fetchCollectionStartAsync
} from './shop.actions';

describe('fetchCollectionStart action', () => {
    it('should fire fetch collection start action', () => {
        expect(fetchCollectionsStart().type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_START)
    });
});

describe('fetchCollectionSuccess action', () => {
    it('should fire fetch collection success action', () => {
        const mockCollectionsMap = {
            hats: {
                id: 1
            }
        };

        const action = fetchCollectionsSuccess(mockCollectionsMap);

        expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS);
        expect(action.payload).toEqual(mockCollectionsMap);
    });
});

describe('fetchCollectionFailure action', () => {
    it('should fire fetch collection failure action', () => {

        const action = fetchCollectionsFailure('error');

        expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_FAILURE);
        expect(action.payload).toEqual('error');
    });
});


describe('fetchCollectionStartAsync action', () => {
    it('should fire fetch collection start using async action', () => {
        const mockActionCreator = fetchCollectionStartAsync();
        const mockDispatch = jest.fn();
        mockActionCreator(mockDispatch);
        
        expect(mockDispatch).toHaveBeenCalledWith(fetchCollectionsStart());
    });
});