
import { Button, Spinner } from 'react-bootstrap';
import React from 'react';

const Btn = () => {
    return (
        <div>
          <Button variant='danger'>button</Button>
          <br />
          <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
    );
};

export default Btn;