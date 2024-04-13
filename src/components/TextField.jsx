import React from 'react'

const TextField = ({ label, name, type, register }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
        {...register(name)}
      />
    </>
  )
}
export default TextField