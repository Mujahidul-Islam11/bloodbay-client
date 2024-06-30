const How_It_Works = () => {
  return (
    <div className="flex flex-col justify-center items-center my-16">
      <header className="mb-10">
      <h1 className="text-3xl md:text-4xl text-center text-gray-800 font-extrabold">
      How It Works
      </h1>
      </header>
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-4 text-center">
              <img
                src="./step-1.svg"
                width={120}
                height={120}
                alt="Register"
                className="rounded-full bg-muted p-4 border shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold">Register</h3>
                <p className="text-muted-foreground">
                  Sign up and create your profile to start donating blood.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
              <img
                src="./step-2.svg"
                width={120}
                height={120}
                alt="Search"
                className="rounded-full bg-muted p-4 border shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold">Search</h3>
                <p className="text-muted-foreground">
                  Find nearby blood donation centers and schedule an
                  appointment.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
              <img
                src="./step-3.svg"
                width={120}
                height={120}
                alt="Donate"
                className="rounded-full bg-muted p-4 border shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold">Donate</h3>
                <p className="text-muted-foreground">
                  Visit the donation center and donate your blood to save lives.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
              <img
                src="./step-4.svg"
                width={120}
                height={120}
                alt="Save Lives"
                className="rounded-full bg-muted p-4 border shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold">Save Lives</h3>
                <p className="text-muted-foreground">
                  Your donation can help patients in need and make a real
                  difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default How_It_Works;
