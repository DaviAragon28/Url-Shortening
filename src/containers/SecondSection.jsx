import React, { useState } from 'react'

import { CardsSecondSection } from './CardsSecondSection'
import { ShortenLink } from '../components/ShortenLink'

export const SecondSection = () => {

    const [shortenLinks, setShortenLinks] = useState([])
    const [value, setValue] = useState('')


    const onHandleInput = (e) => {
        setValue(e.target.value)
    }

    const onHandleButton = async (link) => {
        const get = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        const response = await get.json()
        setShortenLinks([...shortenLinks, response])
    }


    return (
        <section className='relative py-24 pt-32 bg-[#f0f1f6] px-7 lg:px-24 xl:px-36'>
            <div className='absolute max-w-4xl left-0 right-0 mx-auto -top-16  lg:w-full lg:max-w-none  '>
                <div  className='flex flex-col gap-3  p-7 mx-7 bg-darkViolet rounded-xl lg:flex-row lg:mx-24 xl:mx-36 bg-[url("/images/bg-boost-mobile.svg")] lg:bg-[url("/images/bg-boost-desktop.svg")]'>
                    <input onChange={onHandleInput} className='w-full py-3 px-4 rounded-lg lg:w-[75%]' type="text" placeholder='Shorten a link here...' />
                    <button onClick={() => onHandleButton(value)} className=' bg-cyanApp w-full text-white text-lg  font-medium px-8 py-3 rounded-lg lg:flex-1'>Shorten it!</button>

                </div>
            </div>
            {
                shortenLinks.length > 0 && shortenLinks.map(({ ok, result }) => (
                    <ShortenLink key={result.code} originalLink={result.original_link} shortLink={result.full_short_link} />
                ))
            }

            <div className='flex flex-col gap-5 lg:mt-20'>
                <h2 className='font-bold text-center text-2xl lg:text-4xl'>Advanced Statistics</h2>
                <p className='text-grayishViolet text-center max-w-md mx-auto '>
                    Track how your links are performing across the web with our
                    advanced statistics dashboard.
                </p>
            </div>
            <CardsSecondSection />
        </section>
    )
}
