import React from 'react';
import Card from '../CardWithCdn/CardWithCdn';

const CardGroup = () => {
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
            <h2>hello fprm card g</h2>
            <div className="card-group">
             {datas.map(data=><Card key={data.id} data={data}/>)}
</div>
        </div>
    );
};

export default CardGroup;