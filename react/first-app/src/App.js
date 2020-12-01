import React, {Component} from 'react';

import UiComponents from "./components/UI/UIComponents";
class App extends Component {

    render() {

        return (
            <div>

<UiComponents/>

            </div>
        );
    }
}

export default App;
// Создать несколько массивов с объектами.
//     Создать для каждого из  массивов компонент, который отрисовывает все объекты.
//     для отрисовки каждого отдельного объекта создать свой компонент.
//     Вывести все объекты в UI