import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            username: '',
            age: 49,
            address: '801 Intl Pkwy',
            fileName: '',
            showWelcome: 0,
            errorMessage: '',
            description: 'Enter a short description of yourself.'
        };
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        
        // Validation
        if (name == 'age') {
            if (!Number(value)) {
                this.setState(
                    {
                        errorMessage: "Age must be a number!"
                    }
                );
            }
        }
        this.setState(
            {
                [name]:value
            }
        );
        //var userName = event.target.value.toUpperCase();
        //this.setState({username: userName});
        this.state.showWelcome = 1;
        console.log(event);
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert("Welcome " + this.state.username);
        this.state.showWelcome = 1;
        console.log(this.state);
    }

    render() {
        let footer = '';
        if (this.state.showWelcome == 1)
        {
            footer = <h1>Welcome: {this.state.username}</h1>
        }
        return <form onSubmit={this.submitHandler}>
            <h1>User Info</h1>
            <div className='form-group'>
                <label for='userText'>Enter your username:</label>
                <input 
                    id = 'userText'
                    name='username'
                    type='text'
                    className="form-control"
                    onChange={this.changeHandler}
                />
            </div>
            <div className='form-group'>
                <label for='ageText'>Enter your age:</label>
                <input 
                    id='ageText'
                    name='age'
                    type='text'
                    className="form-control"
                    onChange={this.changeHandler}
                />
            </div>
            <div className='form-group'>
                <label for='addrText'>Enter your address:</label> 
                <input 
                    id='addrText'
                    name='address'
                    type='text'
                    className="form-control"
                    onChange={this.changeHandler}
                />
            </div>
            <div className='form-group'>
                <label for='addrText'>Enter your description:</label> 
                <textarea 
                    id='descText'
                    name='description'
                    className="form-control"
                    value={this.state.description}
                />
            </div>
            <div className="form-group">
                <label for="formControlFile1">Upload image:</label>
                <input 
                    name='fileName'
                    type="file" 
                    className="form-control-file" 
                    id="formControlFile1">
                </input>
            </div>
            <button
                className="btn btn-primary"
                type="submit">Sign On
            </button>
            <div>
                <div style={{backgroundColor:'red', color:'white'}}>{this.state.errorMessage}</div>
                {footer}
            </div>
        </form>
    }
}

export default MyForm;