import React from 'react'
import "./styles.css"

function Index(props) {
   return(
        <div className="card-wrapper-7f48ewuih">
            <h3>
                {props.centerText}
            </h3>
            <div className="card-items">
                {props.children}
            </div>
        </div>
   )
}

export default Index
