var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
  render() {
    return (
      <div>Hello World!</div>
    )
  }
}

class Users extends React.Component {
  render() {
    return (
      <div>
        <App />
        <div>
          <h1>Friends</h1>
          <ul>
            {this.props.list.filter(function(name){
            return name.friend === true;
           
          }).map(function(names){
             return <li key={names.name}>{names.name}</li>;
            })}
          </ul>
          
          <hr />
          
          <h1> Non Friends </h1>
          <ul>
            {this.props.list.filter(function(name){
            return name.friend !== true;
           
          }).map(function(names){
             return <li key={names.name}>{names.name}</li>;
            })}
          </ul>        
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  
    <Users list={[
      { name: 'Tyler', friend: true },
      { name: 'Ryan', friend: true },
      { name: 'Michael', friend: false },
      { name: 'Mikenzi', friend: false },
      { name: 'Jessica', friend: true },
      { name: 'Dan', friend: false } ]} 
    />,

  document.getElementById('app')
);