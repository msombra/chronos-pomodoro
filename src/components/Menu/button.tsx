import styles from './styles.module.css';

type ContainerProps = {
    children: React.ReactNode;
};

export const Button = ({ children }: ContainerProps) => {

    return (
        <button type='button' className={styles.menuLink}>
            { children }
        </button>
    );

};