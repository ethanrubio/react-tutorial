'use strict'

const Comment = React.createClass({
  rawMarkup() {
    const rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  render() {
    return (
     <div className="comment">
       <h2 className="commentAuthor">
         {this.props.author}
       </h2>
       <span dangerouslySetInnerHTML={this.rawMarkup()} />
     </div>  
    );
  }
});

const CommentList = React.createClass({
  render() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is **one** comment</Comment>
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
