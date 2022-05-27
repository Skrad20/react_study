const React = require("react");
// Данный компонент будет выполнять роль заголовка и будет получать извне через свойства отображаемый текст заголовка.
class Header extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <h2>{this.props.text}</h2>;
    }
}
  
module.exports = Header;