import { Action } from 'history';
import React from 'react';
import ExerciseDisplay from './ExerciseDisplay';
import './ExerciseFilter.css';

const ExerciseFilter = (props) => {
    const intialLevel = {
        "beginner" : false,
        "intermediate" : false
    }
    const [levelFilter, setLevelFilter] = React.useState(intialLevel);
    const intialEquipment = {
        "bodyweight" : false,
        "kettlebell" : false
    }
    const [equipmentFilter, setEquipmentFilter] = React.useState(intialEquipment);
    
    const bodyweightStyle = {
        background : (equipmentFilter.bodyweight)? "yellowgreen"  : "none",
        color : (equipmentFilter.bodyweight)? "white" : "yellowgreen"
    }

    const kettlebellStyle = {
        background : (equipmentFilter.kettlebell)? "red"  : "none",
        color : (equipmentFilter.kettlebell)? "white" : "red"
    }

    const beginnerStyle = {
        background : (levelFilter.beginner)? "yellowgreen"  : "none",
        color : (levelFilter.beginner)? "white" : "yellowgreen"
    }

    const intermediateStyle = {
        background : (levelFilter.intermediate)? "red"  : "none",
        color : (levelFilter.intermediate)? "white" : "red"
    }
    
    const unfilteredWorkout = props.data.workouts;
    const exercise = unfilteredWorkout.map(movement => {
        return(
            <ExerciseDisplay
                name = {movement.name}
                level = {movement.level}
                equipment = {movement.equipment}
                embedId = {movement.embedId}
                steps = {movement.steps}
                key = {movement.name}
            />
        )
    });
    
    const [exercises, setExercise] = React.useState( exercise);
    const intialWorkout = React.useRef(unfilteredWorkout);
    const [filter1 , setFilter1] = React.useState(intialWorkout.current);
    const [filter2 , setFilter2] = React.useState(filter1);

    const levelFiltering = (event) => {
        let btn = event.target.id;
        setLevelFilter(intialLevel);
        setLevelFilter(prev => ({...prev, [btn] : !(prev[btn])}));
        switch(btn){
            case "beginner":
                setFilter1(intialWorkout.current.filter(workout => (workout.level == "beginner")));
                setFilter2(filter1);
                setExercise(filter1.map(movement => {
                    return(
                        <ExerciseDisplay
                            name = {movement.name}
                            level = {movement.level}
                            equipment = {movement.equipment}
                            embedId = {movement.embedId}
                            steps = {movement.steps}
                            key = {movement.name}
                        />
                    )
                }))
                break;
            
            case "intermediate":
                setFilter1(intialWorkout.current.filter(workout => (workout.level == "intermediate")));
                setFilter2(filter1);
                setExercise(filter1.map(movement => {
                    return(
                        <ExerciseDisplay
                            name = {movement.name}
                            level = {movement.level}
                            equipment = {movement.equipment}
                            embedId = {movement.embedId}
                            steps = {movement.steps}
                            key = {movement.name}
                        />
                    )
                }))
                break;
            
            default:
                console.log("error");
                
        }

    };

    const equipmentFiltering = (event) => {
        let btn = event.target.id;
        setEquipmentFilter(intialEquipment);
        setEquipmentFilter(prev => ({...prev, [btn] : !(prev[btn])}));
        switch(btn){
            case "bodyweight":
                setFilter2(filter1.filter(workout => (workout.equipment == "bodyweight")));
                setExercise(filter2.map(movement => {
                    return(
                        <ExerciseDisplay
                            name = {movement.name}
                            level = {movement.level}
                            equipment = {movement.equipment}
                            embedId = {movement.embedId}
                            steps = {movement.steps}
                            key = {movement.name}
                        />
                    )
                }))
                break;
            
            case "kettlebell":
                setFilter2(filter1.filter(workout => (workout.equipment == "kettlebell")));
                setExercise(filter2.map(movement => {
                    return(
                        <ExerciseDisplay
                            name = {movement.name}
                            level = {movement.level}
                            equipment = {movement.equipment}
                            embedId = {movement.embedId}
                            steps = {movement.steps}
                            key = {movement.name}
                        />
                    )
                }))
                break;
            
            default:
                console.log("error");
                
        }

    };

    return ( 
        <section className='filtered-exercises'>
            <h1 className='muscle-name'>{props.data.muscle}</h1>
            <section className="filters">
                <div className="level-filter filter">
                    <h1>choose your level</h1>
                    <button id='beginner'style={beginnerStyle} onClick={levelFiltering} >Beginner</button>
                    <button id='intermediate'style={intermediateStyle} onClick={levelFiltering}>intermediate</button>
                </div>
                <div className="equipment-filter filter">
                    <h1>Choose your equipment</h1>
                    <button id='bodyweight' style={bodyweightStyle} 
                    onClick={equipmentFiltering}>Bodyweight</button>
                    <button id='kettlebell'style={kettlebellStyle} onClick={equipmentFiltering}>Kettlebell</button>
                </div>

            </section>
            {exercises}
        </section>
     );
}
 
export default ExerciseFilter;