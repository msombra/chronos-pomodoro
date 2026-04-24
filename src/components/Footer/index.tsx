import styles from './styles.module.css';

export const Footer = () => {

    const anoAtual = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <a href="#">
                Entenda a técnica pomodoro 🍅
            </a>
            <a href="#">
                Chronos Pomodoro &copy; {anoAtual} - Feito com 💚
            </a>
        </footer>
    );

};