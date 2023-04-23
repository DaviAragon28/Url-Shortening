import CopyToClipboard from "react-copy-to-clipboard"
import toast, { Toaster } from 'react-hot-toast';

export const ShortenLink = ({ originalLink, shortLink }) => {
    return (
        <>
            <div className='max-w-3xl flex flex-col gap-3 py-3
              mx-auto bg-white  rounded-md mb-10 lg:grid lg:grid-cols-4 lg:items-center lg:px-5 lg:w-full lg:max-w-none'>
                <p className='px-3 border-b pb-3 col-start-1 col-span-2  truncate ... lg:p-0 lg:border-0'>{originalLink}</p>
                <div className='flex flex-col px-3 gap-2 lg:flex-row lg:items-center lg:px-0 lg:gap-4'>
                    <p className='text-cyanApp f'>{shortLink}</p>
                </div>
                <CopyToClipboard text={shortLink}>

                    <button onClick={() => toast.success('Link copied to clipboard!', {
                        position: 'bottom-right', className: 'border-2 border-green-400 '
                    })} className='bg-cyanApp py-2 rounded-md lg:px-5 mx-2 text-white'>Copy</button>

                </CopyToClipboard >
            </div>

            <Toaster />
        </>
    )
}
