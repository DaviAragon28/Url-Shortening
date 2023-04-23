import React from 'react'

export const LinkFooter = ({ title, linkOne, linkTwo, LinkThree, LinkFour = false }) => {
    return (
        <ul className='text-center flex flex-col gap-2 text-grayApp lg:text-left'>
            <li className='font-bold mb-3 text-white'>{title}</li>
            <li>{linkOne}</li>
            <li>{linkTwo}</li>
            <li>{LinkThree}</li>
            {
                LinkFour &&
                <li>Contact</li>
            }
        </ul>
    )
}
