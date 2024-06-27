import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaCartPlus, FaPaperPlane } from 'react-icons/fa'



const Data = [
{
title: 'Home',
path: '/',
icon: <AiFillHome/>,
className: 'nav-text'
},
{
title: 'Product',
path: '/product',
icon: <FaCartPlus/>,
className: 'nav-text'
},
{
title: 'Images',
path: '/image',
icon: <FaPaperPlane/>,
className: 'nav-text'
}
]
export default Data;
