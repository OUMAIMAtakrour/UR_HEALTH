
function Hero() {
    return (
      <section className="back-color mx-5 pl-14 mt-32 max-w-full rounded-3xl w-[1363px] max-md:pl-5 max-md:mt-10">
        <div className=" flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
              <h1 className="text-6xl font-bold text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                A Complete Health Care Solution App
              </h1>
              <p className="mx-4 mt-8 text-xl text-blue-900 max-md:mr-2.5 max-md:max-w-full">
                We are committed to providing you with the best medical and healthcare services to help you live healthier and happier
              </p>
              <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full ">
                    <div className="flex flex-col grow px-5 py-11 mx-auto w-full text-white rounded-3xl bg-blue-300  bg-opacity-30 max-md:pr-5 max-md:mt-10">
                      <h2 className="text-4xl font-semibold">Heath + Lifeline</h2>
                      <a
                        href="tel:1860-500-1066"
                        className="flex gap-3 px-6 py-1.5 mt-2.5 text-white text-2xl font-medium whitespace-nowrap rounded-2xl border-2 border-white border-solid"
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b432cb591b4d011fa7a847841418b94e35926d33f8fa73c04366ea82188eabe?apiKey=37ec813b063f430c8cec37fffc22655e&"
                          alt=""
                          className="shrink-0 aspect-[0.61] fill-blue-900 w-[19px]"
                        />
                        <span className="flex-auto my-auto">1860-500-1066</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-9 pt-12 pb-6 mx-auto w-full text-white whitespace-nowrap rounded-3xl bg-blue-300 bg-opacity-30 max-md:px-5 max-md:mt-10">
                      <h2 className="text-4xl font-semibold">EMERGENCY</h2>
                      <a
                        href="tel:1066"
                        className="flex gap-5 self-start px-5 py-2 mt-4 ml-3.5 text-3xl font-medium rounded-2xl border-2 border-white border-solid max-md:ml-2.5"
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f181f7ec51f10fd2993ede8bf0a7434cfb6a17f6f7ac2a159519992f50f0e5bc?apiKey=37ec813b063f430c8cec37fffc22655e&"
                          alt=""
                          className="shrink-0 aspect-[0.71] fill-blue-900 w-[22px]"
                        />
                        <span className="my-auto">1066</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee115acefa10ecbed63e15a890c39f69eb61a3b24203e8e3daa47b1e9ca7130f?apiKey=37ec813b063f430c8cec37fffc22655e&"
              alt="A doctor examining a patient"
              className="z-10 self-stretch my-auto w-full aspect-[0.96] max-md:mt-0 max-md:max-w-full"
            />
          </div>
        </div>
      </section>
    );
  }

  export default Hero