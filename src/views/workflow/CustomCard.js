import React from 'react';
import DropdownMenu from './DropdownMenu';

import './CustomCard.css'

const CustomCard = data => {
       return (
        <div className='CardItem'>
            <div className={data.avatarClass}></div>
                <div className='CardContent'>
                    <h6 className='CardTask'>{data.subTitle}</h6>
                    <p className='text-secondary m-0'>{data.site} * <span className='Currency' >{data.price}</span></p>
                </div>
            <DropdownMenu/>
        </div>
    )
};

export default CustomCard;