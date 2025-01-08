import React from 'react'

const SectionHeading = ({ title }: {title: string;}) => {


  return (

    <div>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {title}
        </h2>
    </div>

  )
}

export default SectionHeading