import styles from './styles.module.css';

type ContainerProps = {
    children: React.ReactNode
} & React.ComponentProps<'button'>;

export const Button = ({ children, ...props }: ContainerProps) => {

    return (
        <button type='button' className={styles.menuLink} {...props}>
            { children }
        </button>
    );

};