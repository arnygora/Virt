import React from 'react';
import './Select.css';

class Select extends React.Component {
    render() {
        return (
            <div>
                <span className='LabelSelect'>{this.props.label + ' : '}</span>
                <select name="select" id="select" onChange={this.props.onChange}>
                    {
                        this.props.data.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })
                    }
                </select>
            </div>
        );
    }
}
export default Select;