import React from 'react';

const Card = ({name , mail, id}) =>{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img  className='w-50 h-20' src={`https://robohash.org/${id}200x200`} alt={`${id}`} />
            <div>
                <h2>
                    {name}
                </h2>
                <p>
                    {mail}
                </p>
            </div>
        </div>
    );
}

export default Card;