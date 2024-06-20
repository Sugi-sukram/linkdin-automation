import { BsArrowRight } from 'react-icons/bs';
import '../../styles/common-components/button-component.scss';

interface Styles {
    title: string | any;
    height: string;
    width: string;
    backgroundColor: string;
    color: string;
    disabled?: boolean;
    margin?: string;
    boxShadow?: string;
    border?: string;
    borderRadius?: string;
    icon?: string;
    className: "button-component" | "button-component common-btn" | "button-component-hover" | "button-component-hover common-btn" | "button-component-hover cancel" | "button-component-hover disabled" | "button-component disabled" | "button-border" | "previous-disabled";
    handleClick: () => void;
}

export default function ButtonComponent({ title, height, width, disabled, boxShadow, backgroundColor, borderRadius, color, className, handleClick, margin, border, icon }: Styles) {
    return (
        <div className={className} style={{ width, margin }}>
            <button style={{ height, width: "100%", boxShadow, backgroundColor, color, border, borderRadius }} onClick={() => handleClick()} disabled={disabled} >
                {icon == "tick" && <span style={{ marginRight: "10px" }}>{'✓'}</span>}
                {title}

                <BsArrowRight className='arrow-icon' style={{ display: "none" }} />
            </button>
        </div>
    )
}
