# REST / ExpressJS backend

## Contents

The apps nodeJS backend code. Using the following tech stack:

- REST services based on NodeJS
- ExpressJS with [routing-controllers](https://github.com/typestack/routing-controllers)
- Typescript
- Yarn
- Postgres (via sequelize-typescript)


## Necessary database tables

### atlassian_instance

This table (see models/AtlassianInstance.ts) will contain the all the instances that have installed the add-on. It will be popuplated by the lifecycle hook in the LibraryController.ts already have this table in our production database and will be integrating it with the new app.

### teams_incident_assignment

This table should contain the mapping between incidents and teams channels. Table layout roughly like this

| id | instanceId | issueId | oid | tenantId | teamsId | channelId |
| --- | --- | --- | --- | --- | --- | --- | --- | 
| PK, auto-increment | FK to atlassian_instance | Incident Issue Id | Office 365 OID | Office 365 tenant id | Id of team | Id of channel

### service_token

Table (tbd) which will store the tokens of service app, which will be approved by an Office 365 admin

## Connection to Jira

### Use webhooks to recieve updates on comments

Webhooks should be working to get comments on the incidents.

### Creating new entries in the Jira incident view timeline

It seems it will be necessary to use a private API, we are clarifying if we can get access.
