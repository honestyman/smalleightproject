import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class CanvasGraph extends Component {
	render() {
		const options = {
			animationEnabled: true,
			// exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			// title:{
			// 	text: "Bounce Rate by Week of Year"
			// },
			axisY: {
        gridThickness: 0,
        labelFontColor: "transparent",
        tickColor: "transparent"
			},
			axisX: {
				lineColor: "transparent",
        tickColor: "transparent",
        labelFontColor: "transparent"
			},
      backgroundColor: "transparent",
      creditText:"",
			data: [{
				type: "line",
        color:"white",
				// toolTipContent: "Week {x}: {y}%",
				dataPoints: [
					{ x: 0, y: 0 },
					{ x: 1, y: 40 },
					{ x: 2, y: 35 },
					{ x: 3, y: 45 },
					{ x: 4, y: 90 },
					{ x: 5, y: 80 },
					{ x: 6, y: 70 },
					{ x: 7, y: 75 },
					{ x: 8, y: 78 },
					{ x: 9, y: 140 }
				]
			}]
		}
		return (
		<div className='sp:hidden'>
			<CanvasJSChart options = {options} containerProps={{ width: '100%', height: '600px' }}  />
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default CanvasGraph;