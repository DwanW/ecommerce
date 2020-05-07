import React from 'react';
import { shallow } from 'enzyme';

import { CollectionItem } from './collection-item.component';

describe('collection item compoenent test', ()=> {
    let wrapper;
    let mockAddItem;
    const mockName = 'cool jeans';
    const mockPrice = 35;
    const mockImageUrl = 'www.testImage.com';

    beforeEach(() => {
        mockAddItem = jest.fn();
        const mockProps = {
            item : {
                name: mockName,
                price: mockPrice,
                imageUrl: mockImageUrl
            },
            addItem: mockAddItem
        };

        wrapper = shallow(<CollectionItem {...mockProps} />)
    });

    it('should render collectionItem component', ()=> {
        expect(wrapper).toMatchSnapshot();
    });

    it('should Call AddItem when clicked', () => {
        wrapper.find('AddButton').simulate('click');
        expect(mockAddItem).toHaveBeenCalled;
    });

    it('should render image prop in BackgroundImage component', () => {
        // console.log(wrapper.debug());
        expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe(mockImageUrl)
    });

    it('should render name prop in the NameContainer', () => {
        expect(wrapper.find('NameContainer').text()).toBe(mockName);
    });

    it('should render price prop in the PriceContainer', () => {
        expect(wrapper.find('PriceContainer').text()).toBe(`${mockPrice}`);
    });
});