import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './Reducers';
import Title from './components/Title';
import ProductList from './components/ProductList';
import Basket from './components/Basket';

import './App.css';

const store = createStore(Reducers, applyMiddleware(ReduxThunk));

class App extends Component {

  constructor(){
    super();

    this.products = [
        {id:1, name:'Brokoli', photo:'brokoli.png', price:10},
        {id:2, name:'Elma', photo:'elma.png', price:20},
        {id:3, name: 'Kırmızı Et', photo:'et.png', price:15},
        {id:4, name: 'Tavuk', photo:'tavuk.png', price:20},
        {id:5, name: 'Pasta', photo:'pasta.png', price:50},
    ];

    this.addBasket = this.addBasket.bind(this);
  }


    addBasket(item){
        let updatedList = this.state.basketList;
        updatedList.push(item);
        this.setState({
            basketList: updatedList
        });
    }


    render() {
    return (
      <Provider store={store}>
        <Title value={'Ürün Listesi'}
               count={this.products.length} />
        <ProductList
            products={this.products} />
        <Basket/>
      </Provider>
    );
  }
}

export default App;
