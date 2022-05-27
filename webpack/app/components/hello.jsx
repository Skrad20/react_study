const React = require("react");

class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            welcome: "Добро пожаловать!"
        };
    }
    render() {
        return <h2>{this.state.welcome}</h2>;
    }
}
  
module.exports = Hello;