// component import
import TaskItem from './TaskItem.jsx';

// styles
import styles from './TaskList.module.css';

const Tasklist = ({ tasks }) => {
    return (
        <ul className={styles.tasks}>
            {tasks.sort((a, b) => b.id - a.id).map(task => (
                <TaskItem 
                    key={task.id}
                    task={task}
                />
            ))}
        </ul>
    );
}
 
export default Tasklist;