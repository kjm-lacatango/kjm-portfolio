import { faArrowLeft, faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from './myContext'
import { motion } from 'framer-motion'

const Navbar = () => {
    const {isDark, setIsDark, isMenuOpen, setIsMenuOpen} = useContext(MyContext)
    const [isHome, setIsHome] = useState(true)
    const [isAbout, setIsAbout] = useState(false)
    const [isProjects, setIsPorjects] = useState(false)

    const home = () =>{
        setIsHome(true)
        setIsAbout(false)
        setIsPorjects(false)
        setIsMenuOpen(false)
    }
    const about = () => {
        setIsAbout(true)
        setIsHome(false)
        setIsPorjects(false)
        setIsMenuOpen(false)
    }
    const projects = () =>{
        setIsPorjects(true)
        setIsHome(false)
        setIsAbout(false)
        setIsMenuOpen(false)
    }

  return (
    <div className='flex justify-between px-8 pl-10 py-2 sm:px-20 fixed w-full items-center z-30'
     style={{backdropFilter: 'blur(2px)'}}>
        <motion.h1 initial={{x: -100}} animate={{x: 1}} transition={{duration: .5}}
         className='text-2xl cursor-default text-cyan-400'>KJM</motion.h1>
        <motion.div initial={{x: 100}} animate={{x: 1}} transition={{duration: .5}}
         className='flex w-1/3 sm:1/3 justify-end items-center'>
            <div className='w-full hidden sm:flex justify-between mr-8 gap-4'>
                <Link to='/' style={isHome ? {color: 'orangered'}:null} onClick={home} 
                 className={isDark ? 'hover:text-orange-600 text-white' : 'hover:text-orange-600'}>Home</Link>
                <Link to='/about' style={isAbout ? {color: 'orangered'}:null} onClick={about} 
                 className={isDark ? 'hover:text-orange-600 text-white' : 'hover:text-orange-600'}>About</Link>
                <Link to='/projects' style={isProjects ? {color: 'orangered'}:null} onClick={projects}
                 className={isDark ? 'hover:text-orange-600 text-white' : 'hover:text-orange-600'}>Projects</Link>
            </div>
            <div className='flex gap-5 items-center'>
                <FontAwesomeIcon icon={faBars} title='menu' onClick={() => setIsMenuOpen(true)}
                 className={isDark ? 'text-white text-lg block sm:hidden cursor-pointer hover:text-orange-600'
                 : 'text-gray-700 text-lg block sm:hidden cursor-pointer hover:text-orange-600'} />
                {isDark ? (
                    <FontAwesomeIcon icon={faSun} onClick={() => setIsDark(false)} title='light mode' className='text-white hover:text-orange-600 cursor-pointer' />
                ) : (
                    <FontAwesomeIcon icon={faMoon} onClick={() => setIsDark(true)} title='dark mode'
                     className='hover:text-orange-600 cursor-pointer' />
                )}
            </div>
        </motion.div>
        {/* drop down nav for small screen */}
        {isMenuOpen && (
            <motion.div initial={{height: 0}} animate={{height: '250px'}} transition={{duration: .1}}
             className='bg-gray-50 fixed top-0 left-0 w-full sm:hidden pb-10 rounded-b-2xl border-b border-b-gray-500'
             style={isDark ? {background: 'rgba(52, 52, 52, 50)'}: null}>
                <FontAwesomeIcon icon={faArrowLeft} onClick={() => setIsMenuOpen(false)}
                className={isDark ? 'text-2xl m-8 cursor-pointer hover:text-orange-600 text-white' : 'text-2xl m-8 cursor-pointer hover:text-orange-600'} />
                <div className='flex flex-col items-center justify-between mr-8 gap-2 mx-10'>
                    <Link to='/' style={isHome ? {background: isDark ? 'gray' : 'lightgray'}:null} onClick={home}
                     className={isDark ? 'hover:bg-gray-600 py-2 rounded-lg text-white w-full text-center' : 'hover:bg-gray-200 py-2 rounded-lg w-full text-center'}>Home</Link>
                    <Link to='/about' style={isAbout ? {background: isDark ? 'gray' : 'lightgray'}:null} onClick={about}
                     className={isDark ? 'hover:bg-gray-600 py-2 rounded-lg text-white w-full text-center' : 'hover:bg-gray-200 py-2 rounded-lg w-full text-center'}>About</Link>
                    <Link to='/projects' style={isProjects ? {background: isDark ? 'gray' : 'lightgray'}:null} onClick={projects}
                     className={isDark ? 'hover:bg-gray-600 py-2 rounded-lg text-white w-full text-center' : 'hover:bg-gray-200 py-2 rounded-lg w-full text-center'}>Projects</Link>
                </div>
            </motion.div>
        )}
    </div>
  )
}

export default Navbar
