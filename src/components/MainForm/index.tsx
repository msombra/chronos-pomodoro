import styles from './styles.module.css';
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react";

export const MainForm = () => {

    return (
        <form className={styles.form} action="">
            <div className={styles.formRow}>
                <DefaultInput 
                    labelText="task" 
                    id="meuInput" 
                    type="text" 
                    placeholder="Ex.: estudar para a prova"
                />
            </div>

            <div className={styles.formRow}>
                <p>
                    Nesse ciclo <b>descanse</b> por <b>x min.</b>
                </p>
            </div>

            <div className={styles.formRow}>
                <Cycles />
            </div>

            <div className={styles.formRow}>
                <DefaultButton icon={<PlayCircleIcon />} />
            </div>
        </form>
    );
};