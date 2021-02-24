import React from 'react'
import { Link } from "react-router-dom"

export default function SignIn() {
    return (
        <div>
            <form>
                <h3>username</h3>
                <input />

                <h3>password</h3>
                <input />

                <Link to='/dashboard'>
                    <button>go</button>
                </Link>
            </form>
        </div>
    )
}
