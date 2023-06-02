import React, { Component } from 'react';

class Loading extends Component {
    state = {  } 
    render() { 
        return (
            <div className="loading">
                <h1>Loading The Movie Database...</h1>
                <hr />
                <p><span>Filter Mode:</span> Find movies based on genre, era, actor or crew.</p>
                <p><span>Random Mode:</span> Let us pick some random movies for you to watch.</p>
                <p><span>Mood Mode:</span> Tell us your mood and we'll find you a perfect set of movies.</p>
            </div>
        );
    }
}
 
export default Loading;