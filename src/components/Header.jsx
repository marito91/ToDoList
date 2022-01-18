import React from 'react'
import Badge from 'react-bootstrap/Badge'

// CSS
import '../css/Main.css';

export default function Header() {
    return (
        <div className="header">
            <h1>
                <Badge bg="secondary">To-Do List</Badge>
            </h1>
        </div>
    )
}
