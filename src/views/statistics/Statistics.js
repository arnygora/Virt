import React from 'react';
import ReactHighcharts from 'react-highcharts';
import ProgressRingChart from '../../atoms/RingProgressChart';
import Select from '../../atoms/Select';
import SortTable from '../../modules/SortTable';

//config
import homeMainChart from '../../config/homeMainChart.config';
import ringProgressData from '../../config/ringProgressData';
import './statistics.css';

class Statistics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            PeriodData: []
        }
    }

    filterReport = (e) => {
        console.log(e);
        if (e.target.value === "Year") {
            fetch('/api/user/areasplineData/year', {
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    this.setState({
                        PeriodData: res
                    });
                    let chart = this.refs.areaspline.getChart();
                    chart.series[0].setData(this.state.PeriodData, true);
                })
        } else if (e.target.value === "Week") {
            fetch('/api/user/areasplineData/week', {
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    this.setState({
                        PeriodData: res
                    });
                    let chart = this.refs.areaspline.getChart();
                    chart.series[0].setData(this.state.PeriodData, true);
                })
        } else if (e.target.value === "Month") {
            fetch('/api/user/areasplineData/month', {
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    this.setState({
                        PeriodData: res
                    });
                    let chart = this.refs.areaspline.getChart();
                    chart.series[0].setData(this.state.PeriodData, true);
                })
            }
        };

    render() {
        let dataSelect = ['Year', 'Week', 'Month'],
            label = 'Show';
        return (
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 StatisticUsersBox'>
                            <div className='RingsStatistics'>
                                <ul className='d-flex flex-wrap mt-3'>
                                    {
                                        ringProgressData.map(item => {
                                            return (
                                                <ProgressRingChart data={item} key={item.id}/>
                                            )
                                        })
                                    }
                                </ul>
                                <div>
                                    <Select data={dataSelect} label={label} onChange={this.filterReport}/>
                                </div>
                            </div>
                            <ReactHighcharts config={homeMainChart} ref='areaspline'></ReactHighcharts>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <SortTable/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Statistics;