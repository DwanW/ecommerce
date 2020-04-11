import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';


class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionStartAsync } = this.props;
        fetchCollectionStartAsync()
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
    }

    render() {
        const { match } = this.props
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        );
    }
}

const mapDispatchtoProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(null, mapDispatchtoProps)(ShopPage);