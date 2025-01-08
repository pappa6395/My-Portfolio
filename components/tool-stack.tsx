import React from 'react'
import { GiGears } from 'react-icons/gi'
import SectionSubHeading from './SectionSubHeading'
import SectionHeading from './SectionHeading'
import ToolDetails from './toolDetails'

const ToolsStack = () => {

  return (

    <div className='ralative bg-slate-50 dark:bg-slate-900
    rounded-tr-2xl px-8 py-16'>
        <div className='space-y-2'>
            <SectionSubHeading title={"Tool Skills"} icon={GiGears}/>
            <SectionHeading title={"Tool Stack"}/>
        </div>
        
        <div>
            <ToolDetails />
        </div>
    </div>

  )
}

export default ToolsStack