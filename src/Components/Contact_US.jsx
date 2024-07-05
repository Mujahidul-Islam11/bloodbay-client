import Lottie from "lottie-react";
import contact from "../../public/contact.json"

const Contact_US = () => {
  return (
    <div className="flex flex-col justify-center items-center my-16">
      <header className="mb-6 md:mb-10">
      <h1 className="text-3xl md:text-4xl text-center text-gray-800 font-extrabold">
      Connect with Us
      </h1>
      </header>
      <main className="flex flex-col-reverse md:flex-row mx-8 md:mx-16 justify-center gap-4 md:gap-20">
        <section className="w-full md:w-1/3">
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
        <section className="w-full md:w-1/2 object-cover">
        <Lottie animationData={contact} />
        </section>
      </main>
    </div>
  );
};

export default Contact_US;
