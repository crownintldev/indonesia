import React from 'react'
import Image from 'next/image'
const Header = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex flex-col justify-between '>
                <h1 className=' text-[10px]  text-center font-bold'>
                    CONSULATE GENERAL<br />
                    THE REPUBLIC OF INDONESIA <br />
                    KARACHI -PAKISTAN
                </h1>
            </div>
            <div className='font-bold text-center flex flex-col items-center justify-center'>
                <Image src={"/eagle.png"}
                    width={60}
                    height={60}
                    alt='eagle'
                />

            </div>
            <div className='text-[7px] font-bold'>
                <p className='space-x-1'>
                    <span>Phone</span>
                    <span>:92(51) 2832017-20</span>
                </p>
                <p className='space-x-1'>
                    <span>Fax</span>
                    <span>:92(51) 2832017-20</span>
                </p>
                <p className='space-x-1'>
                    <span>Web</span>
                    <span>:https://kemiu.go.id/islamabad</span>
                </p>
                <p className='space-x-1'>
                    <span>Email</span>
                    <span>:info@indonesian-embassy.pk</span>
                </p>
                <p className='space-x-1'>
                    <span>Address</span>
                    <span>:Diplomatic Enclave I, Street 5 <br /> G-5, Islamabad</span>
                </p>
            </div>
        </div>
    )
}

export default Header