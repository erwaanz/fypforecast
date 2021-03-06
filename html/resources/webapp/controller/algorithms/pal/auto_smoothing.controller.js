sap.ui.define([
	"fypforecast/html/base/algorithms/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("fypforecast.html.controller.algorithms.pal.auto_smoothing", {
		forcedSelectedAlgorithm: "auto_smoothing",
		onPressExecute: function(oEvent) {
			Controller.prototype.onPressExecute.apply(this, oEvent);
				this.setVizProperties("result_fit_viz_frame", "result_fit_popover");			
		}
	});
});
