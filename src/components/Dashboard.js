import React from 'react'
import { Link } from "react-router-dom"


export default function Dashboard() {
    return (
        <div className='dashboardDiv'>

            <div className='goalsDiv'>

                <div className='longGoalsDiv'>
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
    )
}
