

import React from 'react';
import { Spinner } from 'react-bootstrap';
import Btn from './Components/btn/Btn';
import CardGroup2 from './Components/CardGroup/CardGroup';


const App = () => {
    return (
        <div>
           
           <h1>learn react-boostrap</h1>
           <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
          </Spinner>
           <Btn />

           <CardGroup2 />

           
        </div>
    );
};

export default App;