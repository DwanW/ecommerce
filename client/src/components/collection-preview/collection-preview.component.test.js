import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPreview } from './collection-preview.component';

describe('Collection Preview component test', () => {
    let wrapper;
    let mockMatch;
    let mockHistory;
    const mockRouteName = 'hats';

    beforeEach(() => {
        mockMatch = {
            path: './shop'
        };
        mockHistory = {
            push: jest.fn()
        };

        const mockProps = {
            title: 'hats',
            items: [],
            history: mockHistory,
            match: mockMatch,
            routeName: mockRouteName
        };

        wrapper = shallow(<CollectionPreview {...mockProps} />);
    });

    it('should render CollectionPreview component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should fire router history function when clicked on titleContainer', () => {
        wrapper.find('TitleContainer').simulate('click');
        expect(mockHistory.push).toHaveBeenCalledWith(
            `${mockMatch.path}/${mockRouteName}`
        );
    });

    it('should render title prop in titleContainer', () => {
        expect(wrapper.find('TitleContainer').text()).toBe('HATS')
    });

    it('should render previewContainer with no child', () => {
        expect(wrapper.find('PreviewContainer').children().length).toBe(0);
    });
});