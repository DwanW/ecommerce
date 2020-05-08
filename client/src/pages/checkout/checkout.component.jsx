import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlock, TotalContainer, TestTextContainer } from './checkout.styles';

export const CheckoutPage = ({ cartItems, cartTotal }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <TotalContainer>
            <span> TOTAL: ${cartTotal}</span>
        </TotalContainer>
        <TestTextContainer>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 Exp: Any future date, CVV: Any 3 digits.
        </TestTextContainer>
        <StripeCheckoutButton price={cartTotal} />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);