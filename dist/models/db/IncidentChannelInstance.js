"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let IncidentChannelInstance = class IncidentChannelInstance extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], IncidentChannelInstance.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], IncidentChannelInstance.prototype, "instanceId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], IncidentChannelInstance.prototype, "issueId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], IncidentChannelInstance.prototype, "projectId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], IncidentChannelInstance.prototype, "oid", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], IncidentChannelInstance.prototype, "tenantId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], IncidentChannelInstance.prototype, "teamId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], IncidentChannelInstance.prototype, "channelId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], IncidentChannelInstance.prototype, "channelName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], IncidentChannelInstance.prototype, "serviceUrl", void 0);
__decorate([
    sequelize_typescript_1.Default(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], IncidentChannelInstance.prototype, "deleted", void 0);
IncidentChannelInstance = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'jira_incident_channel_assignment',
    })
], IncidentChannelInstance);
exports.IncidentChannelInstance = IncidentChannelInstance;
//# sourceMappingURL=IncidentChannelInstance.js.map