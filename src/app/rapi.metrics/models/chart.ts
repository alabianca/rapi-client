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
    private chart;
    constructor(public element: HTMLCanvasElement, config: ChartConfig) {
        this.ctx = element.getContext("2d");
        this.chart = this.generateChart(this.ctx, config)
    }

    public update() {
        if (!this.chart) {
            throw new Error("Update Before Chart is initialized")
        }

        this.chart.update()
    }

    private generateChart(ctx: CanvasRenderingContext2D, config: ChartConfig) {
        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: config.dates,
                datasets: this.generateDataSet(config.keys),
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
