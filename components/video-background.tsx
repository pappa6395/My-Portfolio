"use client"
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import React from 'react'


const VideoBackground = () => {

    const { theme } = useTheme()
    const [isHydrated, setIhydrated] = React.useState(false);

    const videos = {
        dark: "/video/dark.mp4", 
        light: "/video/light.mp4"
    }

    React.useEffect(() => {
        setIhydrated(true)
    },[])

  return (

    <div className="fixed w-[430px] sm:w-[760px] md:w-[1030px] lg:w-full h-full max-w-full rounded-lg -z-50
          dark:border-gray-700 top-0 left-0 overflow-hidden">
        {isHydrated ? (
            <>
                <video 
                    className={cn(
                        "absolute w-full h-screen max-w-full object-center object-cover transition-all",
                        theme==="dark"&&"opacity-0 invisible")} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                >
                <source src={videos.light} type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
                <video 
                    className={cn(
                        "absolute w-full h-screen max-w-full object-center object-cover transition-all",
                        theme==="light"&&"opacity-0 invisible")}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                >
                <source src={videos.dark} type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
            </>
        ) : (
            <div className="absolute w-full h-screen max-w-full object-center object-cover bg-gray-900" />
        )}
        
    </div>

  )
}

export default VideoBackground