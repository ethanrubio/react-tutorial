'use strict'

const Comment = React.createClass({
  render() {
    return (
     <div className="comment">
       <h2 className="commentAuthor">
         {this.props.author}
       </h2>
       {marked(this.props.children.toString())}
     </div>  
    );
  }
});

const CommentList = React.createClass({
  render() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

const CommentForm = React.createClass({
  render() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

const CommentBox = React.createClass({
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
