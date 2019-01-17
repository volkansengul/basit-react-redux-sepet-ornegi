import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {BasketAction} from '../actions/BasketAction';

class Basket extends React.Component {
    render() {
        let basketPrice = 0;
        const basketList = this.props.basketState.basketList.map((item) => {
            basketPrice += item.price;
            return (<li>
                {item.name}
                - {item.count} -
                &nbsp; <button onClick={(e)=>{
                    this.props.basketAction('Remove',item.id);
                }}>x</button>
                </li>)
        });

        return (
            <div className='basket'>
                <strong>SEPET</strong>
                <hr/>
                <ul>
                    {basketList}

                </ul>
                <hr/>
                Toplam Tutar: {basketPrice} TL
            </div>
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
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);