import styles from './styles.module.css';
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export const MainForm = () => {

    const { state, dispatch } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);

    // ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    const handleNewTask = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            alert('Digite o nome da tarefa');
            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType,
        };

        dispatch({ type: TaskActionTypes.START_TAKS, payload: newTask });
    };

    const handleInterruptTask = () => {
        dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
    };

    return (
        <form onSubmit={handleNewTask} className={styles.form}>
            <div className={styles.formRow}>
                <DefaultInput 
                    labelText="task" 
                    id="meuInput" 
                    type="text" 
                    placeholder="Ex.: estudar para a prova"
                    ref={taskNameInput}
                    disabled={!!state.activeTask}
                />
            </div>

            <div className={styles.formRow}>
                <p>
                    Nesse ciclo <b>descanse</b> por <b>x min.</b>
                </p>
            </div>

            {state.currentCycle > 0 && (
                <div className={styles.formRow}>
                    <Cycles />
                </div>
            )}

            <div className={styles.formRow}>
                {!state.activeTask ? (
                    <DefaultButton
                        type='submit'
                        aria-label='Iniciar uma nova tarefa' 
                        title='Iniciar uma nova tarefa' 
                        icon={<PlayCircleIcon />} 
                        key='botao_submit'
                    />
                ) : (
                    <DefaultButton
                        type='button'
                        aria-label='Interromper tarefa atual' 
                        title='Interromper tarefa atual' 
                        color='red'
                        icon={<StopCircleIcon />} 
                        onClick={handleInterruptTask}
                        key='botao_button'
                    />
                    
                )}
            </div>
        </form>
    );
};