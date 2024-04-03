import React from 'react'
import { READY_TO_CONNECT_MESSAGE } from '../constants';
import Skills from './Skills';

const AboutMe: React.FC = () => {
    return (
        <section className="px-10 lg:px-32">
          <div>
            <h3 className="div-h1">ABOUT ME</h3>
            <p className="text-center text-md text-gray-500 max-w-5xl lg:max-w-2xl mx-auto lg:text-center">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-16 font-serif">
              <div>
                <h3 className="text-xl text-gray-500 font-bold">
                  Get to know me!
                </h3>
                <p className="text-gray-600 mt-5 lg:text-lg">
                I am an accomplished self-taught MERN Full Stack Developer, equipped with a robust foundation in MERN technology stack. Delve into the Projects section to witness the caliber of my work and the innovative solutions I bring to fruition.
                </p>
                <p className="text-gray-600 mt-5 lg:text-lg">
                  {READY_TO_CONNECT_MESSAGE}
                </p>
                <a href="#contact">
                  <div className="flex items-center button-style my-6 w-fit hover:scale-95   duration-500">
                    <p>Contact Me</p>
                  </div>
                </a>
              </div>
              <Skills />
            </div>
          </div>
        </section>
    )
}

export default AboutMe