import React from 'react'
import Card from './card'
import { search, triggerflow, charts, support, plus } from '../photos'
import { rightlinks } from '../constants'


const Dashboard = () => {
    return (
        <div className='flex md:flex-row flex-col-reverse justify-between bg-[white] mt-0.5 rounded-tr-[18px] gap-4'>
            <div className='flex justify-between items-center flex-col max-sm:w-[300px] h-[87vh] bg-[#ffffff]'>
                <div className='flex justify-items-end flex-col w-[300px] h-[87vh] bg-[#ffffff] mx-[20px] rounded-br-[18px] gap-3'>
                    <h2 className='font-epilogue font-semibold text-[28px] text-Black mt-2'>Project Name</h2>
                    <div className='flex flex-row border-2 border-#1f1f59-500 rounded-lg'>
                        <img src={search} alt="Search" className='w-[32px] l-[32px] mx-[2px] my-[6px] bg-[white] rounded-lg'/>
                        <input type="text" placeholder='Search' />
                    </div>
                    <hr/>
                    <div className='md:flex flex-row gap-20 '>
                        <div><h2 className='font-epilogue font-semibold text-[18px] text-Black mt-0.5'>Flows</h2></div>
                        <div><img src={plus} alt="" className='w-[18px] l-[18px] mx-[52px] my-[6px] bg-[#e8e2e2] rounded-lg '/></div>   
                    </div>
                    <hr/>
                    <div className='md:flex flex-row gap-20 '>
                        <div><h2 className='font-epilogue font-semibold text-[18px] text-Black mt-0.5'>Dashboards</h2></div>
                        <div><img src={plus} alt="" className='w-[18px] l-[18px] mx-[2px] my-[6px] bg-[#e8e2e2] rounded-lg '/></div>   
                    </div>
                    <hr/>
                    <div className='md:flex flex-row gap-20 '>
                        <div><h2 className='font-epilogue font-semibold text-[18px] text-Black mt-0.5'>Datasets</h2></div>
                        <div><img src={plus} alt="" className='w-[18px] l-[18px] mx-[28px] my-[6px] bg-[#e8e2e2] rounded-lg '/></div>   
                    </div>
                    <hr/>
                    <div className='md:flex flex-row gap-20 '>
                        <div><h2 className='font-epilogue font-semibold text-[18px] text-Black mt-0.5'>Connectors</h2></div>
                        <div><img src={plus} alt="" className='w-[18px] l-[18px] mx-[6px] my-[6px] bg-[#e8e2e2] rounded-lg '/></div>   
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-center items-center bg-[#e8e2e2] gap-6'>
                <div><Card /></div>
                <div><Card /></div>
                <div><Card /></div>
                <div><Card /></div>
            </div>
            <div className='flex justify-items-end items-center flex-col w-[300px] h-[87vh] bg-[#ffffff] mx-[0px] rounded-br-[18px] gap-3'>
                <div className='flex flex-row justify-self-auto mt-7  h-[25px]'>
                    <div className='bg-[#1f1f59] text-[white] h-[45px] w-[135px] rounded-l-[10px] flex'>
                        <img src={triggerflow} alt="Trigger Flow" className='w-[32px] l-[32px] mx-[2px] my-[6px] bg-[#1f1f59] rounded-lg' />
                        <button className='text-white'>Components</button>
                    </div>
                    <div className='bg-[#e8e2e2] text-[black] h-[45px] w-[135px] rounded-r-[10px] flex'>
                        <img src={charts} alt="Charts" className='w-[32px] l-[32px] mx-[2px] my-[6px] bg-[#e8e2e2] rounded-lg' />
                        <button className='text-black' >Charts</button>
                    </div>
                </div>
                <div className={``}>        {/*agar toggledrawer true hai yo 100vh me dikhao li ko nahi to mat dikhao*/}
                    <ul className="mb-4 mt-8">
                        {rightlinks.map((link) => (                   //navlinks ko small screen me sidebar ki jagah hamburger menu me render karaya one by one
                            <li
                                key={link.name}
                                className={`flex p-1 w-[270px] bg-[white] m-2 border-2 border-#1f1f59-500 rounded-lg`}
                            >
                                <img
                                    src={link.imgUrl}                //image har ek icon ki render ho jayegi
                                    alt={link.name}
                                    className={`w-[24px] h-[24px] object-contain `}      //icon para active hone par grey rahega atherwise nahin rahega
                                />
                                <p className={`ml-[20px] font-epilogue font-semibold text-[4px]'}`}>              {/*agar icon para active hai to wo green dikhega nahi to grey*/}
                                    {link.name}                     {/*har icon k samne uska name bhi a jayega ho jayega*/}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <img src={support} alt="Support" className='bg-[#8855ca] w-[38px] l-[38px] mx-[2px] my-[6px] rounded-full flex item-end' />
            </div>
        </div>
    )
}

export default Dashboard