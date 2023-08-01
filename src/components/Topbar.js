import React from 'react'
import { lessthan, rotateleft, rotateright, threedot } from '../photos'

const Topbar = () => {
    return (
        <div className="flex md:flex-row flex-col-reverse justify-between bg-[white] rounded-tr-[18px]">
            <div className='flex gap-3'>
                <img src={lessthan} alt="BACK" className='w-[32px] l-[32px] mx-[12px] my-[10px] bg-[#e8e2e2] rounded-lg' />
                <div className='mt-[13px]'>
                    <h1 className='font-epilogue font-semibold text-[18px]'>2033 Inventory Dashboard</h1>
                </div>
            </div>
            <div className='md:flex flex-row justify-items-end '>
                <div className='flex gap-2'>
                    <img src={rotateleft} alt="" className='w-[32px] h-[32px] ml-[12px] my-[10px] bg-[#e8e2e2] rounded-lg' />
                    <img src={rotateright} alt="" className='w-[32px] l-[32px] mr-[12px] my-[10px] bg-[#e8e2e2] rounded-lg' />
                </div>
                <div className='flex gap-2'>
                    <button className='bg-[#e8e2e2] h-[32px] w-[134px] my-[10px] text-[#a222a4] rounded-lg'>Discard Changes</button>
                    <button className='bg-[#7942a1] h-[32px] w-[54px] my-[10px] text-[#f4f8f2] rounded-lg'>Save</button>
                    <img src={threedot} alt="" className='w-[32px] l-[32px] mr-[12px] my-[10px] bg-[#e8e2e2] rounded-lg' />
                </div>
            </div>
        </div>
    )
}

export default Topbar