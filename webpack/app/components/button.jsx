const React =require("react"); 

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            class: "off",
            label: "Всё будет",
            message: "Добро пожаловать!",
            counter: 1,
        }
        this.press = this.press.bind(this);

        console.log("constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps()");
        return null;
    }
    componentDidMount(){
        console.log("componentDidMount()");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount()");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate()");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate()");
        return null;
    }
    componentDidUpdate(){
        console.log("componentDidUpdate()");
    }

    incrementCounter(state, props) {  
        console.log("incrementCounter()");
        return {
          counter: state.counter + parseInt(props.increment)
        };
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
        console.log("componentWillUnmount()");
    }

    press(str){
        console.log("press()");
        let className = (this.state.class==="off") ? "on":"off";
        this.setState({class: className});
        this.setState(this.incrementCounter);
    }
    render() {
        
        console.log("render()");
        return <div>
            <button onClick={() => this.press(
                this.state.message)
                } className={this.state.class}
            >{this.state.label}</button>
            <div>
                Counter: {this.state.counter} <br />
                Increment: {this.props.increment}
            </div>
        </div>;
    }
}
  
  
module.exports = Button;