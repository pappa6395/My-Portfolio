import React from 'react'
import { GiGears } from 'react-icons/gi'
import SectionSubHeading from './SectionSubHeading'
import SectionHeading from './SectionHeading'
import ToolDetails from './toolDetails'

const ToolsStack = () => {

  return (

    <div className='ralative bg-slate-50 dark:bg-slate-900
    rounded-tr-2xl px-8'>
        <div className='space-y-2'>
            <SectionSubHeading title={"Tool Skills"} icon={GiGears}/>
            <SectionHeading title={"Tools Stack"}/>
        </div>
        
        <div>
          <h3>Back-End Proficiency</h3>
          <p className='text-base py-3'>
          With hands-on experience in server-side programming and database management,
          I build secure, scalable systems using
          </p>
          <ul>Node.js and Express.js: Creating robust APIs and server-side logic.</ul>
          <ul>SQL and NoSQL Databases: Designing efficient schemas and optimizing data flow (PostgreSQL, Firebase).</ul>
          <ul>Authentication: Implementing secure login/signup flows using Firebase and third-party OAuth services.</ul>
            <ToolDetails />
        </div>
    </div>

  )
}

export default ToolsStack