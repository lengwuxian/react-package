
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount } from '../../redux/slice/counterSlice'

export function Counter() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}