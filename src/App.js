import React, { Component } from 'react';
import './App.css';
import {CartHeader} from './cartHeader';
import {CartFooter} from './cartFooter';
import {CartItems} from './cartItems';
import {AddItem} from './addItem';
import {arrayOfProducts} from './app.config';


const items = [
  { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
  { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
];

const totalOfTheOrder = (newItemArray = items) => {
  let total = 0;    
    for(let i=0; i<newItemArray.length; i++ ){
      const {product:{priceInCents}, quantity} = newItemArray[i];
      total = total + priceInCents * quantity
    }
  return total;
}

class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      total: totalOfTheOrder()
    };

  } 

  totalOfTheOrder = (newItemArray = this.state) => {
    let total = 0;    
    for(let i=0; i<newItemArray.length; i++ ){
      const {product:{priceInCents}, quantity} = newItemArray[i];
      total = total + priceInCents * quantity
    }
    this.setState({
      total: total
    });
  }

  calculatingTheTotal = (price, quantity) => {
    let newTotal = this.state.total   
    newTotal = newTotal + price * quantity
    this.setState({
      total: newTotal
    });
  }

  handleSubmit = (quantity, productId) => {
    const productAdded = arrayOfProducts.find((product) => product.id === productId)

    const newItemArray = this.state.items.slice();
  
    newItemArray.push(
      {
        id: newItemArray.length,
        product: productAdded, 
        quantity
      })
    this.calculatingTheTotal(productAdded.priceInCents, quantity)
    this.setState({items: newItemArray});
  };

  

  render() {
    const k = totalOfTheOrder()
    return (
      <div className="App">
        <header className="App-header">
          <CartHeader />
          <CartItems products={this.state.items} total={this.state.total}/>
          <AddItem productOptions={arrayOfProducts} handleSubmit={this.handleSubmit}/>
          <CartFooter />
        </header>
      </div>
      );
  }
}

export default App;

