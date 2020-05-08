import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

export const ShopPage = ({ fetchCollectionsStart, match }) => {

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])

    return (
        <div className='shop-page'>
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </Suspense>
        </div>
    );

}

const mapDispatchtoProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchtoProps)(ShopPage);


// const { updateCollections } = this.props
// const collectionRef = firestore.collection('collections');

// ## doable but need navigating function to navigate the nested obj
// fetch('https://firestore.googleapis.com/v1/projects/ecommerce-db-bac64/databases/(default)/documents/collections')
// .then(response => response.json())
// .then(collections => console.log(collections))


// ### promise && then pattern (only get data when re-mount this component)
// collectionRef.get().then(
//     snapshot => {
//         const collectionsMap = convertCollectionSnapshotToMap(snapshot);
//         updateCollections(collectionsMap);
//         this.setState({ loading: false });
//     }
// )

// ### observer && observable pattern (get data whenever snapshot changes)
// this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
//     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
//     updateCollections(collectionsMap);
//     this.setState({ loading: false });
// });