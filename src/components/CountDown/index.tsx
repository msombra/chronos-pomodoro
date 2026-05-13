import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './styles.module.css';

export const CountDown = () => {

    const { state: { formattedSecondsRemaining } } = useTaskContext();

    return <div className={styles.container}>{formattedSecondsRemaining}</div>;

};