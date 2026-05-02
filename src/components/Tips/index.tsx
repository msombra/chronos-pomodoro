import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

type TipsProps = { 
    nextCycleType: "workTime" | "shortBreakTime" | "longBreakTime"; 
};

export const Tips = ({ nextCycleType }: TipsProps) => {
    const { 
        state:
            {
                activeTask, 
                config: { workTime, shortBreakTime }
            }
    } = useTaskContext();

    const tipsForWhenActiveTask = { 
        workTime: <span>Foque por {workTime}min</span>,
        shortBreakTime: <span>Descanse por {shortBreakTime}min</span>,
        longBreakTime: <span>Descanso longo</span>
    };

    const tipsForNoActiveTask = {
        workTime: <span>Próximo ciclo é de {workTime}min</span>,
        shortBreakTime: <span>Próximo descanso é de {shortBreakTime}min</span>,
        longBreakTime: <span>Próximo descanso será longo</span>
    };

    return (
        <>
            {!!activeTask && tipsForWhenActiveTask[activeTask.type]}
            {!activeTask && tipsForNoActiveTask[nextCycleType]}
        </>
    );
};