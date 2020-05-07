import React from 'react';
import { shallow } from 'enzyme';

import {CheckoutItem} from './checkout-item.component';

describe('CheckoutItem component test', ()=> {
    let wrapper;
    let mockAddItem;
    let mockRemoveItem;
    let mockClearItem;

    beforeEach(() => {
        mockAddItem = jest.fn();
        mockRemoveItem = jest.fn();
        mockClearItem = jest.fn();

        const mockProps = {
            cartItem: {
                name:'belt',
                imageUrl: 'www.test.com',
                price: 30,
                quantity: 5
            },
            clearItem: mockClearItem,
            addItem: mockAddItem,
            removeItem: mockRemoveItem
        };

        wrapper = shallow(<CheckoutItem {...mockProps} />);
    });

    it('should render checkoutItem component', ()=> {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call removeItem when it is called',()=> {
        wrapper.find('QuantityContainer').childAt(0).simulate('click');
        expect(mockRemoveItem).toHaveBeenCalled();
    });

    it('should call addItem when it is called',()=> {
        wrapper.find('QuantityContainer').childAt(2).simulate('click');
        expect(mockAddItem).toHaveBeenCalled();
    });

    it('should call clearItem when it is called',()=> {
        wrapper.find('RemoveButtonContainer').simulate('click');
        expect(mockClearItem).toHaveBeenCalled();
    });
});