import React, { ReactNode } from 'react'

const DashboardLayout = ({children}: {children: ReactNode}) => {


    return (

        <div>
            <h1>Dashboard Layout</h1>
            {children}
        </div>
        
    )

}

export default DashboardLayout