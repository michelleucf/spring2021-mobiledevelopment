// Import Component
import Component from './Component.js';

// Article is a child object of Component
class Article extends Component {

  constructor (title, author, content) {
    // Send what it gets to its parent object
    super(title, author, content);
    // telling it that defined values are pushed back to article class because it inherits all of its properties and functions its parent had
  }

  render () {
    // Return HTML with the title, author, and text of this article

    return (
      `
      <Article>
        <title>${this.props.title}</title>
       </Article>;
       `
       
      /*`
      <Article>
        <h1>this.props.title</h1>
        ${this.props.title.render()} 
        <span>${this.props.author}</span>
        <div>${this.props.content}</div>
      </Article>;
      `*/

      /* Renders the title and inculdes the .author and .content */
    );
    
  }

}

export default Article;
