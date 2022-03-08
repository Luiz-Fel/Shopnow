import { ReactNode } from 'react';
import styles from './styles.module.scss'


interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

    lightTheme: boolean;
    children: ReactNode,
}


export function Button(props : ButtonProps) {
    if (props.lightTheme) {
        return ( 
            <button
            className={styles.light}
            >
            {props.children}        
            </button>)
    } else {
        return ( 
            <button
            className={styles.dark}
            >
            {props.children}        
            </button>)
    }
   
}