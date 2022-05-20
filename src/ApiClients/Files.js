export function GetFiles() {
	return fetch(`${process.env.REACT_APP_ENDPOINT}/Files`).then((x) => x.json());
}

export function GetLink(filename) {
	return fetch(`${process.env.REACT_APP_ENDPOINT}/Files/GetEditLink/` + filename).then((x) => x.json());
}
export function Cancel(id) {
	return fetch(`${process.env.REACT_APP_ENDPOINT}/Files/Cancel/` + id);
}
