'use strict'

const CommentList = React.createClass({
  render: () => {
    return (
      React.createElement('div', {className: "commentList"},
        "Hello, world! I am a CommentList."
      )
    );
  }
});

const CommentForm = React.createClass({
  render: () => {
    return (
      React.createElement('div', {className: "commentForm"},
        "Hello, world! I am a CommentForm."
      )
    );
  }
});