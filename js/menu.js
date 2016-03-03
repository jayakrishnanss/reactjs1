var MenuBox = React.createClass({
  render: function() {
    return (
      <div >
            <ul>
              <li onClick={this.changeView.bind(this,'home')}><a className="active" href="#home">Home</a></li>
              <li onClick={this.changeView.bind(this,'news')}><a href="#news">News</a></li>
              <li onClick={this.changeView.bind(this,'contact')}><a href="#contact">Contact</a></li>
              <li onClick={this.changeView.bind(this,'about')}><a href="#about">About</a></li>
            </ul>
            <div id="menu-content">
              
            </div>
        </div>
    );
  },
  changeView: function(view) {
       document.getElementById("home-text").innerHTML = "Clicked "+view;
    },
});
ReactDOM.render(
  <MenuBox />,
  document.getElementById('container')
);
