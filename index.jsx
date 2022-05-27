// Функция для передачи инф на рендер
function HelloFunct(props) {
    return <div>
    <p>Имя: {props.name}</p>
    <p>Возраст: {props.age}</p>
    </div>;
}
HelloFunct.defaultProps = {name: "Tom", age: 22};
const rootNode = document.getElementById("hello1"); 
const root = ReactDOM.createRoot(rootNode);
root.render(
    <HelloFunct age="20"/>, 
);

// Класс для передачи инф на рендер
class Hello extends React.Component {
    render() {
        return <div>
            <p>Имя: {this.props.name}</p>
            <p>Возраст: {this.props.age}</p>
        </div>;
    }
}
Hello.defaultProps = {name: "Tom", age: 22};
const rootNode2 = document.getElementById("hello2"); 
const root2 = ReactDOM.createRoot(rootNode2);
root2.render(
    <Hello name="Jon" age="30"/>, 
);

// Структура для хранения информации
const user = {
    id : 5,
    age: 33,
    firstName: 'Tom',
    lastName: 'Smit',
    getFullName: function(){ 
        return `${this.firstName} ${this.lastName}`;
    }
};
// Передача на страницу
const rootUser = document.getElementById("user");
const ruser = ReactDOM.createRoot(rootUser);
ruser.render(
    <div id={user.id}>
        <p>Полное имя: {user.getFullName()}</p>
        <p>Возраст: {user.age}</p>
        <p>Время генерации данных: {new Date().toLocaleTimeString()}</p>
    </div>
);


// Функция для времени
function tick() {
    ReactDOM.createRoot(document.getElementById("header"))
    .render(
      <div>
        <h2>Текущее время {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
  setInterval(tick, 1000);


// Передача инфы
ReactDOM.createRoot(document.getElementById("container"))
    .render(
    <div id="items">
        <h2>Список телефонов</h2>
        <ul>
            <li>Apple iPhone 12 Pro</li>
            <li>Samsung Galaxy S20</li>
            <li>Huawei P40 Pro</li>
            <li>Google Pixel 5</li>
        </ul>
    </div>,
    document.getElementById("container"),
    function(){ console.log("рендеринг элемента React");}
)

// Кнопка функция
function ClickButton1(props) {
             
    function press(){
        alert("Hello React!")
    }
    return <button onClick={press}>Click</button>;
}
// Класс функция
class ClickButton extends React.Component {
              
    constructor(props) {
        super(props);
        this.press = this.press.bind(this);
    }
    press(name){
        console.log(name);
        root2.render(
            <Hello name={name} age="30"/>, 
        );
        alert("Hello React!")
    }
    render() {
        return <div>
            <button onClick={() => this.press("Valera")}>Нажми меня</button>
            <button onClick={() => this.press("Gena")}>Нажми меня</button>
        </div>
    }
}
const button = document.getElementById("button");
const rootButton = ReactDOM.createRoot(button);
rootButton.render(
    <ClickButton />
);

