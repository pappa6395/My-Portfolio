import React from 'react'

const SectionSubHeading = ({title, icon}: {title: string; icon: any}) => {

    const Icon = icon

  return (

    <div className='flex items-center justify-start'>
        <div className='flex items-center p-2 gap-2 rounded-full border'>
            <Icon className="h-4 w-4 flex-shrink-0" />
            <h2 className="text-sm font-semibold tracking-tight 
            first:mt-0 uppercase">
                {title}
            </h2>
        </div>
    </div>

  )
}

export default SectionSubHeading