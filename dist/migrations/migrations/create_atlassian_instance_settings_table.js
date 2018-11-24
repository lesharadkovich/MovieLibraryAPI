"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const name = "create_atlassian_instance_settings_table";
const up = function (sequelize) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelize.query(`CREATE TABLE atlassian_instance_settings (
            id SERIAL PRIMARY KEY,
            "instanceId" integer REFERENCES atlassian_instance(id),
            key text,
            value jsonb
		);`);
        }
        catch (err) {
            throw err;
        }
    });
};
module.exports = { name, up };
//# sourceMappingURL=create_atlassian_instance_settings_table.js.map