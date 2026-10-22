export default function Button({children,type="button",variant="",...props}){return <button type={type} className={`design-select-button ${variant}`} {...props}>{children}</button>;}
