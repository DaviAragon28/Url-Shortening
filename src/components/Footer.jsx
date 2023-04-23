import React from 'react'
import { LinksFooter } from '../containers/LinksFooter'

export const Footer = () => {
  return (
    <footer className='flex flex-col gap-10 bg-veryDarkViolet py-14 items-center lg:flex-row lg:justify-center lg:gap-x-20 lg:items-start'>
        <img className='w-32' src="/images/logo-footer.svg" alt="" />
        <LinksFooter />
        <div className='flex gap-4'>
            <img src="/images/icon-facebook.svg" alt="" />
            <img src="/images/icon-twitter.svg" alt="" />
            <img src="/images/icon-pinterest.svg" alt="" />
            <img src="/images/icon-instagram.svg" alt="" />
        </div>
    </footer>
  )
}
