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

        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    handleUp() {
        let up_votes = this.state.up_vote_count + 1; 
        let down_votes = this.state.down_vote_count
        let vote_limit =  this.state.vote_limit - 1;
        if(vote_limit >= 0){
            this.updateState(up_votes, down_votes, vote_limit); 
        }
               
    }

    handleDown() {
        let up_votes = this.state.up_vote_count;
        let down_votes = this.state.down_vote_count + 1; 
        let vote_limit =  this.state.vote_limit - 1;
        if(vote_limit >= 0){
            this.updateState(up_votes, down_votes, vote_limit);
        }        
    }

    updateState(up_vote_count, down_vote_count, vote_limit) {
        this.setState({ up_vote_count, down_vote_count, vote_limit})
    }

    render(){
        let warning;
        if(this.state.vote_limit === 0) {
            warning = <p className="warning">Vote Limit Reached!</p>
        }

        return (
            <main>
                <h2>Up votes: {this.state.up_vote_count}</h2>
                <h2>Down votes: {this.state.down_vote_count}</h2>
                <h2>Remaining votes: {this.state.vote_limit}</h2>
                <span onClick={this.handleUp}>Vote yes</span>
                <span onClick={this.handleDown}>Vote no</span>
                {warning}
            </main>
        )
    }
}
