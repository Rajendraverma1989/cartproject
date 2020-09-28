import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { ReactComponent as Star } from '../assets/star.svg';
import { ReactComponent as Cart } from '../assets/shoping_cart.svg';
import { ReactComponent as Search } from '../assets/search.svg';
import { connect } from 'react-redux';

 class Header extends React.Component {

     render() {
         console.log('cart item:::', this.state)
    return(
            <nav className="nav-wrapper">
                <div className="icon">
                    <Link to="/" className="brand-logo"> <Star className='star-icon' /></Link>               
                     </div>
                <div className="sub_container">
                    <Link to="/cart"><Search className='search-icon' /></Link>
                    <Link to="/cart"><Cart className='cart-icon' />                   
                    </Link>
             </div>
                
            </nav>  
    )
}
 }



const mapStateToProps = state => ({
    cartItem: state.cartItem.cartItem,
  });

export default Header;
