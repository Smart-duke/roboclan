import React from 'react';
const Card = (props) =>{
    const {name, email, id} = props;
    return(
    <div className='bg-light-green tc dib ma2 pa3 grow shadow-3 br3'>
        <img src={`https://robohash.org/${props.id}?200x150`} alt='robo pic'/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            {/* <h2>{props.name}</h2>
            <p>{props.emaila}</p> */}
        </div>
    </div>
    )
}
export default Card;