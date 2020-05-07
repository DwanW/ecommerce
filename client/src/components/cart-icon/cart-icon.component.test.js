import React from 'react';
import { shallow } from 'enzyme';

import { CartIcon } from './cart-icon.component';

describe('CartIcon component test', ()=> {
    let wrapper;
    let mockToggleCartHidden;

    beforeEach(()=> {
        mockToggleCartHidden = jest.fn();

        const mockProps = {
            itemCount: 0,
            toggleCartHidden: mockToggleCartHidden
        }

        wrapper = shallow(<CartIcon {...mockProps}/>)
    });

    it('should render CartIcon component', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('should call toggleCarthidden when clicked', ()=>{
        wrapper.find('CartContainer').simulate('click');
        expect(mockToggleCartHidden).toHaveBeenCalled();
    });

    it('should render count as text', ()=> {
        const count = Number(wrapper.find('ItemCountContainer').text());
        expect(count).toBe(0);
    });
});