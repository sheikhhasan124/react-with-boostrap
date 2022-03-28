import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card/Card2';


const CardGroup2 = () => {
    const datas = [
        {
          id:1,
          title:'hero',
        },
        {
          id:2,
          title:'bero',
        },
        {
          id:3,
          title:'dero',
        }
      ]
    return (
        <div>
           <CardGroup>
                  {datas.map(data=><Card2 key={data.id} data={data}/>)}
           </CardGroup>
        </div>
    );
};

export default CardGroup2;