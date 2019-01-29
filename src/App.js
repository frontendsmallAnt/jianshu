import React, { Component } from 'react';
import Header from "./common/header";
import { GlobalStyled } from './static/iconfont/iconfont';

class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyled />
                <Header />
            </div>
        );
    }
}

export default App;