import React, {useState} from 'react';
import styles from './header.css'

function Header(props) {

    const [value, setValue] = useState(false)

    return (
        <header>
            <h1 className={styles.example}>Hello styles CSS modules</h1>
            <button className={styles.button}>Color</button>
            {props.text}
            <button className={styles.button} onClick={ () => setValue(!value) }>{!value ? 'show' : 'hide'}</button>
            {value && (<p>Im here SSR</p>)}
        </header>
    );
}

export default Header;