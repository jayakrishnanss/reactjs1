var CommentBox = React.createClass({
  render: function() {
    return (
      <div id="header">
            <a id="test_logo" href="/">
                <img src="/reacttest/myexample/images/Crash-test-logo.png" 
                alt="APIO logo" width="36" height="36" />
            </a>
        </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('header-div')
);