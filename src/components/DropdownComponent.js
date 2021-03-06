import React, { useState, useEffect, useRef } from 'react';

const DropDown = ({ options, selected, onSelectedChange, label }) => {

    const [toggle, setToggle] = useState(false);

    const ref = useRef();

    useEffect( () => {

        const onBodyClick = (e) => {
            if (ref.current.contains(e.target)) {
                return;
            }
            setToggle(false);
        }
        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);    
        };

    },[]);

    const renderOptions = options.map((option) => {

        if(option.value === selected.value) {
            return null;
        }

        return (
            <div 
                key={ option.value } 
                className="item" 
                onClick={() => onSelectedChange(option)}
            >
                { option.label }
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{ label }</label>
                <div 
                    onClick={() => setToggle(!toggle)} 
                    className={`ui selection dropdown ${toggle ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{ selected.label }</div>
                    <div 
                        className={`menu ${toggle ? 'visible transition' : ''}`}
                    >
                        { renderOptions }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown;