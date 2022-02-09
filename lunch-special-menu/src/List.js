import React from 'react';

const List = ({lunch}) => {
    return (
        <>
            {lunch.map((special) => {
                const {id, name, age, image} =special;
                return (
                    <article key={id} className='person'>
                        <img src={image} alt={name}></img>
                        <div>
                            <h4>{name}</h4>
                            <p>${age}</p>
                        </div>
                    </article>
                );
            })}
            
        </>
    );
};

export default List;
