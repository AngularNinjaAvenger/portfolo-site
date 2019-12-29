import React, { Component } from 'react'
import Button from "../../Conponents/Button/"
import "./styles.css"
import Container from "../../Conponents/Container"
import Card from "../../Conponents/Card"
import CardWrapper from "../../Conponents/CardWrapper"
class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            skills:[
                {"Front End":["React","SASS","J Query"]},
                {"Back End":["Node js","Django","Spring Boot"]},
                {"Cross Platform":["Flutter","React Native"]},
                {"Programming Languages":["Javascript","Python","Java","Dart"]}
                ],
            service:["CROSS PLATFORM","WEB DEVELOPMENT","BOTS DEVELOPMENT"]
        }
    }
    leftSideContent=()=>{
        return(
            <div className="side-content-wrapper-gwievron">
                <h2 className="h2-rf03ieon"> I AM</h2>
                <h1 className ="name-fe89hnodi"> OSAYI BISHOP</h1>
                <p className="about-me-fewij">
                    Bishop, a full stack web developer, 
                    specialized in MERN STACK loerem ipsum 
                    loerem ipsumloerem ipsumloerem ipsumloerem 
                    ipsumloerem ipsumloerem ipsumloerem ipsum.
                </p>
                <Button />
            </div>
        )
    }
    render() {
        return (
            <Container 
                aPicOfMeToBg={true} 
                addSocialButton={true}
                leftSideContent={this.leftSideContent}
                dropDown={true}
                footer={true}
                >
                 <CardWrapper centerText={`My </> Skills Set`}>
                    {
                        this.state.skills.map((item,index)=>{
                            let field = Object.keys(item)[0];
                            console.log(field,item)
                            return (
                                <Card 
                                    key={index} 
                                    type={"text-sub"} 
                                    fieldName={field} 
                                    list={item[field]}
                                    zIndex={index}
                                    length={this.state.skills.length}
                                    />
                            )
                        })
                    }
                </CardWrapper>
                
                <CardWrapper centerText={`My Service`}>
                    {
                        this.state.service.map((item,index)=>{
                            return (
                                <Card 
                                    key={index} 
                                    type={"text"} 
                                    text={item}/>
                            );
                        })
                    }
                </CardWrapper>
              
                <CardWrapper centerText={`My Project`}>
                    <Card type={"project"} text={"WEB APPS"}/>
                    <Card type={"project"} text={"MOBILE APPS"} />
                </CardWrapper> 
            </Container>

        )
    }
}

export default index
