import { useWorkoutsContext } from "./useWorkoutsContext";

const useDelete =()=>{
        const {dispatch} = useWorkoutsContext();
        
        const deleteWorkouts = async(url) =>{
            const response = await fetch(url,{
                method: 'DELETE'
            });
    
            const json = await response.json();
    
            if(response.ok){
                dispatch({type:'DELETE_WORKOUT',payload : json});
            }
        }
      return {deleteWorkouts};
}

export default useDelete;