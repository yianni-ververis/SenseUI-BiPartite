/**
 * @name SenseUI-BiPartite
 * @author yianni.ververis@qlik.com
 * @requires string: 
 * @param {string} 
 * @description
 * A simple template to create extensions
 */

define( [ 
	"qlik",
	"jquery",
	"./d3.min",
	"./biPartite"
],
(qlik, $, d3) => {
	// Define properties
	var me = {
		initialProperties: {
			qHyperCubeDef: {
				qDimensions: [],
				qMeasures: [],
				qInitialDataFetch: [{
					qWidth: 2,
					qHeight: 50
				}]
			}
		},
		definition: {
			type: "items",
			component: "accordion",
			items: {
				dimensions: {
					uses: "dimensions",
					min: 1,
					max: 2
				},
				measures: {
					uses: "measures",
					min: 0,
					max: 1
				},
				sorting: {
					uses: "sorting"
				},
				settings : {
					uses : "settings",
					items: {
						custom: {
							type: "items",
							label: "BiPartite Settings",
							items: {
								barFillColor: {
									type: "string",
									expression: "none",
									label: "Fill color Separated by comma if stacked bar. If Empty, use default Sense palette",
									defaultValue: "#4477AA",
									ref: "vars.fillColor"
								},
							}
						}
					}
				}
			}
		}
	};

	me.support = {
		snapshot: true,
		export: true,
		exportData : false
	};

	// Get Engine API app for Selections
	me.app = qlik.currApp(this);

	me.paint = ($element, layout) => {
// 		var width = $(window).innerWidth();
// 		let vars = $.extend({
// 			v: '1.0',
// 			id: layout.qInfo.qId,
// 			name: 'SenseUI-BiPartite',
// 			chart: {
// 				id: '#byPartite',
// 				width: 900,
// 				height: 640,
// 				margin: {
// 					b:0,
// 					t:20,
// 					l:205,
// 					r:0
// 				},
// 				display: {
// 					value: true,
// 					percent: true
// 				},
// 				b: 18, // Width of the colored rect 
// 				bb: 140, // Width of the Inner Graph
// 				c1: [-205, 25], // Label [part1, part2]
// 				c2: [-40, 190], // Value (-50,100)
// 				c3: [-4, 225], // percent
// 			}
// 		}, layout.vars);
// console.log(layout)
// 		bP.init(vars);

// 		// CSS
// 		vars.css = `
// 			#${vars.id}_inner {
// 				font-size: 25px
// 			}
// 		`;

// 		// TEMPLATE
// 		vars.template = `
// 			<div id="${vars.id}_inner">
// 				${vars.name}
// 			</div>
// 		`;

// 		// Write Css and html
// 		$("<style>").html(vars.css).appendTo("head");
// 		$element.html(vars.template)

// 		console.info('%c SenseUI-Template: ', 'color: red', 'v' + vars.v);
		//needed for export
		return qlik.Promise.resolve();
	};

	// define HTML template	
	// me.template = '';

	// The Angular Controller for binding
	// me.controller = ["$scope", "$rootScope", "$element", function ( $scope, $rootScope, $element ) {}]

	return me;
} );

