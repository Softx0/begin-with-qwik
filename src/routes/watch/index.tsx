import { component$, useStore, useWatch$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface Counter {
    number: number,
    debounced: number,
}

export default component$(() => {

    const INITIAL_STATE_COUNTER: Counter = {
        number: 0,
        debounced: 0
    };

    const store = useStore<Counter>(INITIAL_STATE_COUNTER);

    useWatch$(({ track }) => {

        // track works for to tell Qwik which properties should trigger this watch
        track(() => store.number);
        console.log('count changed');

        const timer = setTimeout(() => store.debounced = store.number, 1500);

        return () => {
            clearTimeout(timer);
        }

    });

    console.log('useWatch renders');
    return (
        <>
            <FirstChild store={store} />
            {/* <GrandChild store={store} /> */}
            <div>
                <button onClick$={() => store.number++}>+</button>
            </div>

            <Link href="../clock">Go to Clock to undestand useClientEffect</Link>
        </>
    );
});


export const FirstChild = component$((props: { store: Counter }) => {

    console.log('<FirstChild> render');

    return (
        <div>
            <div>
                <p>Counter: {props.store.number}</p>
            </div>
            <div>
                <GrandChild store={props.store} />
            </div>
        </div>
    )
});

export const GrandChild = component$((props: { store: Counter }) => {

    console.log("<GrandChild> render");

    return (
        <div>
            <div>
                <p>Debounced: {props.store.debounced}</p>
            </div>
        </div>
    );
})