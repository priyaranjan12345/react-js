/* eslint-disable react/prop-types */

import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    
    return (
        <>
            <div className='w-full'>
                {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
                <input
                    type={type}
                    className={`px-2 py-3 rounded-xl bg-white text-black outline-none focus:bg-gray-200 w-full duration-200 border border-gray-200 ${className}`}
                    ref={ref} //parent ---> ref and state ---> parent
                    {...props}
                    id={id}
                />
            </div>
        </>
    )
})

export default Input