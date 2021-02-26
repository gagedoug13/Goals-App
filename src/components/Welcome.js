import React from 'react'
import { Link } from "react-router-dom"

export default function Welcome() {
    return (
        <div className='WelcomeDiv'>
            <Link to='/dashboard'>
                <button> go to Dashboard</button>
            </Link>
        </div>
    )
}
