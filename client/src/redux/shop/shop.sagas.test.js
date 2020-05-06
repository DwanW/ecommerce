import { takeLatest, call, put, all } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsAsync, fetchCollectionsStart } from './shop.sagas';
import { fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions';

describe('fetch collections start saga', () => {
    it('should trigger FETCH_COLLECTIONS_START ACTION', () => {
        const generator = fetchCollectionsStart();
        expect(generator.next().value).toEqual(
            takeLatest(
                ShopActionTypes.FETCH_COLLECTIONS_START,
                fetchCollectionsAsync
            )
        );
    });
});

describe('fetch collections async saga', () => {
    const generator = fetchCollectionsAsync();

    it('should get the collectionRef from the fireStore', () => {
        const getCollection = jest.spyOn(firestore, 'collection');
        generator.next();
        expect(getCollection).toHaveBeenCalled();
    });

    it('should call convertCollectionsSnapshot saga', () => {
        const mockSnapshot = {};
        expect(generator.next(mockSnapshot).value).toEqual(
            call(convertCollectionSnapshotToMap, mockSnapshot)
        );
    });

    it('should fire fetchCollectionsSuccess if collectionsMap is sucessful', () => {
        const mockCollectionsMap = {
            hats: { id: 1 }
        };

        expect(generator.next(mockCollectionsMap).value).toEqual(
            put(fetchCollectionsSuccess(mockCollectionsMap))
        );
    });

    it('should fire fetchCollectionsFailure if collectionsMap is failed', ()=>{
        const newGenerator = fetchCollectionsAsync();
        newGenerator.next();
        expect(newGenerator.throw({message: 'error'}).value).toEqual(
            put(fetchCollectionsFailure('error'))
        );
    });
});