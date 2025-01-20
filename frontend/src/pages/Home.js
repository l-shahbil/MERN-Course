import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const { data: workouts, isPending, error } = useFetch(`${process.env.REACT_APP_API_URL}`)

    return (
        <div className="home">
            {isPending && <p>Loading...</p>}
            {error && <div>{error}</div>}
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    );
}

export default Home;