import React from 'react'
import Container from "../../Conponents/Container"
import Card from "../../Conponents/Card"
import CardWrapper from "../../Conponents/CardWrapper"
import { FaArrowLeft } from "react-icons/fa"
import Icon from "../../Conponents/Icons/Icons"
import PROJECTS from "../../Json/PROJECTS.json"
import "./styles.css"

class Section1 extends React.Component{
    render(){
        return (
            <ProjectInfoCover header={false}>
                <CardWrapper centerText={`My Project`}>
                        <Card type={"project"} text={"WEB APPS"}/>
                        <Card type={"project"} text={"MOBILE APPS"} />
                </CardWrapper> 
            </ProjectInfoCover>
        );
    }
}
class ProjectInfoCover extends React.Component{
    render(){
        let header = this.props.header === undefined ? true:false; 
        return (
            <div className="pr-ifo-wr-g248fh0ewvuin">
                <div>
                    {
                        header && (
                         <header>
                                <div className="cursor-pointer-g4802hwi"> 
                                    <Icon size={"inherit"}>
                                        <FaArrowLeft />
                                    </Icon>    
                                </div>
                                <h3>{this.props.title}</h3>
                            </header>
                        )
                    }
                    <main className="main-3f8e9vwhdun">
                        <div  className="inner-container-t408y2gehvwid">
                            <section className="section-t3geyf98huion">
                                    {this.props.children}
                            </section>
                        </div>                       
                    </main>
                </div>
            </div> 
        );
    }
}



class ProjectInfoWrapper extends React.Component{
    render(){
        let projects = []
        console.log(PROJECTS["projects"])
        for(let i of PROJECTS["projects"]["web"]){
            projects.push(i["title"]);
        }
        return (
            <ProjectInfoCover title="WEB APPS">
                        <CardWrapper>
                    {
                        projects.map((item,index)=>{
                            return <Card type={"project"} text={item}/> 
                        })
                    }
                        </CardWrapper>
            </ProjectInfoCover>
        );
    }
}



class ProjetInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showTechnologies:false         
        }
    }
    showTechnologies=()=>{
        this.setState((state, props) => { 
            return { 
                showTechnologies:!state.showTechnologies
             }
        })
        
    }
    render() {
        let project = PROJECTS["projects"]["web"][0]
        console.log(project);
        return (
            <ProjectInfoCover title={project.title}>
                 <div className="info-t38egh9w">
                    <div>
                        <div 
                            onMouseOver={this.showTechnologies}
                            onMouseLeave={this.showTechnologies}>
                            <span>View Technologies Used</span> 
                            {
                                this.state.showTechnologies && (
                                <div>
                                    <div>Technology Used</div>
                                        <ul>
                                        {
                                            project.technology_used.map((item,index)=>{
                                                return <li key={index}>{item}</li>
                                            })
                                        }
                                        </ul>
                                </div>
                                )
                            }
                        </div>
                        <div className="about-project-g427heuw">
                            <h4>About {project.title}</h4>
                            <p>
                                {project.about}
                            </p>
                        </div>
                        <div className="projet-details">
                            <div>
                                <h5>features</h5>
                                {
                                    project.features.map((item,index)=>{
                                        return <li key={index}>{item}</li>
                                    })
                                }
                            </div>
                            <div>
                                <a href={project.website_link}>VISIT SITE</a>
                                <a href={project.git_hub_repo}>VIEW REPOSITORY</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </ProjectInfoCover>
        )
    }
}




function Index() {
    let main = document.getElementsByClassName("feqhuinoo-main");
    console.log(main)
    return (
        <Container
            aPicOfMeToBg={false} 
            addSocialButton={false}
            dropDown={false}
            height={100}
        >
            <Section1 />
        </Container>
    )
}

export default Index
