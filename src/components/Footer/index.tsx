import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export const Footer = () => {

    const anoAtual = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <RouterLink href="/about-pomodoro">
                Entenda a técnica pomodoro 🍅
            </RouterLink>
            <RouterLink href="/">
                Chronos Pomodoro &copy; {anoAtual} - Feito com 💚
            </RouterLink>
        </footer>
    );

};