import React from 'react';

const SearchBox = ({ searchFields, searchChange}) => {
    return(
        <div>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                name='search' 
                placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;