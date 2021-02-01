import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '';

    this.props.menu.forEach( (item) => {
      responseHTML  += '<li>' + item + '</li>';
      // using += to consense the code rather than putting responseHTML = responseHTML + <li> + item + </li>
      
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
    });

    responseHTML = '<ul>' + responseHTML + '</ul>';
    // wraps the item into a <ul></ul>
    
    return responseHTML;
  }
}

export default Sidebar;
