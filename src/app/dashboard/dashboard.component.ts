import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  LineChart = []; 
  BarChart = [];

  constructor(private router:Router) { }

  ngOnInit() {
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["Jan", "Fev", "March", "April"], // your labels array
        datasets: [
          {
            label: 'Number of items in Months',
            data: [1, 3, 15, 5, 10, 22], // your data array
            borderColor: '#00AEFF',
            fill: false
          },
          {
            label: 'Number of week of the month',
            data: [1, 2, 3, 4], // your data array
            borderColor: 'red',
            fill: false
          }
        ]
      },
      options: {
        title: {
          text:"Line Chart",
          display: true
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ["Jan", "Fev", "March", "April"], // your labels array
        datasets: [
          {
            label: 'Number of items in Months',
            data: [1, 3, 4, 5, 10, 22], // your data array
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              '#00AEFF'
            ],
            fill: false
          }
        ]
      },
      options: {
        title: {
          text:"Bar Chart",
          display: true
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

  logout(){
    localStorage.clear()
    this.router.navigateByUrl('/login')
  }

}
