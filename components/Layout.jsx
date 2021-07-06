import React from 'react'
import Nav from './Nav'

function Layout({children}) {
    return (
        
        <div>
            <Nav />
            {children}        
        </div>
    )
}

export default Layout
