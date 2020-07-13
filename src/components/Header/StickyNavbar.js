import React from 'react'
import { ScrollTopContext } from '../pages/contexts'
import Navbar from './Navbar'
import LogoLabel from './LogoLabel'

const StickyNavbar = () => {

    const ScrollTop = () => React.useContext(ScrollTopContext)
    let style = {
        width: '100%',
        height: '13vh',
        minHeight: '4rem',
        backgroundColor: 'rgba(51, 34, 136, 0.9)',
        position : 'fixed', 
        left: '0',
        top: '-10%',
        transition: 'top 0.5s',
        zIndex: '2'
    }  
    ScrollTop() ? style.top = '0' : style.top = '-27%'

    return (
        <div style={style}>
            <LogoLabel/>
            <Navbar/>
        </div>
    )
}

export default StickyNavbar