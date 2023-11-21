/* eslint-disable react/prop-types */

function Button({
    children,
    type = "button",
    bgColor = "bg-blue-800",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button type={type} className={`px-2 py-3 font-semibold text-lg rounded-xl ${className} ${bgColor} ${textColor}`} {...props}>
            {children}
        </button>
    )
}

export default Button