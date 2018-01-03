
import React from 'react';
import Feed from './Feed.js';

class App extends React.Component{
    constructor() {
        this.state = {currentComponent: Feed};
    }
    openProfile(){
        require.ensure([], () => {
            var Profile = require('./Profile.js');
            this.setState({
                currentComponent: Profile
            });
        });
    }

    render(){
        return (
            return <div>{this.state.currentComponent()}</div>
        );
    }
}
React.render(<App/>, document.body);