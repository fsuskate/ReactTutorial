import React from 'react';
//import ReactDOM from 'react-dom';

class Person extends React.Component {
    constructor (name) {
        super();
        this.state = {color: "green"};
    }

    changeColor = () => {
        var colorChange = document.getElementById("colorInput").value;
        this.setState({color: colorChange});
    }

    changeColor2 = (colorChange) => {
        this.setState({color: colorChange});
        alert(colorChange);
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.name}</td>
                <td bgcolor={this.state.color}>{this.state.color}
                    <input id="colorInput" />
                    <button type="button" 
                        className="btn btn-primary"
                        onClick={() => this.changeColor()}>
                        Set
                    </button>
                    <button type="button" 
                        className="btn btn-secondary"
                        onClick={() => this.changeColor2("cyan")}>
                        Set2
                    </button>
                </td>    
                <td>{this.props.data}</td>                        
            </tr>             
            
        );
    } 
}

export default Person;