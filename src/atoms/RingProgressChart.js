import React from 'react';
import {Circle} from 'rc-progress';
import './ringProgress.css';

class ProgressRingChart extends React.Component {
    render() {
        return (
            <li className='homeChart'>
                <div className="ProgressRing">
                    <Circle percent={this.props.data.percent} strokeWidth="6" strokeColor={this.props.data.color}
                            trailWidth="6" trailColor="#dbdce7" gapPosition="top" title='45'
                            style={{width: '60', height: '60'}}/>
                    <span className="Percentage"
                       style={{color: 'var(--cyan)'}}>{this.props.data.percent + "%"}</span>
                </div>
                <div className="Info">
                    <p className="counter m-0">
                        {this.props.data.counter}
                    </p>
                    <p className="categoryName m-0">
                        {this.props.data.category}
                    </p>
                </div>
            </li>
        )
    }
}

export default ProgressRingChart;