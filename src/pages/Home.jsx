import React, { useContext } from 'react'
import pic from '../images/noBackground2.png'
import {MyContext} from '../components/myContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

const Home = () => {
    const {isDark} = useContext(MyContext)

  return (
    <div className='overflow-hidden'>
        <section className='flex items-center h-screen justify-center gap-20 px-10' style={isDark ? {background:'rgba(52, 52, 52, 50)'}:null}>
            <div className='z-10 mr-10 pl-20 flex flex-col justify-center'>
                <motion.h1 animate={{x: 1}} initial={{x: -100}} transition={{duration: .2}}
                 className={isDark ? 'text-white text-3xl mb-4' : 'text-3xl mb-4'}>
                    Hi! I'm
                </motion.h1>
                <motion.h1 animate={{scale: [0,1.06,1]}}  transition={{duration: .9}} style={{
                    webkitTextStroke: isDark ? '1px #0003' : '1px #0005',
                    color: 'transparent',
                    paddingBottom: '10px',
                    background: 'linear-gradient(to left, lightgray, aliceblue, lightblue, teal)',
                    webkitBackgroundClip: 'text'
                 }} className='text-5xl mb-3 font-semibold'>
                    <i>
                       Keannu Lacatango
                    </i>
                </motion.h1>
                <motion.div initial={{visibility: 'hidden'}} animate={{visibility: 'visible'}} transition={{delay: .5}}
                 className='relative w-60'>
                    <h1 className={isDark ? 'text-xl mb-2 text-gray-300' : 'text-xl mb-2 text-gray-700'}><b>
                        Fullsta
                        <motion.span initial={{fontSize: '30px'}} animate={{fontSize: '20px'}} transition={{duration: .5, delay: .8}}>c</motion.span>
                        <motion.span initial={{fontSize: '40px'}} animate={{fontSize: '20px'}} transition={{duration: .5, delay: .7}}>k</motion.span>
                        <motion.span initial={{fontSize: '40px'}} animate={{fontSize: '20px', marginLeft: '10px'}} transition={{duration: .5, delay: .7}}>D</motion.span>
                        <motion.span initial={{fontSize: '30px'}} animate={{fontSize: '20px'}} transition={{duration: .5, delay: .8}}>e</motion.span>
                        veloper
                    </b></h1>
                    <motion.span className={isDark ? 'h-10 bg-gradient-to-l from-cyan-800 to-gray-700 absolute bottom-0 left-0'
                     : 'h-10 bg-gradient-to-l from-gray-50 to-cyan-100 absolute bottom-0 left-0'}
                     initial={{width: '120px'}} animate={{width: 0}} transition={{duration: .8, delay: .5}} />
                    <motion.span className={isDark ? 'h-10 bg-gradient-to-r from-cyan-800 to-gray-700 absolute bottom-0 right-0'
                     : 'h-10 bg-gradient-to-r from-gray-50 to-cyan-100 absolute bottom-0 right-0'}
                     initial={{ width: '120px'}} animate={{width: 0}} transition={{duration: .8, delay: .5}} />
                </motion.div>
                <div className='mt-14 flex gap-6 items-center cursor-default'>
                    <motion.img initial={{y: -100, opacity: 0}} animate={{y: 1, opacity: 1}} transition={{duration: .4, delay: .8}}
                     src={`https://www.svgrepo.com/show/303251/mysql-logo.svg`} alt='pic' className='w-10 border border-blue-800 rounded-xl' />
                    <motion.span initial={{y: -100, opacity: 0}} animate={{y: 1, opacity: 1}} transition={{duration: .4, delay: .9}}
                     className='px-2 pt-1 pb-1.5 bg-gray-800 text-white rounded-full'>EX</motion.span>
                    <motion.div initial={{y: -100, opacity: 0}} animate={{y: 1, opacity: 1}} transition={{duration: .3, delay: 1}}>
                        <FontAwesomeIcon icon={faReact} className='text-4xl text-cyan-600' />
                    </motion.div>
                    <motion.div initial={{y: -100, opacity: 0}} animate={{y: 1, opacity: 1}} transition={{duration: .2, delay: 1.2}}>
                        <FontAwesomeIcon icon={faNodeJs} className='text-4xl text-green-700' />
                    </motion.div>
                </div>
            </div> 
            <div className='bg-sky-800 h-60 w-60 absolute rounded-full top-0 left-6 shadow-xl shadow-gray-500'
             style={isDark ? {boxShadow: '2px 5px 20px rgba(90, 90, 90, 40)'}:null} />
            <div className={isDark ? 'bg-gradient-to-tl from-cyan-400 to-gray-800 h-40 w-40 absolute rounded-full top-20 left-2/4 sm:block hidden' : 'bg-gradient-to-tl from-cyan-400 to-white h-40 w-40 absolute rounded-full top-20 left-2/4 sm:block hidden'} />
            <div className='bg-orange-300 h-20 w-20 absolute rounded-full left-40 top-48' />
            <div className='bg-sky-100 h-64 w-64 absolute rounded-full sm:left-40 left-10 bottom-16' style={isDark ? {background: 'rgba(62, 62, 62, 40)'}:null} />
            <div className='bg-blue-900 h-12 w-12 absolute rounded-full sm:right-20 right-8 ' />

            <motion.div animate={{scale: [0, 1.1, 1]}} transition={{duration: .8, delay: 1.2}}
             style={isDark ? {background: 'rgba(52, 52, 52, 50)'}:null}
             className={isDark ? 'hidden md:block relative rounded-full border-2 border-gray-400 shadow-2xl shadow-cyan-600'
             : 'hidden md:block overflow-hidden relative bg-gray-100 rounded-full border-2 border-gray-400 shadow-2xl shadow-blue-700'}>
                <motion.img animate={{rotate: [0, 6, -6, 3, -3, 0]}} transition={{duration: 1.2, delay: 1.4}}
                    src={pic} alt='pic' className='w-80 rounded-full' />
            </motion.div>
        </section>
    </div>
  )
}

export default Home
