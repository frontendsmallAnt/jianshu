import React, { Component } from 'react';
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

class Header extends Component {



    getItems() {
        const { page, totalPage, list, focused, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
        const pageList = [];
        const newList = list.toJS()
        for (let i = (page - 1) * 10; i < page * 10; i++) {
            pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
              <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {
                            pageList
                        }

                    </div>
                </SearchInfo>
            )
        } else {
            return null
        }
    }


    render() {
        const { focused, handleInputFocus, handleInputBlur } = this.props
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
                            in={focused}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? "focused" : ""}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <span className={focused ? "iconfont focused" : "iconfont"}>&#xe623;</span>
                        {this.getItems()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Btn className="writting"><span className="iconfont">&#xe624;</span>写文章</Btn>
                    <Btn className="reg">注册</Btn>
                </Addition>
            </HeaderWrapper>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreator.getList())
            dispatch(actionCreator.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreator.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreator.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreator.mouseLeave())
        },
        handleChangePage(page, totalPage) {
            if (page < totalPage)
                dispatch(actionCreator.changePage(page + 1))
            else {
                dispatch(actionCreator.changePage(1))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);