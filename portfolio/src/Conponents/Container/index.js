import React, { Component } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import { FaLinkedin,FaInstagram,FaGithubSquare} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import Icon from "../Icons/Icons"
import Header from "../Header"
import Footer from "../Footer/"
import "./styles.css"
import "./styles2.css"
import "./backgroundimage.css"

class index extends Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef();
        this.state = {
            imgbg:"", 
            content:"",
            scroll:"",
            footerClassName:"footer-48f9hwudnso",
            mainHeight:0,
            arrowDropDownState:true,
        }
    }
    componentDidMount() {
        let mainHeight = this.ref.current.clientHeight;

        this.setState({
            mainHeight,
            mainInfo:this.ref
        })
    }
    renderRestOfContent=()=>{
        this.props.ddHandler && this.props.ddHandler()
        if(this.props.leftSideContent){
            this.setState({
                imgbg:"img-bg-83hfiewo",
                content:"content-full-screen",
                scroll:"setMain-scroll",
                arrowDropDownState:false
            })
        }
    }
    scrollHandler=()=>{
        let x = this.ref.current;
        if(x.scrollTop > ((x.offsetHeight+x.clientHeight)-100)){
            console.log(true)
        }
    }
    render() {
        const { addSocialButton,leftSideContent,children,dropDown,showFooter } = this.props
        return (
            <div className={"Container-839hfoen"}>
                <div className="Container-background-389hfuoen">
                .
                </div>
                <div className={"Container-children-wrapper-038fhoewin"}>
                    <div className={"Container-children-wrapped-child-qfe89hdo"}>
                        <Header />
                        <main 
                            onScroll={this.scrollHandler} 
                            className={`
                                        feqhuinoo-main 
                                        ${this.state.scroll ? this.state.scroll: "setMain-scroll-hidden"}`}
                            ref={this.ref}
                            >
                            
                            {
                                this.state.arrowDropDownState  && dropDown && (
                                    <div 
                                        className="arrow-drop-down-f0ewhion"
                                        onClick={this.renderRestOfContent}
                                        >
                                        <Icon size={"4rem"} color={"white"}>
                                            <IoIosArrowDown />
                                        </Icon>
                                    </div>
                                )
                            }
                            {
                                leftSideContent && (
                                    <div 
                                        className="with-img-style-gwu0viosnc"
                                        style={{height:this.state.mainHeight}}
                                        >
                                            {
                                                addSocialButton && (
                                                    <div className="irwrapper-f0hewiond">
                                                        <a href="/socialhandler"><Icon size={"1.5rem"}><FaInstagram /></Icon></a> 
                                                        <a href="/socialhandler"><Icon size={"1.5rem"}><FaLinkedin /></Icon></a>
                                                        <a href="/socialhandler"><Icon size={"1.5rem"}><MdEmail /></Icon></a>
                                                        <a href="/socialhandler"><Icon size={"1.5rem"}><FaGithubSquare /></Icon></a>
                                                    </div>
                                                )
                                            }
                                        <div 
                                            className={`
                                            contentside 
                                            ${this.state.content}`}
                                            >
                                            {leftSideContent()}
                                        </div>
                                        <div 
                                            className={`
                                                image-container-g4h0wivon 
                                                ${this.state.imgbg}
                                                    `}
                                            >
                                            <img onClick={this.showNestedContent}
                                                src={`${process.env.PUBLIC_URL}/images/emhonfubhegbe-osayi-bishop.png`} 
                                                alt="osayi bishop"/>
                                        </div>
                                    </div>
                                )
                            }
                            <div
                                style={{height:`${this.props.height === 100 ? "100%":"fit-content"}`,background:"white"}}
                            >
                                {children}
                            {showFooter ? <Footer class = {this.state.footerClassName}/>:" "} 
                            </div>
                        </main>
                   
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default index
