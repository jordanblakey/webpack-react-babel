import React from 'react'
import ReactDOM from 'react-dom'

// React Tutorial Component
var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello, World! I am a CommentBox.
            </div>
        );
    } 
});
ReactDOM.render( 
    <CommentBox />,
    document.getElementByID('quiz')
);