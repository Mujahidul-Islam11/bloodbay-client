const Contact_US = () => {
  return (
    <div className="w-full max-w-md mx-auto ">
      <header className="">
      <h1 className="text-3xl md:text-4xl text-center text-gray-800 font-extrabold">
      Connect with Us
      </h1>
      </header>
      <main>
        <section>
          <div className="border p-4 rounded-lg">
            <div className="">
              <form onSubmit={e => e.preventDefault()} className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name">Name</label>
                  <input id="name" placeholder="Enter your name"
                  className="border py-2 px-3 rounded-md" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="border py-2 px-3 rounded-md"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[150px] border py-2 px-3 rounded-md"
                  />
                </div>
                <button className="w-full text-white bg-[#FF0563] py-2 rounded-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
        <section>

        </section>
      </main>
    </div>
  );
};

export default Contact_US;
