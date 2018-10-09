import React from 'react';
import './voteTracker.css';

export default class VoteTracker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            up_vote_count: 0,
            down_vote_count: 0,
            vote_limit: 10,
        }
    }

    handleUp() {
        let up_votes = this.state.up_vote_count + 1; 
        let vote_limit =  this.state.vote_limit - 1;
        if(vote_limit > 0){
            this.updateState(up_votes, vote_limit); 
        }
               
    }

    handleDown() {
        let down_votes = this.state.down_vote_count -1; 
        let vote_limit =  this.state.vote_limit - 1;
        if(vote_limit > 0){
            this.updateState(down_votes, vote_limit);
        }        
    }

    updateState(vote, vote_limit) {
        this.setState({ vote, vote_limit})
    }

    render(){
        return (
            <main>
                <h2>Up votes: {this.state.up_vote_count}</h2>
                <h2>Down votes: {this.state.down_vote_count}</h2>
                <h2>Remaining votes: {this.state.vote_limit}</h2>
                <span onClick={this.handleUp}>Vote yes</span>
                <span onClick={this.handleUp}>Vote no</span>

            </main>
        )
    }
}
