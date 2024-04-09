import React from 'react'
import { Link } from 'react-router-dom'
export default function HeaderIcon({ company, business }) {
    return (
        <div>
            <Link to='/'>
                <h1 className="font-bold text-xl lg:text-3xl flex flex-wrap">
                    <span className="text-neutral-300">{company}</span>
                    <span className="text-neutral-400">{business}</span>
                </h1>
            </Link>
        </div>
    )
}
