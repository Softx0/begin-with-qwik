import { component$, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
// import { useState } from 'react';

export interface Counter {
    number: number,
}

export default component$(() => {

    const INITIAL_STATE_COUNTER: Counter = {
        number: 0
    }

    // const [counter] = useState({ number: 0 });
    const counter = useStore<Counter>(INITIAL_STATE_COUNTER);

    return (
        <div className="div">

            <div className="div">
                Valor del numero: {counter?.number}
            </div>

            <div className="mindblow">
                <button className={"mindblow"} onClick$={() => counter.number++}> Increment </button>
            </div>

            <Link class={"mindblow"} href="../watch">Go to know how to use useWatch</Link>
        </div>
    );
})