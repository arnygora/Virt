import React from 'react';
import ProgressLineChart from '../../atoms/LineProgressChart';
import Select from '../../atoms/Select';

import './projectList.css';

//config
import projectData from '../../config/usersData';
import UserCard from "./UserCard";

class ProjectsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayData: projectData
            // color: ''
        }
    }

    companyFilter = (e) => {
        let company = e.target.value;
        if (company === 'Symo.com') {
            this.setState({
                displayData: projectData.filter((e) => {
                    return e.site === 'symo.com'
                })
            })
        }
        if (company === 'Microsoft') {
            this.setState({
                displayData: projectData.filter((e) => {
                    return e.site === 'microsoft'
                })
            })
        }
        if (company === 'Google') {
            this.setState({
                displayData: projectData.filter((e) => {
                    return e.site === 'google.com'
                })
            })
        }
        if (company === 'Facebook') {
            this.setState({
                displayData: projectData.filter((e) => {
                    return e.site === 'facebook.com'
                })
            })
        }
        if (company === 'All') {
            this.setState({
                displayData: projectData,
            })
        }
    };

    render() {
        let dataSelect = [ 'All', 'Symo.com', 'Microsoft', 'Google', 'Facebook' ],
            label = ['Show projects'];

        this.state.displayData.forEach(item => {
            if( item.percent <= 30) {
                 item.color = '#fff'}

            if( item.percent >= 31 && item.percent <= 90) {
                 item.color = '#2196f3'}

            if( item.percent > 91) {
                item.color = '#62ff20'}
        });

        return (
            <section>
                <div className="ProjectsHeader">
                    <p className='text-dark m-0'>All projects ({this.state.displayData.length})<span
                        className='text-light font-weight-bold pl-5'>Workflow</span></p>
                    <Select data={dataSelect} label={label} onChange={this.companyFilter}>
                    </Select>
                </div>
                    <ul className='TableHeaders'>
                        <li>Project title</li>
                        <li>Value</li>
                        <li>Deadline</li>
                        <li>Time spent</li>
                        <li>Progress</li>
                        <li>Assigned to</li>
                    </ul>
                    <ul className='ProjectsList'>
                        {
                            this.state.displayData.map((item, index) => {
                                if (index < 6) {
                                    return (
                                        <li className='ProjectItem p-3 mb-4' key={item.id}
                                            style={{borderLeft: '5px solid', borderColor: item.color}}>
                                            <div className='col-2 col-md-2 col-lg-2'>
                                                <p className='ProjectTitle m-0'>{item.task}
                                                    <span className='d-block text-secondary'>{item.site}</span>
                                                </p>
                                            </div>
                                            <div className='col-2 col-md-2 col-lg-1'>
                                                <p className='ProjectValue m-0'>{item.projectPrice}</p>
                                            </div>
                                            <div className='col-lg-2 Deadline'>
                                                <p className='m-0'>{item.projectDeadline}</p>
                                            </div>
                                            <div className='col-1 col-md-1 col-lg-1'><span>{item.description}</span></div>
                                            <div className='col-lg-1 SpentTime'>
                                                <span>{item.timeSpent}</span>
                                            </div>
                                            <div className='col-3 col-md-3 col-lg-2 '>
                                                <ProgressLineChart data={item} key={item.id}/>
                                            </div>
                                            <div className='col-offset m-auto col-md-4 col-lg-3 UserCard'>
                                                <UserCard data={item} key={item.id}/>
                                            </div>
                                        </li>
                                    )
                                }
                                return null;
                            })
                        }
                    </ul>
                </section>
            )
        }
    }

export default ProjectsList;