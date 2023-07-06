/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "appmta/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("appmta.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: async function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            },
            _readService: function (entity) {
                return new Promise((res, rej) => {
                    this.getModel("requests").read(entity, {
                        success: res,
                        error: rej
                    });
                });
            },
        });
    }
);