import React, { useEffect, useState } from 'react'

const LocalTime = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(()=> setTime(new Date()), 1000)
    }, [])

    console.log(time)


  return (
    <div className='pt-2 font-medium text-md text-gray-500'>
      <p>⏰ ‎ ‎ {time.toLocaleTimeString()}</p>
    </div>
  )
}

export default LocalTime
