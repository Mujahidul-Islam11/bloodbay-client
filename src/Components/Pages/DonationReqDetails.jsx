const DonationReqDetails = () => {
  return (
    <div className="md:h-screen flex flex-col justify-center items-center py-24">
      <header className="mb-8 mt-12">
        <h3 className="text-center text-3xl text-capitalize ">
          Donation <span className="text-[#FF0563]">Information!</span>
        </h3>
      </header>
      <main className="mx-4 md:w-3/4 border p-6">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <h3 id="name" className="border p-2">
              Mohammad Mojahidul Islam
            </h3>
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <h3 id="email" className="border p-2">
              Mojahidul@gmail.com
            </h3>
          </div>
          <div className="">
            <label
              htmlFor="district"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              District
            </label>
            <h3 id="district" className="border p-2">
              Chattogram
            </h3>
          </div>
          <div className="">
            <label
              htmlFor="upazila"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Upazila
            </label>
            <h3 id="upazila" className="border p-2">
              Rangunia
            </h3>
          </div>
          <div className="">
            <label
              htmlFor="donationTime"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Donation Time
            </label>
            <h3 id="donationTime" className="border p-2">
              8:00pm
            </h3>
          </div>
          <div className="">
            <label
              htmlFor="donationDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Donation Date
            </label>
            <h3 id="donationDate" className="border p-2">
              09/12/2024
            </h3>
          </div>
          <div className="">
            <label
              htmlFor="hospitalName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Hospital Name
            </label>
            <h3 id="hospitalName" className="border p-2">
              Chattogram hospital
            </h3>
          </div>
          <div className="">
            <label
              htmlFor="recipientName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Recipient Name
            </label>
            <h3 id="recipientName" className="border p-2">
              Kazi Misba
            </h3>
          </div>
          <div className="">
            <label
              htmlFor="bloodGroup"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Blood Group
            </label>
            <h3 id="bloodGroup" className="border p-2">
              B+
            </h3>
          </div>
          <div className="">
            <label
              htmlFor="fulladdress"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Address
            </label>
            <h3 id="fulladdress" className="border p-2">
              Rangunia, Dhamairhat
            </h3>
          </div>
          <div className="">
            <label
              htmlFor="donationStatus"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Donation Status
            </label>
            <h3 id="donationStatus" className={`border p-2 bg-yellow-500 text-white`}>
              Pending
            </h3>
          </div>
        </section>
        <div className="mt-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Message
          </label>
          <h3 id="message" className="border p-2">
            Need emergency blood for my brother.
          </h3>
        </div>
      </main>
    </div>
  );
};

export default DonationReqDetails;
