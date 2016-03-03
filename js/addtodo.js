var AddTodoBox = React.createClass({
  render: function() {
    return (
        <div >
            <h2 id="home-text"></h2>
            <h2 id="name-text"></h2>
            <form onClick={this._onAddSubmit.bind(this,'')}>
              <input id="name-input"
                type="text"/>
              <button type="submit">
                Add
              </button>
            </form>
        </div>
    );
  },
  _onAddSubmit: function(view) {
        if (document.getElementById("name-input").value) 
        {
          document.getElementById("name-text").innerHTML = "Clicked by "+document.getElementById("name-input").value;
        };
       
   },
});
ReactDOM.render(
  <AddTodoBox />,
  document.getElementById('menu-content')
);