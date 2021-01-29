// Component is the parent
class Component {
  constructor (title, author, content) { 
    this.props = {}; 
    this.props.title = new ArticleTitle(title);
    this.props.author = author;
    this.props.content = content;
  }

  render () {
    // Child objects define their own render() methods
    return `
    <Article>
      ${this.props.title.render()}
      <span>${this.props.author}</span>
      <div>${this.props.content}</div>
   </Article>`;
  }
}

export default Component;
