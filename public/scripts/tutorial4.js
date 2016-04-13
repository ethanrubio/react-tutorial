'use strict'

const Comment = React.createClass({
  render: () => {
    return (
      React.createElement('div', {className: "Comment"},
        React.createElement('h2', {className: "commentAuthor"},
          {this.props.author}
        )
      )
    );
  }
})

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

const CommentBox = React.createClass({
  render: () => {
    return (
      React.createElement('div', {className: "commentBox"},
        React.createElement('h1', null, 
          "Comments!"
        ),
        React.createElement(CommentList, null), // <CommentList />
        React.createElement(CommentForm, null) // <CommentForm />
      )
    );
  }
});
ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);