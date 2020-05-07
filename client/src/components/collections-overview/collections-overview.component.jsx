import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectColletionsForPreview } from '../../redux/shop/shop.selector';

import {CollectionsOverviewContainer} from './collections-overview.styles';

import CollectionPreview from '../collection-preview/collection-preview.component';


export const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectColletionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
