import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {BasketAction} from '../actions/BasketAction';

class ProductList extends React.Component{

    render(){
        const list = this.props.products.map((item)=>{
           return(
               <li>
                   <img src={'/images/'+item.photo} />
                   {item.name}

                   <button onClick={(e)=>{
                       this.props.basketAction('Add',item)
                   }}
                           className={'addBasket'}>+</button>

                   <span className='price'>{item.price} TL</span>
               </li>
           )
        });
        return(
            <ul className={'productList'}>
                {list}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        basketState: state.basket
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        basketAction: BasketAction
    },dispatch);
}

export default connect(mapStateToProps,
    mapDispatchToProps)(ProductList);