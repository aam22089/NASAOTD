import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod'
  private apiKey = 'Kv5Q65fO9MjkuObaSA97VtcKUtiLl66oJ1gVp9al'

  constructor(private http: HttpClient) { }

  getImageOTD(): Observable<any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}`)
  }
}
