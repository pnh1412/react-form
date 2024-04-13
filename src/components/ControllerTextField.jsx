import React from 'react'

const ControllerTextField = React.forwardRef(({ label, name, onChange, type }, ref) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        ref={ref}
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  
      />
    </>
  )
})

export default ControllerTextField