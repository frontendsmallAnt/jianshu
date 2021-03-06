import styled from "styled-components"
import logpic  from "../../static/nav-logo.png"
export const HeaderWrapper = styled.div`
position:relative;
height:58px;
border-bottom:1px solid #eee
`

export const Logo = styled.a.attrs({
    href:"/"
})`
position:absolute;
top:0;
left:0;
display:inline-block;
width:100px;
height:56px;
background:url(${logpic});
background-size:contain
`

export const Nav = styled.div`
width:960px;
padding-right:70px;
box-sizing:border-box;
height:100%;
margin:0 auto;
`

export const NavItem = styled.div`
line-height:56px;
padding:0 15px;
font-size:17px;
color:#333;
&.left{
    float:left
}
&.right{
    float:right;
    color:#969696;
}
&.active{
    color:#ea6f5a
}
`

export const NavSearch = styled.input.attrs({
    placeholder:"搜索"
})`
width:160px;
height:38px;
margin-top:9px;
margin-left:20px;
padding:0 20px;
box-sizing:border-box;
border:none;
outline:none
border-radius:19px;
background:#eee;
font-size:14px;
color:#666;
&.slide-enter{
    transition:all .2s ease-out
}
&.slide-enter-active{
    width:240px;
}
&.slide-exit{
    transition:all .2s ease-out
}

&.slide-exit-active{
    width:160px;
}
&::placeholder{
    color:#999
}
&.focused{
    width:240px;
}
`

export const SearchInfo = styled.div`
position:absolute;
left:20px;
top:56px;
width:240px;
padding:0 20px;
box-shadow:0 0 8px rgba(0,0,0,.2)
`

export const SearchInfoTitle = styled.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size:14px;
color:#969696
`
export const SearchInfoSwitch = styled.div`
float:right;
font-size:12px
`

export const SearchInfoItem = styled.a`
display:block;
padding:0 5px;
line-height:20px;
float:left;
border:1px solid #ddd;
margin-right:10px;
margin-bottom:15px;
font-size:12px;
color:#777;
border-radius:3px;
`

export const Addition = styled.div`
position:absolute;
right:0;
top:0;
`

export const Btn = styled.div`
float:right;
line-height:38px;
border-radius:19px;
margin-top:9px;
margin-right:20px;
padding:0 20px
border:1px solid #ec6149;
font-size:14px;
&.reg{
color:#ec6149
}
&.writting{
background:#ec6149;
color:#fff;
}
`
export const SearchWrapper = styled.div`
float:left;
position:relative;
.iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    height:30px;
    line-height:30px;
    text-align:center;
    border-radius:15px;
    &.focused{
        background:#777;
        color:#fff;
    }
}
`