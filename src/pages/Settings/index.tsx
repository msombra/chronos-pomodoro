import styles from './styles.module.css';
import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { DefaultInput } from "../../components/DefaultInput";
import { DefaultButton } from "../../components/DefaultButton";
import { SaveIcon } from "lucide-react";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export const Settings = () => {

    const { state, dispatch } = useTaskContext();

    const workTimeInput = useRef<HTMLInputElement>(null);
    const shortBreakTimeInput = useRef<HTMLInputElement>(null);
    const longBreakTimeInput = useRef<HTMLInputElement>(null);

    const handleSaveSettings = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formErrors = [];

        const workTime = Number(workTimeInput.current?.value);
        const shortBreakTime = Number(shortBreakTimeInput.current?.value);
        const longBreakTime = Number(longBreakTimeInput.current?.value);

        if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
            formErrors.push('Digite apenas números para TODOS os campos');
        }
        
        if (workTime < 1 || workTime > 99) {
            formErrors.push('Digite valores entre 1 e 99 para foco');
        
        }
        
        if (shortBreakTime < 1 || shortBreakTime > 30) {
            formErrors.push('Digite valores entre 1 e 30 para descanso curto');
        
        }
        
        if (longBreakTime < 1 || longBreakTime > 60) {
            formErrors.push('Digite valores entre 1 e 60 para descanso longo');
        
        }

        if (formErrors.length > 0) {
            formErrors.forEach(err => showMessage.error(err));
            return;
        }

        dispatch({type: TaskActionTypes.CHANGE_SETTINGS, payload: {
            workTime,
            shortBreakTime,
            longBreakTime
        }});
        showMessage.success('Configurações salvas');
    }

    return (
        <>
            <MainTemplate>

                <Container>
                    <Heading>
                        Configurações
                    </Heading>
                </Container>

                <Container>
                    <p style={{ textAlign: 'center' }}>
                        Modifique as configurações para tempo de foco, descanso curto e descanso longo.
                    </p>
                </Container>

                <Container>
                    <form onSubmit={handleSaveSettings} className={styles.form}>
                        {/* Input Foco */}
                        <div className={styles.formRow}>
                            <DefaultInput 
                                id="workTime" 
                                labelText="Foco" 
                                type="number" 
                                ref={workTimeInput} 
                                defaultValue={state.config.workTime}
                            />
                        </div>
                        {/* Input Descanso Curto */}
                        <div className={styles.formRow}>
                            <DefaultInput 
                                id="shortBreakTime" 
                                labelText="Descanso curto" 
                                type="number" 
                                ref={shortBreakTimeInput} 
                                defaultValue={state.config.shortBreakTime}
                            />
                        </div>
                        {/* Input Descanso Longo */}
                        <div className={styles.formRow}>
                            <DefaultInput 
                                id="longBreakTime" 
                                labelText="Descanso longo" 
                                type="number" 
                                ref={longBreakTimeInput} 
                                defaultValue={state.config.longBreakTime}
                            />
                        </div>
                        {/* Button Submit */}
                        <div className={styles.formRow}>
                            <DefaultButton icon={<SaveIcon />} aria-label="Salvar configurações" title="Salvar configurações" />
                        </div>
                    </form>
                </Container>
                
            </MainTemplate>
        </>
    );
};