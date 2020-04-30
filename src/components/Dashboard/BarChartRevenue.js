import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import ReactApexChart from "react-apexcharts";

import CardDashboard from '../common/Card/Card';
import './Dashboard.scss';

class BarChartRevenue extends Component {
    
    state = {      
        series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30],
        colors: ['#00FF00']
        }],
        options: {
        chart: {
            height: 350,
            type: 'bar',
            events: {
            click: function(chart, w, e) {
               console.log(chart, w, e)
            }
          }
        },
        colors: this.colors,
        plotOptions: {
            bar: {
            columnWidth: '45%',
            distributed: true
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: [
            ['John', 'Doe'],
            ['Joe', 'Smith'],
            ['Jake', 'Williams'],
            'Amber',
            ['Peter', 'Brown'],
            ['Mary', 'Evans'],
            ['David', 'Wilson'],
            ['Lily', 'Roberts'], 
            ],
            labels: {
            style: {
                colors: this.colors,
                fontSize: '12px'
            }
            }
        }
     },  
  };

    render() {
          return (
            <div id="chart">
                <CardDashboard fluid>
                 <Card.Content className="chart-header">
                    Revenue
                </Card.Content>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
                </CardDashboard>
            </div>
          );
    }
 }

 export default BarChartRevenue;