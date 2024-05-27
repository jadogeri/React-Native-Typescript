import React, { ChangeEvent, ChangeEventHandler } from 'react'

const InputField : 
    React.FC<{ 
        placeholder:string
        type : "number",         
        onChange: ChangeEventHandler<HTMLInputElement>
        id: string

    }> = ({placeholder, type, onChange, id}) => {
  return (
    <input
         placeholder={placeholder} type={type} onChange={onChange} id={id}
    >    
    </input>
  )
}

export default InputField