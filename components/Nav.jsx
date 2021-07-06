import React from 'react'
import Link from 'next/link'
import Styles from '../styles/Nav.module.css'

function Nav() {
    return (
        <div className={Styles.navContainer}>
            <ul className={Styles.nav}>
                <li><Link href='/'><a>HOME</a></Link></li>
                <li><Link href='/users'><a>USERS</a></Link></li>
                <li><Link href='/employees'><a>EMPLOYEES</a></Link></li>
                <li><Link href='/about'><a>ABOUT US</a></Link></li>
                <li><Link href='/contact'><a>CONTACT US</a></Link></li>
            </ul>
        </div>
    )
}

export default Nav
