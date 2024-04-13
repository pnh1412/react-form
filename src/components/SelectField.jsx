import React from 'react'

const SelectField = React.forwardRef(({ name, label, options = [], onChange }, ref) => {
  return (
    <>
      <label htmlFor="role">{label}</label>
      <select 
        ref={ref}
        id={name}
        name={name}
        onChange={onChange}
        defaultValue="admin" 
        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        {options.map(item => (
          <option key={item.value} value={item.value}>{item.label}</option>
        ))}
      </select>
    </>
  )
})
export default SelectField