import { Injectable } from '@angular/core';
import { ERROR } from '../interfaces/parallelum.interface';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private error: ERROR[] = [];

  constructor() { }

  get allError() {
    return this.error;
  }

  addError(msg: string): void {
    this.error.push({id: Math.random().toString(16).substring(0,15), msg: msg});
  }

  removeError(id: string): void {
    this.error = this.error.filter(e => e.id !== id);
  }
}
