import { useState } from "react"
import { Button } from 'react-bootstrap';

const Counter = ({initial, stock, onAdd})=> {
    const [count, setCount] = useState(0) //se inicializa en el 0

    const decrement = ()=> {
        setCount(count - 1)
    }

    const increment = ()=> {
        setCount(count + 1)
    }

    return(
        <div>  
            { <p>{count}</p>}
            <Button variant="outline-primary" onClick={decrement}>-</Button>{' '} || <Button variant="outline-primary" onClick={increment}>+</Button>{' '}
            <div className="mb-2">
                <Button onClick={() => onAdd(count)} variant="primary" size="lg">Agregar al</Button>{' '}
            </div>
        </div>
    )
}

export default Counter




