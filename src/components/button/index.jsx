export function CustomButton({label, onClick, className}) {
    return <button className={`custom-button ${className}`}
            onClick={onClick}>
            {label}
           </button>
}

export default CustomButton;