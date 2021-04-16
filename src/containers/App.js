import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundry';

import './App.css';

function App() {

    const [robots, setRobots] = useState([]);
    const [searchFields, setSearchFields] = useState('');

    const onSearchChange = (event) => {
        setSearchFields(event.target.value)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => setRobots(users))
        .catch(err => console.log(err))
        .catch(err => console.log(err))
    }, [])

        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchFields.toLowerCase());
        })
        return !robots.length ? <h2 className="f1 tc">Loading</h2> :
        (
            <div className='tc'>
                <h2 className='f1'>RoboFriends</h2>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filterRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
}

export default App;