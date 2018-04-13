import React from 'react';
import './projectCard.css';
import MenuIcon from "../atoms/IconMenu";

class CardsProject extends React.Component {
    render() {
        return(
            <ul className='container m-auto'>
                <li className='cardHeader'>
                    <h5 className='text-center text-light m-0 p-3'>Your projects</h5>
                </li>
                {
                    this.props.data.map((data, index) => {
                        if (index < 4) {
                            return (
                                <li className='projectCard' key={index}>
                                    <div className={data.avatarClass}></div>
                                    <div>
                                        <p className='projectItem m-0'>{data.title}</p>
                                        <span className='projectSite'>{data.site}</span>
                                    </div>
                                    <MenuIcon/>
                                </li>
                            )
                        }
                        return null;
                    })
                }
            </ul>
        )}
}

export default CardsProject;