import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod'
  private apiKey = 'Kv5Q65fO9MjkuObaSA97VtcKUtiLl66oJ1gVp9al'

  constructor() { }
}
