import Chart from 'chart.js'

export interface KeyData {
    name: string,
    data: number[],
}

export interface ChartConfig {
    dates: string[],
    keys: KeyData[],
}

const COLORS = [
    "rgba(186, 104, 200, 1)",
    "rgba(149, 117, 205, 1)",
    "rgba(121, 134, 203, 1)",
    "rgba(100, 181, 246, 1)",
    "rgba(77, 208, 225, 1)",
    "rgba(77, 182, 172, 1)",
    "rgba(255, 138, 101, 1)",
  ]

export class APIMetricChart {
    private ctx: CanvasRenderingContext2D;

    constructor(public element: HTMLCanvasElement, config: ChartConfig) {
        this.ctx = element.getContext("2d");
        this.generateChart(this.ctx, config)
    }

    private generateChart(ctx: CanvasRenderingContext2D, config: ChartConfig) {
        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: config.dates,
                datasets: this.generateDataSet(config.keys),
                // datasets: [{
                //     label: '# of Votes',
                //     data: [12, 19, 3, 5, 2, 3],
                //     // backgroundColor: [
                //     //     'rgba(255, 99, 132, 0.2)',
                //     //     'rgba(54, 162, 235, 0.2)',
                //     //     'rgba(255, 206, 86, 0.2)',
                //     //     'rgba(75, 192, 192, 0.2)',
                //     //     'rgba(153, 102, 255, 0.2)',
                //     //     'rgba(255, 159, 64, 0.2)'
                //     // ],
                //     // borderColor: [
                //     //     'rgba(255, 99, 132, 1)',
                //     //     'rgba(54, 162, 235, 1)',
                //     //     'rgba(255, 206, 86, 1)',
                //     //     'rgba(75, 192, 192, 1)',
                //     //     'rgba(153, 102, 255, 1)',
                //     //     'rgba(255, 159, 64, 1)'
                //     // ],
                //     borderWidth: 1
                // }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 5,
                        }
                    }]
                }
            }
        })
    }

    private generateDataSet(keys: KeyData[]): any[] {
        return keys.map((key, index) => {
            return {
                label: key.name,
                data: key.data,
                borderWidth: 3,
                fill: false,
                borderColor: COLORS[index],
            }
        })
    }
}
