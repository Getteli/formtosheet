var sheetName = 'leads_formulario';
var scriptProp = PropertiesService.getScriptProperties();

const intialSetup = (e = {}) =>
{
	var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
	scriptProp.setProperty('key', activeSpreadsheet.getId())
}

const doPost = (e = {}) =>
{
	const { parameter, postData: { contents, type } = {} } = e;
	const { source } = parameter;
	var lock = LockService.getScriptLock()
	lock.tryLock(10000)

	try
	{
		// esse id é o id da planilha (abra a planilha em uma aba ao lado e veja o id na url)
		var sheet = SpreadsheetApp.openById("1_GIDaX6VFDtRXnj4KdH457d9UtvtP8rhU_ZJtUeROJU").getActiveSheet();
		var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
		var nextRow = sheet.getLastRow() + 1

		const columns = JSON.parse(contents);

		var newRow = sheet.appendRow([
			new Date(), // timestamp
			columns.email,
			columns.primeiro_nome,
			columns.ultimo_nome,
			columns.telefone,
		])
	
		return ContentService
			.createTextOutput(JSON.stringify({ 'result': 'success'}))
			.setMimeType(ContentService.MimeType.JSON)
	}
	catch (e)
	{
		return ContentService
			.createTextOutput(JSON.stringify({ 'result': 'error', 'error': e.message }))
			.setMimeType(ContentService.MimeType.JSON)
	}
	finally
	{
		lock.releaseLock()
	}
}