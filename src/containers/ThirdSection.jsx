import React from 'react'

export const ThirdSection = () => {
    return (
        <section className='relative py-10 h-56 bg-darkViolet flex flex-col justify-center bg-[url("/images/bg-boost-mobile.svg")]  lg:bg-[url("/images/bg-boost-desktop.svg")] bg-no-repeat bg-cover'>
            <h4 className='font-bold  text-white text-2xl text-center'>
                Boost your links today
            </h4>
            <button className='flex  mx-auto bg-cyanApp text-white font-medium px-8 py-3 rounded-full mt-5'>Get Started</button>

        </section>
    )
}
