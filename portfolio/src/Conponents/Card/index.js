import "../../styles/elevate.css"
import "./styles.css"


import React, { Component } from 'react'

class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            render:false         
        }
    }
    cardHover=()=>{
        console.log("handler being called",this.state.renderList)
        this.setState((state, props) => { return { 
            render:!state.render
         }})
        
    }
    CardItem=()=>{
        return(
            <div 
                className="card-item-cover text-sub-text-f09ew8hi"
                onMouseEnter={this.cardHover}
                onMouseLeave={this.cardHover}
                >
                <div>
                    {this.props.fieldName}
                </div>
                 {
                    this.state.render && (
                        <ul className="ul-t48yh" style={{zIndex:`${this.props.length-this.props.zIndex}`}}>
                            {
                                this.props.list.map((item,index)=>{
                                    return <li>{item}</li>
                            })
                            }
                        </ul>
                   )
                } 
            </div>
        )
    }
    normalCardText=()=>{
        return(
            <div 
                className="card-item-cover text-sub-text-f09ew8hi"
                >
                <div>
                    {this.props.text}
                </div>
            </div>
        )
    }
    project=()=>{
        return(
            <div 
                className="card-item-cover project-few89dho"
                >
                <div>
                    {this.props.text}
                </div>
            </div>
        )
    }
    card=()=>{
        const { type } = this.props;  
        switch (type) {
            case "text-sub":
                return this.CardItem();
            
            case "text":
                return this.normalCardText();
            case "project":
                return this.project();
            default:
                break;
        }
    }
    render() {
        return this.card();
    }
}

export default index

