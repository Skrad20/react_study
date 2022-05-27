//Это собственно файл с кодом React, который будет загружать компоненты на веб-страницу.
const ReactDOM = require("react-dom/client");
const React = require("react");
const Header = require("./components/header.jsx");
const Article = require("./components/article.jsx");
const Hello = require("./components/hello.jsx");
const Button = require("./components/button.jsx");
const Clock = require("./components/button_2.jsx");
const UserForm = require("./components/form_hello.jsx");
  
const header = "Рассказ";
const article = "После одного из заседаний N-ского мирового съезда судьи собрались в совещательной комнате, чтобы снять свои мундиры, минутку отдохнуть и ехать домой обедать.";


root = ReactDOM.createRoot(document.getElementById("app"))
root.render(
    <div>
        <Hello />
        <UserForm name="Гость" age="100"/>
        <Header text={header} />
        <Article content={article} />
        <Button increment="1"/>
        <Clock />
    </div>
);