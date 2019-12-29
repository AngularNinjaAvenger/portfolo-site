import { FaLinkedin,FaInstagram,FaGithubSquare} from "react-icons/fa"
import Container from "../../Conponents/Container"
import Icon from "../../Conponents/Icons/Icons"
import React, { Component } from 'react'
import {MdEmail} from "react-icons/md"
import About from "../../Json/ABOUT.json"
import "./styles.css"


class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            more:false
        }
    }
    leftSideContent=()=>{
        let more = (<span className="more-content-tg48ehi">
        {About["me"]["rest"]}
        </span>);
        return(
            <div className="side-content-wrapper-gwievron">
                <div>
                    <h2 className="h2-rf03ieon"> I AM</h2>
                    <h1 className ="name-fe89hnodi"> OSAYI BISHOP</h1>
                    <p className="about-me-fewij">
                    {About["me"]["short"]}
                        {this.state.more ? more:""}
                    {
                        this.state.more && this.icons()
                    }
                    </p>
                </div>
            </div>
        )
    }
    showMore=()=>{
        this.setState({
            more:true
        })
    }
    icons=()=>{
        return (
            <div className="irwrapper-f0hewiond">
                <a href="/socialhandler"><Icon size={"1.5rem"}><FaInstagram /></Icon></a> 
                <a href="/socialhandler"><Icon size={"1.5rem"}><FaLinkedin /></Icon></a>
                <a href="/socialhandler"><Icon size={"1.5rem"}><MdEmail /></Icon></a>
                <a href="/socialhandler"><Icon size={"1.5rem"}><FaGithubSquare /></Icon></a>
            </div>
        );
    }
    render() {
        return (
            <Container
                ddHandler={this.showMore}
                dropDown={true}
                aPicOfMeToBg={true} 
                addSocialButton={false}
                leftSideContent={this.leftSideContent}
                footer={true}
            >
            </Container>
        )
    }
}

export default Index
