import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'covidApp';
  city:any
  weatherData:any
  constructor(private weatherService:WeatherService) { }

  


  ngOnInit() {

  
  }

  getWeatherData(){
    this.weatherService.getWeatherData(this.city).subscribe(
      res=>{
        this.weatherData=res
        console.log(this.weatherData)
      },
      err=>{
        console.log(err)
      }
    )
  }




}
