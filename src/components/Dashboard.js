import React from 'react'
import { Link } from "react-router-dom"

export default function Dashboard() {
    return (
        <div className='dashboardDiv'>
            <div className='todosDiv'>
                <Link to='/todos'>
                    <button>ToDo's</button>
                </Link>
            </div>
           
           
            <div className='goalsDiv'>
                <Link to='/goals'>
                    <button>Goals</button>  
                </Link>
            </div>
          
        </div>
    )
}
