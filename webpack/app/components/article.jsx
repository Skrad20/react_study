const React = require("react");
// Данный компонент по аналогии получает извне некоторые данные и применяет их при рендеринге.
class Article extends React.Component{
    constructor(props){
        super(props);
    } 
    render() {
        return <div>{this.props.content}</div>;
    }
}
  
  
module.exports = Article;