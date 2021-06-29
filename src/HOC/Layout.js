import React from 'react'
import Navbar from '../Page/Header/Navbar'

export default function Layout({children,subMenu}) {

    console.log('dsfs'+ subMenu)
    return (
        <div>
            <Navbar onClick={subMenu}/>
            <main>{children}</main>
        </div>
    )
}
