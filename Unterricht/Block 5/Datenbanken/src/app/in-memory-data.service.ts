import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Subject } from './subject';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const subjects = [
      { id: 1, title: 'Grundlagen der Informatik', description: "", day: "", startTime: '08:00', endTime: '09:30', location: "", isApplied: true },
      { id: 2, title: 'Mathematik I', description: "", day: "", startTime: '08:00', endTime: '11:15', location: "", isApplied: true },
      { id: 3, title: 'Software Engineering', description: "", day: "", startTime: '14:00', endTime: '17:15', location: "", isApplied: true },
      { id: 4, title: 'Grundlagen der Informatik', description: "", day: "", startTime: '08:00', endTime: '11:15', location: "", isApplied: true },
      { id: 5, title: 'HCI', description: "", day: "", startTime: '08:00', endTime: '11:15', location: "", isApplied: true }
    ];
    return { subjects };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(subject: Subject[]): number {
    return subject.length > 0 ? Math.max(...subject.map(subject => subject.id)) + 1 : 11;
  }
}