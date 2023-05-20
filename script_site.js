// clique em implantar (no script.google) para obter a url
const scriptURL = 'https://script.google.com/macros/s/123HASH/exec';
const form = document.forms['submit-to-google-sheet']; // formulario no index

form.addEventListener('submit', e =>
{
	e.preventDefault();

	var formData = new FormData(form);
	var data = {};

	for (var [key, value] of formData.entries())
	{
		data[key] = value;
	}
	data_result = JSON.stringify(data);

	fetch(scriptURL, { method: 'POST', body: data_result})
	.then(response =>
	{
		alert("Feito! formulario adicionado a planilha.");
	})
	.catch(error =>
	{
		alert("Ops. Não conseguimos receber o formulário, tente novamente ou verifique o problema");
		console.error(error);
	})
});