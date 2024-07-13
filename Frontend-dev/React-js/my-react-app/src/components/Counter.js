import React, { useEffect, useState } from "react";

// class Counter extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             count:0
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <p>You clicked the button {this.state.count} times</p>
//                 <button onClick={() => this.setState({count: this.state.count + 1})}>
//                     Click Me!
//                 </button>
//             </div>
//         )
//     }
// }

function Counter(){
    const [count, setCount] = useState(0)

    // Effect function
    useEffect(() => {
        console.log('Component Mounted');

        const handleClick = () => setCount((c) => c + 1)
        document.addEventListener('click', handleClick)

        // Cleanup function
        return () => {
            console.log('Component Unmounted');
            document.removeEventListener('click', handleClick)
        }

    }, [])

    // Add dependency (the second argument [])
    useEffect(() => {
        console.log('Count Updated')
        document.title = 'Count: ${count}'
    }, [count])

    function increment(){
        setCount(count + 1)
    }
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter;