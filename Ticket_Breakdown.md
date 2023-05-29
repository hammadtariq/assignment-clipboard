# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Assumptions taken for the following breakdown

- The application already has existing models and database schema for Facilities, Agents, and Shifts.
- The database management system allows schema modifications without significant downtime.
- The existing Agent model and database schema do not have conflicts with adding a new field for custom IDs.
- The getShiftsByFacility function already retrieves Shifts data based on the Facility's ID.
- The generateReport function currently generates reports using the Shifts data provided.
- The application has a suitable technology stack and libraries/modules available for PDF generation.
- The user interface for Facilities already exists and can be extended to accommodate the management of custom IDs.
- The PDF reports should be generated dynamically upon request and not pre-generated and stored.
- Data migration for existing Agents can be done using a script and setting the initial custom ID value to null.

## Ticket 1: Update Agent model and database schema

Description: Modify the Agent model and database schema to include a new field for custom ids provided by Facilities.

Acceptance Criteria:
The Agent model should have a new field customId to store the custom ids provided by Facilities.
The database schema should be updated to include the customId field in the Agents table.

Implementation Details:
Update the Agent model definition to include the customId field.
Modify the Agents table in the database to add the customId column.
Write script for data migration of existing Agents.

Effort Estimate: 6 hours

## Ticket 2: Update Shifts retrieval function to include custom Agent ids

Description: Modify the getShiftsByFacility function to retrieve Shifts with the custom Agent ids provided by Facilities.

Acceptance Criteria:
Modify the getShiftsByFacility function to include the custom Agent ids in the returned Shifts data.
Update the function's query to join the Agents table and retrieve the custom ids for each Agent.

Effort Estimate: 4 hours

Implementation Details:
Modify the query in the getShiftsByFacility function to include a join with the Agents table to retrieve the custom ids.
Adjust the data structure of the returned Shifts to include the custom Agent ids.

## Ticket 3: Implement PDF generation for reports

Description: Implement the PDF generation functionality for the reports in the application.

Acceptance Criteria:
- Implement a PDF generation library or module to convert the Shifts data into PDF reports.
- The generated PDF reports should follow the required format and include relevant information, such as Agent names, custom Agent ids, and worked hours.

Effort Estimate: 5 hours

Implementation Details:
- Research and select a suitable PDF generation library or module for the application.
- Integrate the chosen library or module into the report generation process.
- Design and implement the necessary logic to convert the Shifts data into PDF reports according to the specified format.

## Ticket 4: Update report generation to use custom Agent ids

Description: Modify the generateReport function to use the custom Agent ids instead of the internal database ids in the generated reports.

Acceptance Criteria:
- Modify the generateReport function to retrieve the custom Agent ids and use them when generating the PDF reports.

Effort Estimate: 6 hours

Implementation Details:
Update the logic in the generateReport function to fetch the custom Agent ids and use them in the generated reports.
Replace the internal database ids with the corresponding custom Agent ids in the report generation process.

## Ticket 5: Add Facility interface for managing custom Agent ids (optional)

Description: Implement a UI functionality for Facilities to add and manage custom ids for the Agents they work with.

Acceptance Criteria:
- Add a new section in the Facility interface to allow Facilities to add and edit custom ids for their Agents.
- Validate and handle input errors, such as duplicate custom ids.

Effort Estimate: 8 hours

Implementation Details:
Design and implement the UI components for managing custom ids.
Integrate the API to handle CRUD operations on custom ids.
Implement validation and error handling for the input fields to ensure data integrity.

