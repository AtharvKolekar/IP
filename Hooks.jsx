import React, { useState, useEffect } from 'react';

function CounterApp(){ 
    const [count, setCount] = useState(0); 

    useEffect(() => {
        console.log(`Count has changed to: ${count}`);
    }, [count]);

    return (
        <div style={styles.container}>
        <h1>React Hooks: useState and useEffect Example</h1>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)}
        style={styles.button}>Increment</button>
        <button onClick={() => setCount(count - 1)}
        style={styles.button}>Decrement</button>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },

    button: { 
        margin:'10px', 
        padding:'10px 20px', 
        fontSize:'16px',
    }
};

export default CounterApp;