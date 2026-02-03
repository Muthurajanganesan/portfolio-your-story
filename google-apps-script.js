// Copy this code into your Google Apps Script project (Extensions > Apps Script in Google Sheets)

function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Get parameters from the request
    var data = e.parameter;

    // Add a new row with timestamp and form data
    sheet.appendRow([
        new Date(),
        data.name,
        data.email,
        data.phone,
        data.address
    ]);

    // Return a success JSON response
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
        .setMimeType(ContentService.MimeType.JSON);
}
