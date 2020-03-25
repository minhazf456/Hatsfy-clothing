import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/car.action';

import { ReactComponent as ShoppingIcon} from '../../assests/original.svg';

import './cart-icon.styles.scss';

const cartIcon = ({ toggleCartHidden }) => (
    <div class = 'cart-icon'>
        <ShoppingIcon className = 'shopping-icon'/>
        <span className = 'item-count' > 0</span>   
    
    
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    null,
    mapDispatchToProps
  )(cartIcon);