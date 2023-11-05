import { faGithub, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { NOTEPICS, SOCIALPICS } from '../data/data'
import NotePics from '../components/notePics'
import SocialPics from '../components/socialPics'
import {MyContext} from '../components/myContext'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Projects = () => {
  const {isDark} = useContext(MyContext)
  const [isViewNote, setIsViewNote] = useState(false)
  const [isViewMed, setIsViewMed] = useState(false)
  const [isGoSocial, setIsGoSocial] = useState(true)
  const [isGoNote, setIsGoNote] = useState(true)
  const parStyle = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box'
  }

  const socialViewCode = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to view the code",
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Yes'
    }).then(res => {
      if (res.isConfirmed) {
        Swal.fire('Successful', 'Click continue to proceed', 'success')
        setIsGoSocial(false)
      } else if (res.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Successfully cancelled', 'success')
      }
    })
  }
  const noteViewCode = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to view the code",
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Yes'
    }).then(res => {
      if (res.isConfirmed) {
        Swal.fire('Successful', 'Click continue to proceed', 'success')
        setIsGoNote(false)
      } else if (res.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Successfully cancelled', 'success')
      }
    })
  }

  return (
    <div className='flex md:items-center justify-center items-start h-screen sm:px-10 px-2 overflow-auto' style={isDark ? {background: 'rgb(52, 52, 52)'}:null}>
      <div className='flex flex-col md:flex-row gap-4 md:justify-evenly justify-center md:items-start'>
        {/* for note app */}
        <motion.div animate={{scale: [0, 1.1, 1]}} transition={{duration: .5}}
         className='md:w-2/5 w-full mt-20 md:mt-10 shadow-xl shadow-gray-500 rounded-3xl pb-3'
         style={isDark ? {background: 'rgb(62, 62, 62)'}:null}>
          <motion.h1 animate={{scale: [1.2, .9,1]}} transition={{duration: .5, delay: .5}}
           className='text-center text-2xl mb-3 font-semibold text-gray-700' style={isDark ? {color: 'white'}:null}>
            Note App
          </motion.h1>
          <div className='h-64 w-full'>
            <NotePics pics={NOTEPICS} /> 
          </div>
          <div className='flex justify-between items-center px-5 py-3'>
            <motion.div animate={{x: [80, -20, 1], opacity: [0, 1]}} transition={{duration: .5, delay: .3}}
             className='flex items-center gap-2'>
              <img src={`https://www.svgrepo.com/show/303251/mysql-logo.svg`} alt='pic' className='w-7 border border-blue-800 rounded-xl' />
              <span className='px-1.5 pt-1 pb-1.5 bg-gray-800 text-white rounded-full text-xs'>EX</span>
              <FontAwesomeIcon icon={faReact} className='text-2xl text-cyan-600' />
              <FontAwesomeIcon icon={faNodeJs} className={isDark ? 'text-2xl text-green-600' : 'text-2xl text-green-700'} />
            </motion.div>
            {isGoNote ? (
              <motion.div animate={{x: [-80, 20, 1], opacity: [0, 1]}} transition={{duration: .5, delay: .3}}
               onClick={noteViewCode} className='flex items-end cursor-pointer'>
                <h1 className={isDark ? 'text-gray-400 sm:mr-2 mr-1 text-sm' : 'text-gray-500 sm:mr-2 mr-1 text-sm'}><i>View Code</i></h1>
                <FontAwesomeIcon icon={faGithub} className={isDark ? 'sm:text-2xl text-xl text-gray-300' : 'sm:text-2xl text-xl text-gray-800'} />
              </motion.div>
            ) : (
              <div className='flex items-center'>
                <Link to='https://github.com/kjm-lacatango/note-app'
                 className='bg-blue-700 mr-1 text-white py-1 px-1.5 rounded-2xl hover:bg-blue-900 duration-200 sm:text-sm text-xs'>Continue</Link>
                <button onClick={() => setIsGoNote(true)} className='bg-gray-500 px-2 text-white rounded-full hover:bg-red-700 duration-200'>X</button>
              </div>
            )}
          </div>
          <div style={isViewNote ? null : parStyle} onClick={() => setIsViewNote(prev => !prev)} className='cursor-pointer px-4'>
            <p className={isDark ? 'mb-1 text-white' : 'mb-1'}>
              Before using this project, you must first create an account.
              I added a login form so that there would be some privacy since this is
              where you would enter your confidential information.
            </p>
            <hr />
            <h1 className='mt-2 font-semibold text-gray-700' style={isDark ? {color: 'lightgray'}:null}>Frontend Tools</h1>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>axios, sweatalert2, react-router-dom, framer-motion, fontawesome</p>
            <h1 className='mt-2 font-semibold text-gray-700' style={isDark ? {color: 'lightgray'}:null}>Backend Tools</h1>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>nodemon, multer, path, bcryptjs, cors</p>
          </div>
        </motion.div>

        {/* for social media app */}
        <motion.div animate={{scale: [0, 1.1, 1]}} transition={{duration: .5}}
         className='md:w-2/5 w-full my-20 md:my-10 shadow-xl shadow-gray-500 rounded-3xl pb-3' 
         style={isDark ? {background: 'rgb(62, 62, 62)'}:null}>
          <motion.h1 animate={{scale: [1.2, .9,1]}} transition={{duration: .5, delay: .5}}
           className='text-center text-2xl mb-3 font-semibold text-gray-700' style={isDark ? {color: 'white'}:null}>
            Social Media App
          </motion.h1>
          <div className='h-64 w-full'>
            <SocialPics pics={SOCIALPICS} />
          </div>
          <div className='flex justify-between items-center px-5 py-3'>
            <motion.div  animate={{x: [80, -20, 1], opacity: [0, 1]}} transition={{duration: .5, delay: .3}}
             className='flex items-center gap-2'>
              <img src={`https://www.svgrepo.com/show/303251/mysql-logo.svg`} alt='pic' className='w-7 border border-blue-800 rounded-xl' />
              <span className='px-1.5 pt-1 pb-1.5 bg-gray-800 text-white rounded-full text-xs'>EX</span>
              <FontAwesomeIcon icon={faReact} className='text-2xl text-cyan-600' />
              <FontAwesomeIcon icon={faNodeJs} className={isDark ? 'text-2xl text-green-600' : 'text-2xl text-green-700'} />
            </motion.div>
            {isGoSocial ? (
              <motion.div animate={{x: [-80, 20, 1], opacity: [0, 1]}} transition={{duration: .5, delay: .3}}
                onClick={socialViewCode} className='flex items-end cursor-pointer'>
                <h1 className={isDark ? 'text-gray-400 sm:mr-2 mr-1 text-sm' : 'text-gray-500 sm:mr-2 mr-1 text-sm'}><i>View Code</i></h1>
                <FontAwesomeIcon icon={faGithub} className={isDark ? 'sm:text-2xl text-xl text-gray-300' : 'sm:text-2xl text-xl text-gray-800'} />
              </motion.div>
            ) : (
              <div className='flex items-center'>
                <Link to='https://github.com/kjm-lacatango/kjm-socialMedia-app'
                  className='bg-blue-700 mr-1 text-white py-1 px-1.5 rounded-2xl hover:bg-blue-900 duration-200 sm:text-sm text-xs'>Continue</Link>
                <button onClick={() => setIsGoSocial(true)} className='bg-gray-500 px-2 text-white rounded-full hover:bg-red-700 duration-200'>X</button>
              </div>
            )}
          </div>
          <div style={isViewMed ? null : parStyle} onClick={() => setIsViewMed(prev => !prev)} className='cursor-pointer px-4'>
            <p className={isDark ? 'mb-1 text-white' : 'mb-1'}>
              You may do it here too, just like on other social media platform.
              You must first register in order to utilize it.
            </p>
            <hr />
            <h1 className='mt-2 font-semibold text-gray-700' style={isDark ? {color: 'lightgray'}:null}>Frontend Tools</h1>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>axios, sweatalert2, react-router-dom, moment, tailwindcss, react-query, fontawesome</p>
            <h1 className='mt-2 font-semibold text-gray-700' style={isDark ? {color: 'lightgray'}:null}>Backend Tools</h1>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>nodemon, multer, path, bcryptjs, jsonwebtoken, moment, cors, cookie-parser</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
