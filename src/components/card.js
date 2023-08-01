import React from 'react'
import { threedots, filter, barimg } from '../photos'

const card = ({ title }) => {
    return (
        <div className='sm:w-[280px] w-full rounded-lg bg-[#ffffff] cursor-pointer mx-[20px] my-[20px]'>

            <div className='md:flex flex-row justify-items-end'>
                <div className='flex'><h2 className='font-epilogue font-semibold text-[18px] text-Black text-left mt-[12px]'>Filter</h2></div>
                <div style={{ display: "flex" }}>
                    <img src={filter} alt="FILTER" className='w-[32px] h-[32px] ml-[12px] my-[10px] bg-[#e8e2e2] rounded-lg' />
                    <img src={threedots} alt="SEE" className='w-[32px] h-[32px] ml-[12px] my-[10px] bg-[#e8e2e2] rounded-lg' />
                </div>
            </div>
            <div>
                <img src={barimg} alt="" />
            </div>
        </div>
    )
}

export default card