import React from 'react';
//import ReactDOM from 'react-dom';
import Person from './Person';

class People extends React.Component {
    render() {
        return <div>
            <h1>People</h1>
            <table className="table table-striped table-bordered table-hover table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>                            
                        <th scope="col">Data</th>  
                    </tr>
                </thead>
                <tbody>    
                    <Person id='1' name="Tyler" data='{"foo":"bar"}' />
                    <Person id='2' name="Liz" />
                    <Person id='3' name="Trevor" />
                    <Person id='4' name="Kona" />
                </tbody>           
           </table>                
        </div>
    }
}

export default People;