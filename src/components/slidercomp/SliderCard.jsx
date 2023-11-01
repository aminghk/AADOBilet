import React from 'react'

const SliderCard = ({ img }) => {
    return (
        <div className='artist-card relative transition-{flex} duration-500 ease hover:flex-[0.85] cursor-pointer h-[380px] flex-[0.33] md:flex-[0.25] rounded-md overflow-hidden object-cover -skew-x-[6deg]'>
            <img className='w-full h-full object-cover object-top' src={img} alt="" />
            <div className='bg-gray-200 rounded-md p-4 absolute bottom-1 left-1 opacity-0 me-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, alias.</div>
        </div>
    )
}

export default SliderCard