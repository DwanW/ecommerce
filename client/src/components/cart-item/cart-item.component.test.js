import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './cart-item.component';

describe('CartItem component test', () => {
    it('should render cartItem component', ()=>{
        const mockItem = {
            name:'belt',
            imageUrl:'www.testImage.com',
            price: 30,
            quantity: 50
        };
        expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
    })
})