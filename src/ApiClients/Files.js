export function GetFiles() {
  return fetch(`https://${process.env.REACT_APP_ENDPOINT}/Files`).then((x) => x.json());
}
