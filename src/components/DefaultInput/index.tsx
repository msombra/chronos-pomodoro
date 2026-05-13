import styles from './styles.module.css';

type DefaultInputProps = {
    id: string,
    labelText?: string // O interrogação (?) indica que o elemento existe porém é opcional
} & React.ComponentProps<'input'>; // Responsável por trazer todos os atributos e seus respectivos valores da tag input.

export const DefaultInput = ({ 
    id, 
    labelText, 
    type, 
    ...rest // Agrupa todos os demais atributos da tag input (e são opcionais)
}: DefaultInputProps) => {

    return (
        <>
            {labelText && <label htmlFor={id}>{labelText}</label>}
            <input className={styles.input} id={id} type={type} {...rest} />
        </>
    );

};