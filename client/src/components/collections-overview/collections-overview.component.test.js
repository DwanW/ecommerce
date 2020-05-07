import React from 'react';
import { shallow } from 'enzyme';
import {CollectionsOverview} from './collections-overview.component';

describe('CollectionsOverview test', () => {
    const wrapper = shallow(<CollectionsOverview collections={[]}/>);
    it('should render CollectionsOverview component', ()=> {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render no child with [] collections', ()=> {
        expect(wrapper.find('CollectionsOverviewContainer').children().length).toBe(0)
    });
});