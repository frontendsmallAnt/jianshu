import React, { Component } from 'react';
import { Provider } from "react-redux";
import Header from "./common/header";
import { GlobalStyled } from './static/iconfont/iconfont';
import store from "./store"

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyled />
                <Header />
            </Provider>
        );
    }
}

export default App;