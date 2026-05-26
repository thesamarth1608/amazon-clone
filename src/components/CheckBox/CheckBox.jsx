import React, { useState } from 'react'
import './CheckBox.css'

const CheckBox = (props) => {
    const[checked, setChecked] = useState(true);

  return (
    <div>
      <div className='checkbox'>
        <label className='a-checkbox'>
            <input className='a-checkbox-input' type='checkbox' onClick={()=>setChecked(!checked)} checked={checked}/>
            <span className='aok-offscreen'>{props.label}</span>
        </label>
      </div>
    </div>
  )
}

export default CheckBox
