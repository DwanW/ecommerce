import ShopActionTypes from './shop.types';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';


export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = error => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
});


//redux thunk
export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(
            snapshot => {
                const collectionsMap = convertCollectionSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap));
            }
        ).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
};