import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Sender() {
    let dispatch=useDispatch();
   let toreobj= useSelector((store)=>{
      return store
    })

  return (
    <div className='increamentcount'>
      <h1 className='header'>Count</h1>
        <h1 className='header'>{toreobj.counterrwducer.count}</h1>
      <button className='btsetup' onClick={()=>{
        dispatch({type:"DECREAMEANT"})
      }}>decreamant</button>
      <button className='btsetup' onClick={()=>{
      dispatch({type:"INCREAMEANT"})
      }}>increamant</button>
      <button className='btsetup' onClick={()=>{
        dispatch({type:"RESET"})
      }}>reset</button>
    </div>
  )
}

export default Sender
