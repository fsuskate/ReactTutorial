import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Person from './Person';
import People from './People';
import MyForm from './MyForm';

// Tutorial Stuff
// class Test extends React.Component {
//     render() {
//         return <h1>Hello World!</h1>;
//     }
// }

// ReactDOM.render(<Test />, document.getElementById('root'));

///////////////////////// ES6 Practice ////////////////////////////////////////
class Car {
    constructor(name, model, price, year) {
        this.name = name;
        this.model = model;
        this.price = price;
        this.year = year;
    }

    display() {
        return "Hi, I'm a " + this.name;
    }
}

var aCar = new Car('honda', 'accord', '10000', '2019');
console.log(aCar.display());
console.log(aCar);

///////////////////////// ES6 Practice ////////////////////////////////////////

//const myfirstelem = <h1>Hello react!</h1>;

const myfirstelem = (
    <table class="table table-dark">
        <thead>
      <tr>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
      </tbody>
    </table>
  );
//ReactDOM.render(myfirstelem, document.getElementById('root'));



//var person = new Person("Francis");
//ReactDOM.render(<People />, document.getElementById('root'));
ReactDOM.render(<MyForm />, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
