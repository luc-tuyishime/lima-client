import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import ReactApexChart from "react-apexcharts";

import CardDashboard from '../common/Card/Card';
import './Dashboard.scss';

class PieChart extends Component {

    constructor(props) {
        super(props);

        this.state = {

            series: [44, 55, 13, 43, 22],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
    }

    render() {
        return (
            <div>
                <CardDashboard fluid>
                 <Card.Content>
                    <p>Production per crop [Total kg]</p>
                </Card.Content>
                <ReactApexChart className="chart-pie" options={this.state.options} series={this.state.series} type="pie" width={380} />
                </CardDashboard>
            </div>
        );
    }
}

export default PieChart;