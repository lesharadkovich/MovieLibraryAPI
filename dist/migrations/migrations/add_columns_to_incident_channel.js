"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const name = "add_columns_to_incident_channel";
const up = function (sequelize) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelize.query(`ALTER TABLE jira_incident_channel_assignment ADD COLUMN "projectId" int;`);
            yield sequelize.query(`ALTER TABLE jira_incident_channel_assignment ADD COLUMN "serviceUrl" text;`);
        }
        catch (err) {
            throw err;
        }
    });
};
module.exports = { name, up };
//# sourceMappingURL=add_columns_to_incident_channel.js.map