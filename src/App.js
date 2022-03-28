

import React from 'react';
import { Spinner } from 'react-bootstrap';
import Btn from './Components/btn/Btn';


const App = () => {
    return (
        <div>
           
           <h1>learn react-boostrap</h1>
           <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
          </Spinner>
           <Btn />

           
        </div>
    );
};

export default App;