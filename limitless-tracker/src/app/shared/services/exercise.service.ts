import { Injectable, signal } from '@angular/core';
import { Exercise } from '../models/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private exercises = signal<Exercise[]>([
    {
      name: 'Jog',
      duration: 30
    }
  ])

  getExercises() {
    return this.exercises
  }

  removeExercise(n: string) {
    this.exercises.update(e => e.filter(ex => ex.name !== n))
  }

  addExercise(n: string, d: number) {
    this.exercises.update(e => [...e, {name: n, duration: d}])
  }

}
