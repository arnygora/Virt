import React from 'react';
import {Line} from 'rc-progress';

class ProgressLineChart extends React.Component {

    render() {
        let color;
            if(this.props.data.percent <= 29) {
                color = '#fff';
            }
            if(this.props.data.percent >= 30 && this.props.data.percent <= 90) {
                color = '#2196f3';
            }
            if(this.props.data.percent > 91) {
                color = '#4caf50';
            }
        return (
            <div className='ProgressLine'>
                 <span className='Percentages'>{this.props.data.percent + '%'}</span>
                <Line percent={this.props.data.percent}
                      strokeLinecap='round'
                      trailColor='#9ea3b4'
                      strokeColor={color}
                      style={{width: '100', height: '5', borderRadius: '30px'}}
                      className='LineProgress'
                />
            </div>
        )
    }
}

export default ProgressLineChart;