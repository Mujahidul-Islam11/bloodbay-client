const MyDonationReq = () => {
  return (
    <div className="mx-auto h-screen">
      <header>
        <h1 className="text-3xl text-center text-gray-800 lato-bold-700">
          All Donation, <span className="text-[#FF0563]">Requests!</span>
        </h1>
      </header>
      <main className="my-12 px-12">
      <div className="overflow-x-auto border rounded-md">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Recipient Name</th>
              <th>Recipient Location</th>
              <th>Donation Date</th>
              <th>Donation Time</th>
              <th>Donation Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Kazi Newaz</div>
                  </div>
                </div>
              </td>
              <td>
                <h3>Rangunia, Chattogram</h3>
              </td>
              <td>6/22/2024</td>
              <td>6:00 PM</td>
              <td>
                <h2 className="bg-green-600 text-white text-center py-2">
                  In-Progress
                </h2>
              </td>
              <th>
                <button className="btn btn-sm bg-blue-600 text-white hover:bg-blue-400">
                  Edit
                </button>
              </th>
              <th>
                <button className="btn btn-sm bg-red-600 text-white hover:bg-red-400">
                  Remove
                </button>
              </th>
              <th>
                <button className="btn btn-sm bg-green-600 text-white hover:bg-green-400">
                  View
                </button>
              </th>
            </tr>
          </tbody>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Shawon</div>
                  </div>
                </div>
              </td>
              <td>
                <h3>Rangunia, Chattogram</h3>
              </td>
              <td>6/22/2024</td>
              <td>6:00 PM</td>
              <td>
                <h2 className="bg-yellow-500 text-white text-center py-2">
                  Pending
                </h2>
              </td>
              <th>
                <button className="btn btn-sm bg-blue-600 text-white hover:bg-blue-400">
                  Edit
                </button>
              </th>
              <th>
                <button className="btn btn-sm bg-red-600 text-white hover:bg-red-400">
                  Remove
                </button>
              </th>
              <th>
                <button className="btn btn-sm bg-green-600 text-white hover:bg-green-400">
                  View
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      </main>
    </div>
  );
};

export default MyDonationReq;
