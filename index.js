// Функция для передачи инф на рендер
function HelloFunct(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "\u0418\u043C\u044F: ", props.name), /*#__PURE__*/React.createElement("p", null, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442: ", props.age));
}

HelloFunct.defaultProps = {
  name: "Tom",
  age: 22
};
const rootNode = document.getElementById("hello1");
const root = ReactDOM.createRoot(rootNode);
root.render( /*#__PURE__*/React.createElement(HelloFunct, {
  age: "20"
})); // Класс для передачи инф на рендер

class Hello extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "\u0418\u043C\u044F: ", this.props.name), /*#__PURE__*/React.createElement("p", null, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442: ", this.props.age));
  }

}

Hello.defaultProps = {
  name: "Tom",
  age: 22
};
const rootNode2 = document.getElementById("hello2");
const root2 = ReactDOM.createRoot(rootNode2);
root2.render( /*#__PURE__*/React.createElement(Hello, {
  name: "Jon",
  age: "30"
})); // Структура для хранения информации

const user = {
  id: 5,
  age: 33,
  firstName: 'Tom',
  lastName: 'Smit',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
}; // Передача на страницу

const rootUser = document.getElementById("user");
const ruser = ReactDOM.createRoot(rootUser);
ruser.render( /*#__PURE__*/React.createElement("div", {
  id: user.id
}, /*#__PURE__*/React.createElement("p", null, "\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F: ", user.getFullName()), /*#__PURE__*/React.createElement("p", null, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442: ", user.age), /*#__PURE__*/React.createElement("p", null, "\u0412\u0440\u0435\u043C\u044F \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445: ", new Date().toLocaleTimeString()))); // Функция для времени

function tick() {
  ReactDOM.createRoot(document.getElementById("header")).render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F ", new Date().toLocaleTimeString(), ".")));
}

setInterval(tick, 1000); // Передача инфы

ReactDOM.createRoot(document.getElementById("container")).render( /*#__PURE__*/React.createElement("div", {
  id: "items"
}, /*#__PURE__*/React.createElement("h2", null, "\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043E\u0432"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Apple iPhone 12 Pro"), /*#__PURE__*/React.createElement("li", null, "Samsung Galaxy S20"), /*#__PURE__*/React.createElement("li", null, "Huawei P40 Pro"), /*#__PURE__*/React.createElement("li", null, "Google Pixel 5"))), document.getElementById("container"), function () {
  console.log("рендеринг элемента React");
}); // Кнопка функция

function ClickButton1(props) {
  function press() {
    alert("Hello React!");
  }

  return /*#__PURE__*/React.createElement("button", {
    onClick: press
  }, "Click");
} // Класс функция


class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.press = this.press.bind(this);
  }

  press(name) {
    console.log(name);
    root2.render( /*#__PURE__*/React.createElement(Hello, {
      name: name,
      age: "30"
    }));
    alert("Hello React!");
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: () => this.press("Valera")
    }, "\u041D\u0430\u0436\u043C\u0438 \u043C\u0435\u043D\u044F"), /*#__PURE__*/React.createElement("button", {
      onClick: () => this.press("Gena")
    }, "\u041D\u0430\u0436\u043C\u0438 \u043C\u0435\u043D\u044F"));
  }

}

const button = document.getElementById("button");
const rootButton = ReactDOM.createRoot(button);
rootButton.render( /*#__PURE__*/React.createElement(ClickButton, null));
