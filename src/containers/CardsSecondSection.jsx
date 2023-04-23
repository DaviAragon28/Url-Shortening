import React from 'react'
import { Card } from '../components/Card'

export const CardsSecondSection = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:gap-x-10 lg:justify-center lg:item '>
      <Card
        image='/images/icon-brand-recognition.svg'
        title='Brand Recognition'
        desc='Boost your brand recognition with each click. Generic links don’t
        mean a thing. Branded links help instil confidence in your content.'
      />
      <Card
        image='/images/icon-detailed-records.svg'
        title='Detailed Records'
        desc='Gain insights into who is clicking your links. Knowing when and where 
        people engage with your content helps inform better decisions.'
        classElement='lg:mt-28'
        />
      <Card
        image='/images/icon-fully-customizable.svg'
        title='Fully Customizable'
        desc='Improve brand awareness and content discoverability through customizable 
        links, supercharging audience engagement.'
        show={false}
        classElement='lg:mt-36'
      />
    </div>
  )
}
