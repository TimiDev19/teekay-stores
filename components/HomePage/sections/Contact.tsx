const Contact = () => {
  return (
    <section
      id="contact"
      className=" lg:h-[90vh] flex flex-col lg:flex-row items-center justify-center pt-20"
    >
      <div className=" w-full h-full lg:w-[50%] text-center">
        <h1 className="upperase text-4xl lg:text-6xl mb-4 tangerine">
          Contact Us
        </h1>
        <div className=" w-[90%] m-auto lg:w-[80%] flex items-center justify-center">
          <form
            action=""
            className=" w-[80%] m-auto h-[50%] lg:h-[90%] text-orange-500"
          >
            <div className=" flex flex-col lg:flex-row items-center justify-between mt-6">
              <input
                type="text"
                placeholder="Name"
                required
                className=" w-full mb-4 lg:mb-0 lg:w-[45%] border border-slate-300 px-2 py-3 placeholder:text-sm focus:outline-none focus:border-orange-500 focus:border-2 "
              />

              <input
                type="email"
                placeholder="Email"
                required
                className=" w-full mb-4 lg:mb-0 lg:w-[45%] border border-slate-300 px-2 py-3 placeholder:text-sm focus:outline-none focus:border-orange-500 focus:border-2 "
              />
            </div>

            <div className=" flex flex-col lg:flex-row items-center justify-between lg:mt-6">
              <input
                type="text"
                placeholder="Phone number"
                required
                className=" w-full mb-4 lg:mb-0 lg:w-[45%] border border-slate-300 px-2 py-3 placeholder:text-sm focus:outline-none focus:border-orange-500 focus:border-2 "
              />

              <input
                type="email"
                placeholder="Subject"
                required
                className=" w-full mb-4 lg:mb-0 lg:w-[45%] border border-slate-300 px-2 py-3 placeholder:text-sm focus:outline-none focus:border-orange-500 focus:border-2 "
              />
            </div>

            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Message"
              required
              className=" w-full lg:mt-6 border border-slate-300 px-2 py-3 placeholder:text-sm focus:outline-none focus:border-orange-500 focus:border-2 "
            ></textarea>

            <button className=" w-full py-4 text-white bg-black mt-4  mb-5">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className=" h-full w-full lg:w-[50%] map"></div>
    </section>
  );
};

export default Contact;
