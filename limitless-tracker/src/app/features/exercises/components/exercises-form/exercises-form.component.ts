import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExerciseService } from '../../../../shared/services/exercise.service';

@Component({
  selector: 'app-exercises-form',
  imports: [FormsModule],
  templateUrl: './exercises-form.component.html',
  styleUrl: './exercises-form.component.css'
})
export class ExercisesFormComponent {
  private exerciseService = inject(ExerciseService)
  name = ''
  duration = 0

  addExerciseHandler() {
    this.exerciseService.addExercise(this.name, this.duration)
    this.onResetHandler()
  }

  onResetHandler() {
    this.name = ''
    this.duration = 0
  }
}
