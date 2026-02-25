import React from 'react'

function TextInput({textValue, setText}:any) {
  return (
    <>
        <div>TextInput</div>
        <input value={textValue} onChange={(e)=> setText(e.target.value)}/>
    </>
  )
}

export default TextInput