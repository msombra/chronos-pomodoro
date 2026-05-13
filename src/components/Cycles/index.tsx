import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export const Cycles = () => {

    const { state: { currentCycle } } = useTaskContext();

    const cycleStep = Array.from({ length: currentCycle });

    const cycleDescriptionMap = {
        workTime: 'foco',
        shortBreakTime: 'descanso curto',
        longBreakTime: 'descanso longo'
    }

    return (
        <div className={styles.cycles}>
            <span>Ciclos:</span>
            <div className={styles.cycleDots}>
                {cycleStep.map((_, idx) => {
                    const nextCycle = getNextCycle(idx);
                    const nextCycleType = getNextCycleType(nextCycle);

                    return (
                        <span 
                            key={nextCycle} 
                            className={`${styles.cycleDot} ${styles[nextCycleType]}`} 
                            aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`} 
                            title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                        ></span>
                    );
                })}
            </div>
        </div>
    );

};