import React from 'react';
import { connect } from "react-redux"
import { CSSTransition } from "react-transition-group"
import { actionCreator } from "./store"
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Btn,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem
} from "./style"

const getItems = (show) => {
    if (show) {
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
          <SearchInfoSwitch>换一换</SearchInfoSwitch>
                </SearchInfoTitle>
                <div>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </div>
            </SearchInfo>
        )
    } else {
        return null
    }
}

const Header = (props) => {
    return (
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
                        in={props.focused}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? "focused" : ""}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        >
                        </NavSearch>
                    </CSSTransition>
                    <span className={props.focused ? "iconfont focused" : "iconfont"}>&#xe623;</span>
                    {getItems(props.focused)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Btn className="writting"><span className="iconfont">&#xe624;</span>写文章</Btn>
                <Btn className="reg">注册</Btn>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreator.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreator.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);