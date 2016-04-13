'use strict'

const CommentBox = React.createClass({
  render: () => {
    return (
      React.createElement('div', {className: "commentBox"},
        React.createElement('h1', null, 
          "Comments!"
        )
      )
    );
  }
});
ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);

// non-JSX
// const CommentBox = React.createClass({
//   render: () => {
//     return (
//       <div className="commentBox">
//         Hello, world! I am a CommentBox.
//       </div>
//     );
//   }
// });
// ReactDOM.render(
//   <CommentBox />,
//   document.getElementById('content')
// );