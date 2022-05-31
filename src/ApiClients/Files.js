export function GetFiles() {
	return fetch(`${process.env.REACT_APP_ENDPOINT}/Api/Files`).then((x) => x.json());
}
export function GetLink(fileName, baseUri, ui, landingPage) {
	var request = { apiBase: baseUri, fileName: fileName, uiLanguage: ui, exitLandingPageUrl: landingPage };
	console.log(request);
	return fetch(`${process.env.REACT_APP_ENDPOINT}/Api/Files/GetEditLink/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(request),
	}).then((x) => x.json());
}
export function Cancel(id) {
	return fetch(`${process.env.REACT_APP_ENDPOINT}/Api/Files/Cancel/` + id);
}

export function Create(baseUri) {
	var request = { BaseUri: `${baseUri}/Api/` };
	return fetch(`${process.env.REACT_APP_ENDPOINT}/Api/DynamicTemplate/Create/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(request),
	}).then((x) => x.json());
}
