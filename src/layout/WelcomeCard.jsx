import React from 'react'

const WelcomeCard = ({children}) => {
  return (
    <div className='w-[90%] pt-8 pb-8 pr-5 pl-5 md:w-[544px] md:pt-[50px] md:pr-[80px] md:pb-[50px] rounded-[12px] md:pl-[80px] lg:pt-[30px] lg:pb-[30px] lg:pr-[60px] lg:pl-[60px] xl:pt-[50px] xl:pr-[80px] xl:pb-[50px] xl:pl-[80px] mt-7 bg-white flex justify-center'>
        {children}
    </div>
  )
}

export default WelcomeCard