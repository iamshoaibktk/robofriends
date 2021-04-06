import React from 'react';
import CardList from './CardList';
import  { robots } from './robots';
import SearchBox from './SearchBox';

class  App extends React.Component{
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchFields: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({
            searchFields: event.target.value
        })
    }

    render(){
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchFields.toLowerCase());
        })
        return(
            <div className='tc'>
                <h2>RoboFriends</h2>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filterRobots}/>
            </div>
        );
    }
}

export default App;