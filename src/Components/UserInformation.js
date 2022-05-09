export default function UserInformation() {
  return (
    <div className="w-2/5 border border-indigo-100 rounded-md m-8 shadow bg-gray-50 ">
      <h1 className="text-xl font-semibold text-gray-900 mt-5 ml-4">User information</h1>
      <div className="flex flex-row m-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Given name
          </label>
          <div className="mt-1">
            <input type="text" name="givenname" id="givenname" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="ml-5 grow">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Sure name
          </label>
          <div className="mt-1">
            <input type="text" name="surename" id="surename" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
      </div>
      <div className="flex flex-row m-5">
        <div className="grow ">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input type="text" name="surename" id="surename" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
        </div>
      </div>
      <div className="flex flex-row m-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Zip code
          </label>
          <div className="mt-1">
            <input type="text" name="givenname" id="givenname" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="ml-5 grow">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <div className="mt-1 ">
            <input type="text" name="surename" id="surename" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
