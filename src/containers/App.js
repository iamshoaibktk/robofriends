import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundry';

import './App.css';

class  App extends React.Component{
    constructor() {
        super();
        this.state = {
            robots: [],
            searchFields: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({
            searchFields: event.target.value
        })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({robots: users}))
            .catch(err => console.log(err))
            .catch(err => console.log(err))
    }

    render(){
        const { robots, searchFields } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchFields.toLowerCase());
        })
        return !robots.length ? <h1>Loading</h1> :
        (
            <div className='tc'>
                <h2 className='f1'>RoboFriends</h2>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filterRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

export default App;