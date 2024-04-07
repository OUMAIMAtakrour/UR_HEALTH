




function CallToAction() {
    return (
      <div className="mx-4 calltoaction">
      <div  id="doctor" className="flex flex-col pr-1.5 pb-11 pl-20 mt-80 w-full rounded-2xl max-w-[1467px] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="z-10 mt-0 max-md:max-w-full">
          <div className="flex justify-between  max-md:flex-col max-md:gap-0" >
            <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-56 max-md:mt-10 max-md:max-w-full">
                <h2 className="text-7xl font-semibold text-zinc-100 max-md:max-w-full max-md:text-4xl">
                  Don't Let Your Health <br /> Take a Backseat!
                </h2>
                <p className="self-start mt-10 ml-4 text-2xl font-medium text-blue-900 text-opacity-90 max-md:max-w-full">
                  Schedule an appointment with one of our <br /> experienced medical professional today!
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a92751bb29279779beae1c29ec41a5294c658d039e446477f6ef8383574c3236?apiKey=37ec813b063f430c8cec37fffc22655e&"
                alt="A doctor examining a patient"
                className="grow w-full col-5 rounded-full border-2 border-solid aspect-[0.96] border-zinc-300 max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <button className="justify-center self-start px-5 my-6 py-4 ml-2.5 text-xl font-medium text-white bg-indigo-500 rounded-xl">
          Book Now &gt;
        </button>
      </div>
      </div>
    );
  }
  
  export default CallToAction