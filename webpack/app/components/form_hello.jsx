const React = require("react");

// https://metanit.com/web/react/3.3.php

class UserForm extends React.Component{
    constructor(props){
        super(props);
        let name = props.name;
        let nameIsValid = this.validateName(name);
        let age = props.age;
        let ageIsValid = this.validateAge(age);
        this.state = {
            name: name,
            age: age,
            nameValid: nameIsValid, 
            ageValid: ageIsValid
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    validateName(name){
        return name.length > 2;
    }
    validateAge(age){
        return age >= 0;
    }
    onNameChange(message){
        let value = message.target.value;
        console.log(value);
        let valid = this.validateName(value);
        this.setState({name: value, nameValid: valid});
    }
    onAgeChange(message){
        let value = message.target.value;
        console.log(value);
        let valid = this.validateAge(value);
        this.setState({age: value, ageValid: valid});
    }

    handleSubmit(message){
        message.preventDefault();
        console.log("Press");
        if (
            this.state.ageValid===true && 
            this.state.nameValid===true
        ){
            alert(
                `Имя: ${this.state.name}\nВозраст: ${this.state.age}`
            );
        }

    }

    render (){
        // цвет границы для поля для ввода имени
        let nameColor = this.state.nameValid===true?"green":"red";
        // цвет границы для поля для ввода возраста
        let ageColor = this.state.ageValid===true?"green":"red";
        return (
            <div>
                <h2>Форма для знакомства</h2>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>Имя:</label><br/>
                        <input 
                            type="text" 
                            value={this.state.name} 
                            onChange={this.onNameChange}
                            style={{borderColor:nameColor}} 
                        />
                    </p>
                    <p>
                        <label>Возраст:</label><br/>
                        <input 
                            type="number" 
                            value={this.state.age} 
                            onChange={this.onAgeChange}
                            style={{borderColor:ageColor}}
                        />
                    </p>
                    <input type="submit" value="Отправить"/>
                </form>
            </div>
        )
    }

}

module.exports = UserForm