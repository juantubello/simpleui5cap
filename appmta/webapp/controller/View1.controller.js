sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("appmta.controller.View1", {
            onInit: async function () {
                const p1 = await this._readService('/requests');
                console.log(p1)
            },
            _readService: function (entity) {
                const that = this
                return new Promise((res, rej) => {
                    that.getOwnerComponent().getModel("requests").read(entity, {
                        success: res,
                        error: rej
                    });
                });
            },
        });
    });
