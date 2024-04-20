import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hour = time.getHours() % 12 || 12; // 0시는 12로 표시
    const minute = time.getMinutes();
    const second = time.getSeconds();

    const degHour = ((hour * 30) + (minute * (360 / 12 / 60))) + 270;
    const degMinute = (minute * 6) + 270;
    const degSecond = (second * 6) + 270;

    return (
        <div className="clock">
            <div id="center"></div>
            <div id="hour" style={{ transform: `rotate(${degHour}deg)` }}>
                {`${hour}`.padEnd(14, ` ${hour}`)}
            </div>
            <div id="min" style={{ transform: `rotate(${degMinute}deg)` }}>
                {`${minute}`.padEnd(20, ` ${minute}`)}
            </div>
            <div id="sec" style={{ transform: `rotate(${degSecond}deg)` }}>
                {`${second}`.padEnd(26, ` ${second}`)}
            </div>
        </div>
    );
};

export default Clock;
