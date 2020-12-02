import React, { useState } from 'react';
import Dropdown from './DropdownComponent';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {

    const [langauge, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value) }/>
                </div>
            </div>
            <Dropdown
                options={ options }
                selected={ langauge }
                onSelectedChange={ setLanguage }
                label="Select a Language"
            />
        </div>
    );
}

export default Translate;