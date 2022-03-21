import React from 'react';
import ExerciseDisplay from './ExerciseDisplay';

const ExerciseFilter = (props) => {
    const exercise = props.data.workouts.map(movement => {
        return(
            <ExerciseDisplay
                name = {movement.name}
                level = {movement.level}
                equipment = {movement.equipment}

                embedId = {movement.embedId}
                steps = {movement.steps}
            />
        )
    });
    const [exercises, setExercises] = React.useState(exercise);
    return ( 
        <section className='filtered-exercises'>
            <div className="equipment-filter filter">
                <h1>Choose your equipment</h1>
                <button>Bodyweight</button>
                <button>Kettlebell</button>
            </div>
            <div className="equipment-filter filter">
                <h1>choose your level</h1>
                <button>Beginner</button>
                <button>intermediate</button>
            </div>
            {exercises}
        </section>
     );
}
 
export default ExerciseFilter;