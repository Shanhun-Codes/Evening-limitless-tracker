import { Component, inject, signal } from '@angular/core';
import { ExerciseService } from '../../../../shared/services/exercise.service';

import { ExercisesFormComponent } from "../exercises-form/exercises-form.component";
import { ExerciseItemComponent } from "../exercise-item/exercise-item.component";

@Component({
  selector: 'app-exercise-list',
  imports: [ExercisesFormComponent, ExerciseItemComponent],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
  private exerciseService = inject(ExerciseService)
  exercises = this.exerciseService.getExercises()


}
