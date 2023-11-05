import React, { useContext } from 'react'
import pic from '../images/noBackground1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { MyContext } from '../components/myContext'
import { faCss3, faHtml5, faJava, faReact } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

const About = () => {
  const {isDark} = useContext(MyContext)

  return (
    <div className='flex justify-center items-start gap-8 h-screen py-10 sm:px-10 px-4 overflow-auto'
     style={isDark ? {background: 'rgb(52, 52, 52)'}:null}>
      <section className='relative w-full sm:px-14 md:w-2/3 lg:w-1/2 sm:my-20 my-10 overflow-hidden'>
        <div className='flex justify-center pt-24'>
          <motion.img animate={{y: [-300, 20, 1]}} transition={{duration: .5}}
           src={pic} alt='pic' className='z-20 sm:w-80 w-48 rounded-3xl' />
          {/* for react */}
          <motion.div animate={{scale: [0, 1.1, 1]}} transition={{duration: .5, delay: .3}}
           className={isDark ? 'absolute top-0 bg-gray-200 p-2 rounded-full shadow-lg shadow-gray-600' : 'absolute top-0 bg-gray-200 p-2 rounded-full shadow-lg shadow-gray-400'}
           style={{background: 'linear-gradient(to bottom left, yellow, orange, red)'}}>
            <h1 className='z-10 absolute top-0 sm:left-20 left-16 text-sky-500'>90%</h1>
            <div style={{transform: 'rotate(50deg)', borderTopColor: isDark ? 'rgb(195, 195, 195)' : 'rgb(225, 225, 225)'}}
             className='top-0 left-0 absolute w-full h-full border-transparent border-8 rounded-full' />
            <h1 className='sm:w-20 sm:h-20 w-16 h-16 rounded-full flex items-center justify-center bg-white'
             style={isDark ? {background: 'rgb(52, 52, 52)', color: 'white'}:null}>
              <FontAwesomeIcon icon={faReact} className='text-2xl text-cyan-600' />
            </h1>
          </motion.div>
          {/* for html and css */}
          <motion.div animate={{scale: [0, 1.1, 1], x: [50, -20, 1]}} transition={{duration: .5, delay: .4}}
           className={isDark ? 'absolute sm:top-20 top-14 right-4 bg-gray-200 p-2 rounded-full shadow-lg shadow-gray-600' : 'absolute sm:top-20 top-14 right-4 bg-gray-200 p-2 rounded-full shadow-lg shadow-gray-400'}
           style={{background: 'linear-gradient(to bottom left, yellow, orange, red)'}}>
            <h1 className='z-10 absolute top-0 sm:sm:left-20 left-16 text-sky-500'>90%</h1>
            <div style={{transform: 'rotate(50deg)', borderTopColor: isDark ? 'rgb(195, 195, 195)' : 'rgb(225, 225, 225)'}}
             className='top-0 left-0 absolute w-full h-full border-transparent border-t-gray-100 border-8 rounded-full' />
            <h1 className='sm:w-20 sm:h-20 w-16 h-16 rounded-full flex items-center justify-center bg-white'
             style={isDark ? {background: 'rgb(52, 52, 52)', color: 'white'}:null}>
              <FontAwesomeIcon icon={faHtml5} className='text-orange-600 pr-1 mr-1 border-r-2 border-gray-500 text-2xl' /><FontAwesomeIcon icon={faCss3} className='text-blue-600 text-xl' />
            </h1>
          </motion.div>
          {/* for mysql */}
          <motion.div animate={{scale: [0, 1.1, 1], x: [-50, 20, 1]}} transition={{duration: .5, delay: .4}}
           className={isDark ? 'absolute sm:top-20 top-14 left-4 bg-gray-200 p-2 rounded-full shadow-lg shadow-gray-600' : 'absolute sm:top-20 top-14 left-4 bg-gray-200 p-2 rounded-full shadow-lg shadow-gray-400'}
           style={{background: 'linear-gradient(to bottom left, yellow, orange, red)'}}>
            <h1 className='z-10 absolute top-0 sm:left-20 left-16 text-sky-500'>90%</h1>
            <div style={{transform: 'rotate(50deg)', borderTopColor: isDark ? 'rgb(195, 195, 195)' : 'rgb(225, 225, 225)'}}
             className='top-0 left-0 absolute w-full h-full border-transparent border-8 rounded-full' />
            <h1 className='sm:w-20 sm:h-20 w-16 h-16 rounded-full flex items-center justify-center bg-white'
             style={isDark ? {background: 'rgb(52, 52, 52)', color: 'white'}:null}>
              <img src={`https://www.svgrepo.com/show/303251/mysql-logo.svg`} alt='pic' className='w-12' />
            </h1>
          </motion.div>
          {/* for c sharp */}
          <motion.div animate={{scale: [0, 1.1, 1], x: [-50, 20, 1], y: [50, -20, 5]}} transition={{duration: .5, delay: .5}}
           className={isDark ? 'absolute sm:top-64 top-40 sm:left-10 left-5 bg-gray-200 p-2 rounded-full shadow-lg shadow-gray-600' : 'absolute sm:top-64 top-40 sm:left-10 left-5 bg-gray-200 p-2 rounded-full shadow-lg shadow-gray-400'}
           style={{background: 'linear-gradient(to bottom left, yellow, orange, red)'}}>
            <h1 className='z-10 absolute top-0 sm:left-20 left-16 text-sky-500'>80%</h1>
            <div style={{transform: 'rotate(50deg)', borderTopColor: isDark ? 'rgb(195, 195, 195)' : 'rgb(225, 225, 225)'}}
             className='top-0 left-0 absolute w-full h-full border-transparent border-8 rounded-full' />
            <h1 className='sm:w-20 sm:h-20 w-16 h-16 rounded-full flex items-center justify-center bg-white text-purple-500'
             style={isDark ? {background: 'rgb(52, 52, 52)'}:null}>
              C#
            </h1>
          </motion.div>
          {/* for java */}
          <motion.div animate={{scale: [0, 1.1, 1], x: [50, -20, 1], y: [50, -20, 5]}} transition={{duration: .5, delay: .5}}
           className={isDark ? 'absolute sm:top-64 top-40 sm:right-10 right-5 bg-gray-200 p-2 rounded-full shadow-lg shadow-gray-600' : 'absolute sm:top-64 top-40 sm:right-10 right-5 bg-gray-200 p-2 rounded-full shadow-lg shadow-gray-400'}
           style={{background: 'linear-gradient(to bottom left, yellow, orange, red)'}}>
            <h1 className='z-10 absolute top-0 sm:left-20 left-16 text-sky-500'>70%</h1>
            <div style={{transform: 'rotate(50deg)', borderTopColor: isDark ? 'rgb(195, 195, 195)' : 'rgb(225, 225, 225)'}}
             className='top-0 left-0 absolute w-full h-full border-transparent border-8 rounded-full' />
            <h1 className='sm:w-20 sm:h-20 w-16 h-16 rounded-full flex items-center justify-center bg-white text-4xl text-blue-500'
             style={isDark ? {background: 'rgb(52, 52, 52)'}:null}>
              <FontAwesomeIcon icon={faJava} />
            </h1>
          </motion.div>
        </div>
        <div className='flex justify-around mb-1 mt-2'>
          <motion.h1 initial={{opacity: 0}} animate={{x: [-300, 20, 1], opacity: 1}} transition={{duration: .5, delay: .2}}
           className={isDark ? 'text-gray-400 sm:text-sm text-xs whitespace-nowrap' : 'text-gray-500 sm:text-sm text-xs whitespace-nowrap'}>
            <FontAwesomeIcon icon={faPhone} className='mr-2' />
            <i>0977-780-7521</i>
          </motion.h1>
          <motion.h1 initial={{opacity: 0}} animate={{x: [300, -20, 1], opacity: 1}} transition={{duration: .5, delay: .2}}
           className={isDark ? 'text-gray-400 sm:text-sm text-xs whitespace-nowrap' : 'text-gray-500 sm:text-sm text-xs whitespace-nowrap'}>
            <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
            <i>kulacatango@gmail.com</i>
          </motion.h1>
        </div>
        <hr />
        <motion.p animate={{y: [300, -30, 1]}} transition={{duration: .5}}
         className={isDark ? 'text-white mt-2' : 'mt-2'}>
          <span className='mr-8'/>I'm a graduate of Bachelor of Science in Information Technology.<br />
          I have a daily objective that I must meet in order to prove that I've grown or
          learned anything new. To fulfill my dreams, I am the kind of person who
          will not stop at nothing, as long as it's done well.
        </motion.p>
      </section>
    </div>
  )
}

export default About
