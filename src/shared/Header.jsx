import React, {useState} from 'react';

function Header(props) {

    const [value, setValue] = useState(false)

    return (
        <header>
            {props.text}
            <button onClick={ () => setValue(!value) }>{!value ? 'show' : 'hide'}</button>
            {value && (<p>Im here SSR</p>)}
        </header>
    );
}

export default Header;