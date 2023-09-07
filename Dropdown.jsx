import { useState } from "react";

function Dropdown({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);
    const options = ["Yes", "Probably Not"];

    return (

        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                {selected}
                <span class="caret"></span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div
                            onClick={(e) => {
                                setSelected(option);
                                setIsActive(false);
                            }}
                            className="dropdown-item"
                        >
                            {option}
                        </div>
                    ))}
                </div>

            )}
        </div>
    );

}

export default Dropdown;