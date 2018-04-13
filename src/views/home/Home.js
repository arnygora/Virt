import React from 'react';
import Select from '../../atoms/Select'
import ReactHighcharts from 'react-highcharts';
import Calendar from '../../modules/calendar';
import ProjectCards from '../../modules/ProjectCards';
import InboxCard from '../../modules/InboxCard';
import ProgressRingChart from '../../atoms/RingProgressChart';

import './home.css';

//config
import homeMainChart from '../../config/homeMainChart.config'
import ringProgressData from '../../config/ringProgressData'
import SalesChart from '../../config/homeSalesData.config'
import projectsData from '../../config/usersData';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ReportData: []
        }
    }

    componentWillMount() {
        fetch('/api/user/saleReport/year', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'get'
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    ReportData: res
                });
                let chart = this.refs.SalesReport.getChart();
                chart.series[0].setData(this.state.ReportData, true);
            })
        }

    filterReport = (e) => {
        if (e.target.value === "Year") {
            fetch('/api/user/saleReport/year', {
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        ReportData: res
                    });
                    let chart = this.refs.SalesReport.getChart();
                    chart.series[0].setData(this.state.ReportData, true);
                })
        } else if (e.target.value === "Week") {
            fetch('/api/user/saleReport/week', {
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        ReportData: res
                    });
                    let chart = this.refs.SalesReport.getChart();
                    chart.series[0].setData(this.state.ReportData, true);
                })
        } else if (e.target.value === "Month") {
            fetch('/api/user/saleReport/month', {
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        ReportData: res
                    });
                    let chart = this.refs.SalesReport.getChart();
                    chart.series[0].setData(this.state.ReportData, true);
            })
        }
    };

    render() {
        let dataSelect = ['Year', 'Week', 'Month'];
        let label = ['Period'];
        return (
            <div>
                <section>
                    <div className='row wrapper'>
                        <div className='col-12 col-md-8 col-xl-9 p-0 statisticBox'>
                            <div>
                                <ul className='d-flex flex-wrap mt-3'>
                                    {
                                        ringProgressData.map(item => {
                                            return (
                                                <ProgressRingChart data={item} key={item.id}/>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <ReactHighcharts config={homeMainChart}></ReactHighcharts>
                        </div>
                        <div className='col-12 col-md-4 col-xl-3'>
                            <ProjectCards data={projectsData} key={projectsData.id}/>
                        </div>
                    </div>
                    <div className='row wrapper'>
                        <div className='col-12 col-md-offset col-xl-6 p-0'>
                            <div className='sales'>
                                <div className='SalesHeader'>
                                    <h3>Sales report</h3>
                                    <Select data={dataSelect} label={label} onChange={this.filterReport}>
                                    </Select>
                                </div>
                                <ReactHighcharts config={SalesChart} ref='SalesReport'></ReactHighcharts>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-7 col-xl-3'>
                            <InboxCard data={projectsData}/>
                        </div>
                        <div className='col-12 col-sm-6 col-md-5 col-xl-3'>
                            <Calendar/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;