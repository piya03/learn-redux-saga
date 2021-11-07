import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount,decrementByAmount } from './counterSlice'

export const CounterTest = props => {
    const dispatch = useDispatch()
    console.log("🚀 ~ file: CounterTest.js ~ line 8 ~ dispatch", dispatch)
    const county = useSelector((state) => state)
    console.log("🚀 ~ file: CounterTest.js ~ line 9 ~ county", county.counter)
    
    function plus(){
        dispatch(increment())
    }
    function minus(){
        dispatch(decrement())
    }  
     function plusByNum(val){
        dispatch(incrementByAmount(val))
    }  
     function minusByNum(val){
        dispatch(decrementByAmount(val))
    }
    return (
        <div>
            <h1>TEST</h1>
            <h3>Counter {county.counter.value}</h3>
            <button onClick={plus}>INCREMENT</button>
            <button onClick={minus}>DECREMENT</button>
            <button onClick={() => plusByNum(5)}>INCREMENT BY 5</button>
            <button onClick={() => minusByNum(3)}>DECREMENT BY 3</button>
        </div>
    )
}

CounterTest.propTypes = {

}

