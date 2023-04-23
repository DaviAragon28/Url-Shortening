import React from 'react'

export const FirstSection = () => {
    return (
        <section className='pb-36 lg:flex lg:flex-row-reverse lg:justify-between lg:mt-10 lg:gap-x-4  lg:px-24 xl:px-36 lg:pb-48'>
            <img className='mx-auto md:w-[500px] lg:mx-0 xl:w-[600px] ' src="/images/illustration-working.svg" alt="illustration-working" />
            <div className='text-center mt-10 px-2 flex flex-col gap-5 md:mt-16 lg:text-left lg:w-1/2 lg:px-0'>
                <h1 className='text-4xl font-bold xl:text-6xl  '>More than just shorter links</h1>
                <p className='text-grayishViolet px-7 max-w-md mx-auto lg:mx-0 lg:px-0'>Build your brand’s recognition and get detailed insights
                    on how your links are performing.</p>
                <button className='w-max mx-auto bg-cyanApp text-white font-bold text-lg px-10 py-3 rounded-full mt-5 lg:mx-0'>Get Started</button>
            </div>
        </section>
    )
}
