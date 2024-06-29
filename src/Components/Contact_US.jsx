const Contact_US = () => {
  return (
    <div>
      <header></header>
      <main>
        <section>
          <div className="w-full max-w-md mx-auto">
            <div className="card-header">
              <h2>Contact Us</h2>
              <p>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>
            <div className="card-content">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name">Name</label>
                  <input id="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[150px]"
                  />
                </div>
                <button type="submit" className="w-full">
                  Send
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
