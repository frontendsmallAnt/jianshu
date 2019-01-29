import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group"
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Btn,
    SearchWrapper
} from "./style"

class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            focused:false
        }

        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }
    render() {
        return (
            <div>
                <HeaderWrapper>
                    <Logo />
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载APP</NavItem>
                        <NavItem className="right">登录</NavItem>
                        <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                            timeout={200}
                            in={this.state.focused}
                            classNames="slide"
                            >
                        <NavSearch 
                        className={ this.state.focused ? "focused" : "" } 
                        onFocus={this.handleInputFocus}
                        onBlur={this.handleInputBlur}
                        >
                        </NavSearch>
                        </CSSTransition>
                        <span className={ this.state.focused ? "iconfont focused" : "iconfont" }>&#xe623;</span>
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Btn className="writting"><span className="iconfont">&#xe624;</span>写文章</Btn>
                        <Btn className="reg">注册</Btn>
                    </Addition>
                </HeaderWrapper>

            </div>
        );
    }

    handleInputFocus(){
        this.setState({
            focused:true
        })
    }

    handleInputBlur(){
        this.setState({
            focused:false
        })
    }
}

export default Header;