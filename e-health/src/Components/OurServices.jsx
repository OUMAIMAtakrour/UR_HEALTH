function OurServices() {
    const imageLinks = [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7690dd5ee961e3e0afeb92ecead2760498bcbd6f432a5b3188c39988d96ff519?apiKey=37ec813b063f430c8cec37fffc22655e",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4cbcae40c61ed716ecc8357cdf9862c1039ce0ed787f268e819a32ca6a593ffc?apiKey=37ec813b063f430c8cec37fffc22655e",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8534e4316c23a0cc6b7fa42ddace242999b2fbbd1ae8402a4c4756f8f20e5f66?apiKey=37ec813b063f430c8cec37fffc22655e"
    ];
  
    const colors = {
      
      textColor: "text-black",
      buttonColor: "bg-blue-300 text-white"
    };
  
    return (
      <div className={`flex flex-col py-20 `}>
        <div className="back-color text-center">
          <div className=" text-6xl font-bold text-indigo-700 max-md:text-4xl">
            Our Services
          </div>
          <div className="flex justify-center items-center px-16 mt-48 w-full rounded-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="z-10 -mt-14 -mb-10 w-full max-w-[1296px] max-md:mb-2.5 max-md:max-w-full">
              <div className="grid grid-cols-3 gap-12 max-md:flex-col max-md:gap-0">
             
                  <div className="flex flex-col grow px-5 py-5 mx-auto w-full bg-white rounded-3xl shadow-sm max-md:pl-5 max-md:mt-10">
                    <div className="flex gap-5 justify-between w-full">
                      <img
                        loading="lazy"
                        srcSet={`${imageLinks[0]}?width=100 100w, ${imageLinks[0]}?width=200 200w, ${imageLinks[0]}?width=400 400w, ${imageLinks[0]}?width=800 800w, ${imageLinks[0]}?width=1200 1200w, ${imageLinks[0]}?width=1600 1600w, ${imageLinks[0]}?width=2000 2000w, ${imageLinks[0]}?`}
                        className="shrink-0 aspect-[0.92] w-[93px]"
                      />
                      <div className="flex gap-0 self-start mt-1">
                        <div className="z-10 shrink-0 my-auto h-2" />
                        <div className="shrink-0 w-2 h-9" />
                      </div>
                    </div>
                    <div className={`mt-14 text-3xl ${colors.textColor} max-md:mt-10`}>
                      Make an appointment
                    </div>
                    <div className={`justify-center self-end px-5 py-4 mt-16 text-xl ${colors.buttonColor} rounded-xl max-md:pr-5 max-md:mt-10`}>
                      Learn more
                    </div>
                  </div>
                
             
                  <div className="flex flex-col grow px-4 pt-0.5 pb-5 mx-auto w-full bg-white rounded-3xl shadow-sm max-md:mt-10">
                    <div className="flex gap-5 justify-between w-full">
                      <img
                        loading="lazy"
                        srcSet={`${imageLinks[1]}?width=100 100w, ${imageLinks[1]}?width=200 200w, ${imageLinks[1]}?width=400 400w, ${imageLinks[1]}?width=800 800w, ${imageLinks[1]}?width=1200 1200w, ${imageLinks[1]}?width=1600 1600w, ${imageLinks[1]}?width=2000 2000w, ${imageLinks[1]}?`}
                        className="shrink-0 aspect-[0.87] w-[99px]"
                      />
                      <div className="flex gap-0 self-start mt-5">
                        <div className="z-10 shrink-0 my-auto h-2" />
                        <div className="shrink-0 w-2 h-9" />
                      </div>
                    </div>
                    <div className={`mt-16 text-3xl ${colors.textColor} max-md:mt-10`}>
                      Online Pharmacy
                    </div>
                    <div className={`justify-center self-end px-5 py-4 mt-16 text-xl ${colors.buttonColor} rounded-xl max-md:pr-5 max-md:mt-10`}>
                      Learn more
                    </div>
                  </div>
             
              
                  <div className="flex flex-col grow shadow-xl px-3.5 pb-5 mx-auto w-full bg-white rounded-3xl shadow-sm max-md:mt-10">
                    <div className="flex z-10 gap-5 justify-between w-full">
                      <img
                        loading="lazy"
                        srcSet={`${imageLinks[2]}?width=100 100w, ${imageLinks[2]}?width=200 200w, ${imageLinks[2]}?width=400 400w, ${imageLinks[2]}?width=800 800w, ${imageLinks[2]}?width=1200 1200w, ${imageLinks[2]}?width=1600 1600w, ${imageLinks[2]}?width=2000 2000w, ${imageLinks[2]}?`}
                        className="shrink-0 max-w-full aspect-[0.95] w-[108px]"
                      />
                      <div className="flex gap-0 self-start mt-6">
                        <div className="z-10 shrink-0 my-auto h-2" />
                        <div className="shrink-0 w-2 h-9" />
                      </div>
                    </div>
                    <div className={`mt-16 text-3xl ${colors.textColor} max-md:mt-10`}>
                      Doctor's Community
                    </div>
                    <div className={`justify-center self-end px-5 py-4 mt-16 text-xl ${colors.buttonColor} rounded-xl max-md:pr-5 max-md:mt-10`}>
                      Learn more
                    </div>
                  </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default OurServices