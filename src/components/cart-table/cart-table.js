import React from 'react';
import {connect} from 'react-redux';
import {onDelete} from '../../actions';
import RestoService from '../../services/resto-service';
import WithRestoService from '../hoc';

import './cart-table.scss';

const CartTable = ({items, onDelete, RestoService}) => {
    if (items.length === 0) {
        return (
            <div className="cart__title">You have no active orders</div>
        )
            
        
        
    }
    return (
        <>
            <div className="cart__title">Your order:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, url, price, id, caunt} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-title">{caunt}</div>
                                <div className="cart__item-price">{caunt*price}$</div>                               
                                <div onClick={() => onDelete(id)}
                                    className="cart__close">
                                        &times;
                                    </div>
                            </div>
                        )
                    })
                    
                }
            </div>
            <button onClick={() => {RestoService.setOrder(genOrder(items))}} className='order'>Make order</button>
        </>
    );
};

const genOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            caunt: item.caunt
        }
    })
    return newOrder;
}

const mapStateToProps = ({items}) => {
    return {
        items
    }
        
}

const mapDispatchToProps = {
        onDelete
}


export default  WithRestoService() (connect(mapStateToProps, mapDispatchToProps)(CartTable));