"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const name = "create_jira_incident_channel_table";
const up = function (sequelize) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelize.query(`CREATE TABLE jira_incident_channel_assignment (
            "id" SERIAL PRIMARY KEY,
            "instanceId" integer REFERENCES atlassian_instance(id),
            "issueId" int,
            "oid" text,
            "tenantId" text,
            "teamId" text,
            "channelId" text,
            "channelName" text,
            "deleted" boolean DEFAULT FALSE
		);`);
        }
        catch (err) {
            throw err;
        }
    });
};
module.exports = { name, up };
//# sourceMappingURL=create_jira_incident_channel_assignment_table.js.map