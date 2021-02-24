import React from 'react'
import { Link } from "react-router-dom"

export default function Dashboard() {
    return (
        <div>
            <Link to='/todos'>
                <button>ToDo's</button>
            </Link>
           
           <Link to='/goals'>
                <button>Goals</button>  
           </Link>
        </div>
    )
}
