import useDelete from "../hooks/useDelete";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) => {
    const  {deleteWorkouts} = useDelete()
    const handleClick =()=>{
        deleteWorkouts(`${process.env.REACT_APP_API_URL}${workout._id}`)
    }
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    );
}
 
export default WorkoutDetails;