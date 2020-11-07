import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(city){
    var url='http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=b685c7c1d6a5e236857b241e0c14d59b'

    return this.http.get(url)

  }
}
