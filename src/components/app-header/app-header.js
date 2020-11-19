import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import {Link} from 'react-router-dom';
import './app-header.scss';
import {connect} from 'react-redux';

const AppHeader = ({totalPrice}) => {
    return (
        <header className="header">
            <Link to="/" className="header__link">
                Menu
            </Link>
            <Link to="/cart" className="header__link">               
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {totalPrice} $               
            </Link>
            
        </header>
    )
};

const mapStateToProps = ({totalPrice}) => {
    return {
        totalPrice
    }
}

export default connect(mapStateToProps)(AppHeader);