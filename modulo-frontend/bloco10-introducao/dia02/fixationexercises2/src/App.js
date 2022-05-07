// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import Order from './Order';

// Complete o código acima de forma que os pedidos referentes aos produtos headphone e energyDrink sejam filhos de App.

class App extends React.Component {
  render() {
    const products = [
      {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    },  
    {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    }];

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         {products.map(items => <Order key={ items.id } order={ items } />)}
      </div>
    );
  }
}

export default App;