import { Component, OnInit } from '@angular/core';
import { Data, ChildData, DistrictData } from './models';
import { DataService } from './data.service';
import * as CanvasJS from '../../node_modules/canvasjs/dist/canvasjs.min.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'covidApp';
  allData: Data[];
  totalData: Data;
  selectedStateCode: string;
  selectedDistrictCode: string;
  stateData: Data;
  statewiseData: ChildData[];
  districtData: ChildData;
  districtWise:any
  confirmedCases=[]

  constructor(private service: DataService) { }

  


  ngOnInit() {
    this.getAllData();

    this.getDistrictData()
    this.graphData()
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Line Chart"
      },
      data: [{
        type: "line",
        dataPoints:this.confirmedCases
      }]
    });
      
    chart.render();

  }


  
  getAllData() {
    this.service.getAllData().subscribe(
      response => {
        this.allData = response.statewise;
        this.totalData = this.allData.find(x => x.statecode == 'TT');
        this.allData = this.allData.filter(x => x.statecode != 'TT' && x.statecode != 'UN');
        this.getStateData();
      }
    )
  }

  getStateData() {
    this.service.getStateData().subscribe(
      response => {
        this.statewiseData = response;
      }
    )
  }

  onStateSelected() {
    this.stateData = this.allData.find(x => x.statecode == this.selectedStateCode)
    let stateCode = (this.selectedStateCode == 'LA') ? 'LK' : this.selectedStateCode;
    this.districtData = this.statewiseData.find(x => x.id == `IN-${stateCode}`);

console.log(    this.districtData.districtData  )


this.districtData.districtData.forEach(element => {

  console.log(element.id)
  this.confirmedCases.push({
    label:element.id,
    y:element.confirmed

  })

    
  });
   console.log(this.confirmedCases)


}

  getDistrictData(){


    this.service.districtWiseData().subscribe(

      res=>{
        this.districtWise=res;
        console.log(this.districtWise)
        console.log(res)
   }
      ,
      err=>{
        console.log(err);
      }

    )


  }
  

  graphData(){

    console.log('hdsovibo')
    console.log(this.confirmedCases)
      }




}
