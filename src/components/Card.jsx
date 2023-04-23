import React from 'react'

export const Card = ({ image, title, desc, show = true, classElement }) => {
    return (
        <div className={`bg-white mt-20  max-w-md mx-auto rounded-md px-7 pb-10 relative ${classElement} lg:h-[310px] xl:h-[260px]`}>
            <div className='absolute flex items-center justify-center -top-9 mx-auto left-0 right-0 bg-darkViolet w-20 h-20 rounded-full lg:right-32 xl:right-56'>
                <img src={image} alt="con-brand-recognition" />
            </div>
            <div className='flex flex-col gap-4 pt-16 text-center lg:text-left'>
                <h3 className='text-2xl font-bold'>{title}</h3>
                <p className='text-grayishViolet text-[15px]'>{desc}</p>
            </div>
            {
                show &&
                <div className='w-2 bg-cyanApp absolute h-14 -bottom-14 left-0 right-0 mx-auto lg:left-[100%] lg:top-0 lg:bottom-0 lg:my-auto lg:w-28 lg:h-2'></div>
            }
        </div>
    )
}
