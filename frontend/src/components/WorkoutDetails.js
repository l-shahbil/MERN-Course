import useDelete from "../hooks/useDelete";

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
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    );
}
 
export default WorkoutDetails;