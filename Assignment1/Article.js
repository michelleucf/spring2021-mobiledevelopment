// Import Component
import Component from './Component.js';

// Article is a child object of Component
class Article extends Component {

  constructor (props) {
    // Send what it gets to its parent object
    super(props);
    // telling it that defined values are pushed back to article class because it inherits all of its properties and functions its parent had
  }

  render () {
    // Return HTML with the title, author, and text of this article

    return (
  `
    <Article>
        <Title>${this.props.title}</Title>
        <Author>${this.props.author}</Author>
        <Text>${this.props.content}</Text>
    </Article>;
      `
    /* Renders the title and inculdes the .author and .content */
    );
  }
}

export default Article;
