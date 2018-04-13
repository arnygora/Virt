import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

class SimpleCalendar extends Component {
    state = {
        date: new Date(),
    };

    onChange = date => this.setState({ date });

    render() {
        return (
            <div>
                <Calendar
                    className={'calendar'}
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        );
    }
}

export default SimpleCalendar;