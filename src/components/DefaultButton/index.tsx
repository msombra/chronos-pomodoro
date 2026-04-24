import styles from './styles.module.css';

type DefaultButtonProps = {
    icon: React.ReactNode,
    color?: 'green' | 'red'; // Valores padrões (obrigatórias) para a variável, caso seja usada
} & React.ComponentProps<'button'>;

export const DefaultButton = ({ icon, color = 'green', ...props }: DefaultButtonProps) => {

    return (
        <>
            <button type='button' className={`${styles.button} ${styles[color]}`} {...props}>
                {icon}
            </button>
        </>
    );

};