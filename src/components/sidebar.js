import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {logo, exit, mee} from '../photos'

import { navlinks } from '../constants';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (      //props that we will pass to our components
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#8855ca]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>  {/*active hone pe icon ka background grey ho jayega, aur jo jo component disabled nhi hai uspe ungli wala cursor ayega, styles prop bas logo ko style dene ka kaam kar rha hai*/}
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />     //agar active nhi hai to simply imageurl render hoga
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && `greyscale`}`} />    //agar active hai to image render kara do aur jo name active nahi hai to unko grey kardo
    )}
  </div>
)

const Sidebar = () => {
  const navigate = useNavigate();             //It will allow us to traverse to diffrent pages later on
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[95vh] ">
      
      <div className="flex-1 flex flex-col gap-4 items-center bg-[#1f1f59] rounded-l-[18px] w-[75px] py-2 ">
      <Link to="/">
        <Icon styles="w-[67px] h-[67px] bg-[#1f1f59]" imgUrl={logo} />         {/*icon component here we render icon*/}
      </Link>

        <div className="flex flex-col justify-center items-center gap-1">
          {navlinks.map((link) => (         //sabhi imported navlinks ko import kar liya aur ek ek krke map kar diya, link taking icons one by one
            <Icon                           //navlink me jo icons hai wo is component k through render kara diye
              key={link.name}               //name import kar diya
              {...link}                     //spread all the link properties like image aur route etc
              isActive={isActive}            // initially isactive isactive hai mtlb state dashboard par rahegi
              handleClick={() => {           // if someone clicks
                if(!link.disabled) {         // if it the navlink is not disabled
                  setIsActive(link.name);    //state change krdo name k corresponsing
                  navigate(link.link);       // navigate krdo link me jo link hai us page ya component pe
                }
              }}
            />
          ))}
        </div>
        <div style={{marginTop:"93px"}}>
        <img src={mee} alt="USER" className='w-[40px] h-[40px] rounded-full mx-1'/>
        <Icon styles="bg-[#1f1f59] shadow-secondary mt-2" imgUrl={exit} />
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar