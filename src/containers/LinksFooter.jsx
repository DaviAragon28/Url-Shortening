import React from 'react'
import { LinkFooter } from '../components/LinkFooter'

export const LinksFooter = () => {
  return (
    <>
        <LinkFooter 
            title='Features'
            linkOne='Link Shortening'
            linkTwo='Branded Links'
            LinkThree='Analytics'
            />
        <LinkFooter 
            title='Resources'
            linkOne='Blog'
            linkTwo='Developers'
            LinkThree='Support'
            />
        <LinkFooter 
            title='Company'
            linkOne='About'
            linkTwo='Our Team'
            LinkThree='Careers'
            LinkFour={true}
        />
    </>
  )
}
