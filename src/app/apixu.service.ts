import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(loc){
    return this.http.get(
      'https://api.apixu.com/v1/current.json?key=e867c493f1ff429187d104444192908&q=' + loc
    );
  }
}
