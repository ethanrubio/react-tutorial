'use strict'

const data = [
  {id: 1, author: "Pete Hunt", text: "This is **one** comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

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
    const commentNodes = this.props.data.map(comment => {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );      
    });
    return (
      <div className="commentList">
        {commentNodes}
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
  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      // ajax call uses arrow functions b/c not a class
      success: data => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  },
  getInitialState() {
    return {data: []};
  },
  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000}/>,
  document.getElementById('content')
);
