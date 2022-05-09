import { DownloadIcon, TrashIcon, PencilIcon, UserIcon } from "@heroicons/react/outline";
import word from "../Assets/word.png";
import excel from "../Assets/excel.png";
import powerpoint from "../Assets/powerpoint.png";

const people = [
  {
    id: "",
    name: "Indkaldelse.docx",
    status: "Checked-Out",
    role: "Member",
    image: word,
  },
  {
    id: "",
    name: "Budget.xlsx",
    status: "Checked-Out",
    role: "Member",
    image: excel,
  },
  {
    id: "",
    name: "Kick off 2022.pptx",
    status: "Checked-Out",
    role: "Member",
    image: powerpoint,
  },
];

function GetIcon(filename) {
  if (filename.indexOf(".docx") > 0) return word;
  if (filename.indexOf(".xlsx") > 0) return excel;
  if (filename.indexOf(".pptx") > 0) return powerpoint;
}
export default function ListView() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Documents</h1>
          <p className="mt-2 text-sm text-gray-700">A list of all the documents.</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
            Add document
          </button>
        </div>
      </div>
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
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-8 w-8 rounded-full" src={GetIcon(person.name)} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{person.name}</div>
                            <div className="text-gray-500">{person.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">{person.status}</span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <div className="flex flex-row mt-5 gap-x-5">
                          <div>
                            <a href="#" className="text-indigo-600 hover:text-indigo-900 ">
                              <DownloadIcon className="h-5 w-5" />
                            </a>
                          </div>
                          <div>
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              <PencilIcon className="h-5 w-5" />
                            </a>
                          </div>
                          <div>
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              <TrashIcon className="h-5 w-5" />
                            </a>
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
  );
}
