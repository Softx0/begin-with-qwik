import { component$, useClientEffect$, useStore, useStyles$ } from "@builder.io/qwik";
import IClock from "./interfaces/IClock";
import styles from './styles/clock.css';

export default component$(() => {

    const items = Array(50).fill(null).map((_, index) => `item ${index + 1}`);


    return (
        <div>
            <p>Map all the items</p>

            <div>
                {items.map((items) => (
                    <ul>
                        <li>{items}</li>
                    </ul>
                ))}
            </div>

            <Clock />
        </div>
    );
});


export const Clock = component$(() => {
    useStyles$(styles);

    const INITIAL_STATE_CLOCK: IClock = {
        hour: 10,
        minute: 20,
        second: 30
    };

    const clock = useStore<IClock>(INITIAL_STATE_CLOCK);

    useClientEffect$(() => {

        const update = () => {

            const now = new Date();

            clock.hour = now.getHours() * (360 / 12);
            clock.hour = now.getMinutes() * (360 / 60);
            clock.second = now.getSeconds() * (360 / 60);

        };
        update();

        const interval = setInterval(update, 1000);

        return () => clearInterval(interval);

    });

    return (
        <div class="clock">
            <div class="twelve"></div>
            <div class="three"></div>
            <div class="six"></div>
            <div class="nine"></div>
            <div class="hour" style={{ transform: `rotate(${clock.hour}deg)` }}></div>
            <div class="minute" style={{ transform: `rotate(${clock.minute}deg)` }}></div>
            <div class="second" style={{ transform: `rotate(${clock.second}deg)` }}></div>
        </div>
    )
});
