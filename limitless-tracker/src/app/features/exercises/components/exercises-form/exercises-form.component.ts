import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExerciseService } from '../../../../shared/services/exercise.service';

@Component({
  selector: 'app-exercises-form',
  imports: [FormsModule],
  templateUrl: './exercises-form.component.html',
  styleUrl: './exercises-form.component.css',
})
export class ExercisesFormComponent implements AfterViewInit {
  private exerciseService = inject(ExerciseService);
  form = viewChild<ElementRef<HTMLFormElement>>('form');

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called: Form element availble');
    this.form()?.nativeElement.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Form submitted');
    });
  }

  addExerciseHandler(name: string, duration: number) {
    console.log(name, duration);
    if (!name || duration <= 0) {
      alert('complete forn');
    } else {
      this.exerciseService.addExercise(name, duration);
      this.onResetHandler();
    }
  }

  onResetHandler() {
    this.form()?.nativeElement.reset();
  }
}
