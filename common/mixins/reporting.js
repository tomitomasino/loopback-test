"use strict";

var app = require("../../server/server");
var log4js = require("log4js");
const logger = log4js.getLogger("cmdb-reporting");
logger.level = process.env.logginglevel || "debug";

module.exports = function (model, options) {
    model.observe("after save", function (ctx, next) {
        var versionModel = app.models[options.versionModelName];
        ctx.instance.versionTimestamp = new Date();
        ctx.instance.operDBId = ctx.instance.id;

        if (ctx.isNewInstance) {
            versionModel.create(ctx.instance, function (err, obj) {
                if (err) {
                    logger.error("Error adding document into reporting db: " + err);
                }
                logger.info("Created %s#%s in %s", versionModel.modelName, obj.id, versionModel.getDataSource().settings.name);
            });
            logger.info("Added %s#%s into %s", ctx.Model.modelName, ctx.instance.id, ctx.Model.getDataSource().settings.name);
        } else {
            var tmpModel = JSON.parse(JSON.stringify(ctx.instance));
            tmpModel.id = undefined;
            versionModel.create(tmpModel, function (err, obj) {
                if (err) {
                    logger.error("Error adding document into reporting db: " + err);
                }
                logger.info("Created %s#%s in %s", versionModel.modelName, obj.id, versionModel.getDataSource().settings.name);
            });
            logger.info("Updated %s#%s in %s", ctx.Model.modelName, ctx.instance.id, ctx.Model.getDataSource().settings.name);
        }
        next();
    });
};
