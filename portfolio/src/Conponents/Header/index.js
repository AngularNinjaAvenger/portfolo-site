import React, { Component } from 'react'

import Icon from "../Icons/Icons"
import windowDimensions from 'react-window-dimensions';
import {MdNavigateBefore} from "react-icons/md";
import {IoMdMenu} from "react-icons/io";
import "./styles.css"


function Index() {
    return (
        <div className="nav-item-wrapper-qveiodan">
            <ul>
                {
                    ["Home","About","Showcase","Blog","Contact"].map((item,index)=>{
                        return <li ><a href="/">{item}</a></li>
                    })
                }
            </ul>
        </div>
    )
}


class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu:false
        }
    }
    navState=()=>{
        this.setState((state, props) => { return { 
            showMenu:!state.showMenu
         }})
    }
    navItems=()=>{
        if(this.props.width > 768){
            return <Index />;
        }
        else{
            if(this.state.showMenu){
                return <Index />;
            }
        }
    }
    render() {
        console.log(this.props.width,this.props.height)
        return (
            <header className="header-0ghoiew">
                <div>
                    <h1 className="head-icon-fqe0dsijon">
                        Angular Ninja Avenger
                    </h1>
                </div>
                    {
                        this.props.width < 768 && (
                            <div  className="hamburger-fveq0dino" onClick={this.navState}>
                            <Icon size={"2rem"}>
                                {!this.state.showMenu ? <IoMdMenu />:<MdNavigateBefore />}
                            </Icon>
                            </div>
                        )
                    }
                    {this.navItems()}
            </header>
            )
    }
}

export default windowDimensions()(index)




        