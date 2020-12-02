import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/SearchComponent';
import DropDown from './components/DropdownComponent'
import Translate from './components/Translate';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'It is a favorite among eingineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use react by creating components'
    }
]

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'A shade of Blue',
        value: 'blue'
    }
]

export default () => {

    return(
        <div>
            <Translate />
        </div>
    );
}