import { DownloadIcon, TrashIcon, PencilIcon, StopIcon, UsersIcon, DocumentIcon } from "@heroicons/react/outline";
import word from "../Assets/word.png";
import excel from "../Assets/excel.png";
import powerpoint from "../Assets/powerpoint.png";
import { GetFiles, GetLink, Cancel, Create, Delete } from "../ApiClients/Files";
import { useState, useEffect } from "react";
import ConfirmDialog from "./ConfirmDialog";
export default function ListView() {
	const [files, setFiles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [fileToDelete, setFileToDelete] = useState(null);
	const [newFile, setNewFile] = useState("");

	useEffect(() => {
		setLoading(true);
		GetFiles().then((x) => {
			setFiles(x);
			setLoading(false);

			var urlParams = new URLSearchParams(window.location.search);

			var filename = urlParams.get("file");
			setNewFile(filename);
			console.log(filename);
		});
		setInterval(() => GetFiles().then((x) => setFiles(x)), 10000);
	}, []);

	function GetIcon(filename) {
		if (filename.indexOf(".docx") > 0) return word;
		if (filename.indexOf(".xlsx") > 0) return excel;
		if (filename.indexOf(".pptx") > 0) return powerpoint;
	}

	const edit = (filename) => {
		setLoading(true);
		var baseUri = window.location.origin;

		GetLink(filename, baseUri, "da-DK", baseUri).then((x) => {
			window.open(x.url);
			GetFiles().then((x) => setFiles(x));
			setLoading(false);
		});
	};

	const onCreateClick = () => {
		var baseUri = window.location.origin;
		Create(baseUri).then((x) => window.open(x.url));
	};
	const deleteitem = (filename) => {
		Delete(filename)
			.then((x) => GetFiles())
			.then((x) => setFiles(x))
			.then((x) => setFileToDelete(null));
	};

	return (
		<div>
			<ConfirmDialog show={fileToDelete === null ? false : true} headLine="Confirm delete" message={`Confirm delete of ${fileToDelete}`} onCancel={() => setFileToDelete(null)} onConfirm={() => deleteitem(fileToDelete)}></ConfirmDialog>
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-xl font-semibold text-gray-900">
							<div className="flex flex-row">
								<DocumentIcon className="h-5 w-5 mt-1"></DocumentIcon>
								<div className="-pt-2">User information</div>
							</div>
						</h1>
						<p className="mt-2 text-sm text-gray-700">A list of all the documents.</p>
					</div>
					<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
						<button
							onClick={() => onCreateClick()}
							type="button"
							className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
						>
							Add document
						</button>
					</div>
				</div>
				<div className="mt-5 h-5">{loading ? <div>Loading</div> : null}</div>
				<div className="mt-8 flex flex-col">
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
								<table className="min-w-full divide-y divide-gray-300">
									<thead className="bg-gray-50">
										<tr>
											<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
												Name
											</th>
											<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
												Created
											</th>
											<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
												Size
											</th>
											<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 justify-center">
												Edit
											</th>
											<th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
												<span className="sr-only">Edit</span>
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 bg-white">
										{files.map((item, key) => (
											<tr key={key}>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
													<div className="flex items-center">
														<div className="h-10 w-10 flex-shrink-0">
															<img className="h-8 w-8 rounded-full" src={GetIcon(item.baseFileName)} alt="" />
														</div>
														<div className="ml-4">
															<div className="font-medium text-gray-900">{item.baseFileName}</div>
															<span className="inline-flex mt-1 rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800">{newFile === item.baseFileName ? "New" : null}</span>
														</div>
													</div>
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													<span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
														<span>{new Date(item.createdOn).toDateString()}</span>
														<span className="ml-2">{new Date(item.createdOn).toLocaleTimeString()}</span>
													</span>
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.size}</td>
												<td>
													<div className="flex flex-row mt-5 gap-x-5 justify-center">
														{item.chedkedOut ? (
															<div>
																<button alt="Undo checkout" title="Undo checkout" className="text-indigo-600 hover:text-indigo-900 " onClick={() => Cancel(item.baseFileName).then(GetFiles().then((x) => setFiles(x)))}>
																	<StopIcon className="h-5 w-5" />
																</button>
															</div>
														) : null}
														<div>
															<button title={item.chedkedOut ? "Co-edit" : "edit"} className="text-indigo-600  hover:text-indigo-900" onClick={() => edit(item.baseFileName)}>
																{item.chedkedOut ? <UsersIcon className="h-5 w-5" /> : <PencilIcon className="h-5 w-5" />}
															</button>
														</div>
													</div>
												</td>
												<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
													<div className="flex flex-row mt-5 gap-x-5">
														<div>
															<button href="#" className="text-indigo-600 hover:text-indigo-900 ">
																<DownloadIcon className="h-5 w-5" />
															</button>
														</div>
														<div>
															<button className="text-indigo-600 hover:text-indigo-900" onClick={() => setFileToDelete(item.baseFileName)}>
																<TrashIcon className="h-5 w-5" />
															</button>
														</div>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
