import React from 'react'
import { Link } from "react-router-dom"
import Circle from "../blueCircle.png"


export default function Dashboard(props) {

    const createElement = () => {
        const element = document.createElement('INPUT')
        const button = document.createElement('BUTTON')
        button.className = "todoDeleteButton"
        button.innerHTML = "delete"
        const goalContainer = document.querySelector('.longGoalsDiv')
        element.setAttribute("type", "text")
        const circle = document.createElement('IMG')
        circle.src = {Circle}
        // element.style.width = "50vw"
        console.log(props.todoQueue)
        // element.style.backgroundColor = "black"
        goalContainer.append(element, button)
    }
    return (
        <div className='dashboardDiv'>
            <div className='dashboardContainerDiv'>
                <header className='dashboardHeader'>Dashboard</header>
                <div className='goalsDiv'>
                    
                    
                    <div className='longGoalsDiv'>
                    <button onClick={createElement} className='createGoal'>create new goal</button>
                        <h2>
                        long term goals 
                        </h2>
                    </div> 

                    <Link to='/goals'>
                        <button>Goals</button>  
                    </Link> 
                    
                    <div className='shortGoalsDiv'>
                        <h3>
                        short term goals 
                        </h3>
                    </div>

                </div>

                <div className='todosDiv'>
                    <Link to='/todos'>
                        <button>ToDo's</button>
                    </Link>
                </div>
            </div>   
        </div>
    )
}