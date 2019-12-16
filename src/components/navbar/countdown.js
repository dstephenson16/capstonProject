import React, { Component } from 'react';
import moment from 'moment';

export default class Countdown extends Component {
    constructor(props) {
        super(props)

        this.state = {
            months: undefined,
            days: undefined,
            hours: undefined, 
            minutes: undefined, 
            seconds: undefined
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const months = countdown.format('MM')
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({ months, days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { months, days, hours, minutes, seconds } = this.state;
        return (
            <div className='countdown-wrapper'>
                <div className="countdown-item">
                    {months}
                    <span>Mos</span>
                </div>

                <div className="countdown-item">
                    {days}
                    <span>Days</span>
                </div>

                <div className="countdown-item">
                    {hours}
                    <span>Hrs</span>
                </div>

                <div className="countdown-item">
                    {minutes}
                    <span>Min</span>
                </div>

                <div className="countdown-item">
                    {seconds}
                    <span>Sec</span>
                </div>
            </div>
        )
    }
}