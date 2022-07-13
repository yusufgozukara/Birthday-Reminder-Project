import React from 'react';

const List = ({person}) => {
  return (
    <>
    {person.map((person) => {
    const {id,name,age,image} = person;
      return (
      <article key={id} className='person'>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4>{age} years</h4>
      </div>
        </article>
        
      )
    })}
    </>
    );
};

export default List;
