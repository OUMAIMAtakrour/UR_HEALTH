import * as React from "react";

function Blog() {
    return (
        <div>
            <div className="self-end text-6xl font-medium text-black max-md:max-w-full max-md:text-4xl">
                RECENT ARTICLES
            </div>
            <div className="flex justify-between gap-1 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-1/2 [max-md:w-full">
                    <div className="flex flex-col px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="mt-24 max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div class="relative w-full bg-white  border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                    <img
                                        class="w-full h-auto rounded-xl"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/55f2b397e2cb0e5c86d58adeec4cffb4dda24f4bcc3bdc30094d3c3de3d3ad35?apiKey=37ec813b063f430c8cec37fffc22655e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f2b397e2cb0e5c86d58adeec4cffb4dda24f4bcc3bdc30094d3c3de3d3ad35?apiKey=37ec813b063f430c8cec37fffc22655e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f2b397e2cb0e5c86d58adeec4cffb4dda24f4bcc3bdc30094d3c3de3d3ad35?apiKey=37ec813b063f430c8cec37fffc22655e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f2b397e2cb0e5c86d58adeec4cffb4dda24f4bcc3bdc30094d3c3de3d3ad35?apiKey=37ec813b063f430c8cec37fffc22655e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f2b397e2cb0e5c86d58adeec4cffb4dda24f4bcc3bdc30094d3c3de3d3ad35?apiKey=37ec813b063f430c8cec37fffc22655e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f2b397e2cb0e5c86d58adeec4cffb4dda24f4bcc3bdc30094d3c3de3d3ad35?apiKey=37ec813b063f430c8cec37fffc22655e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f2b397e2cb0e5c86d58adeec4cffb4dda24f4bcc3bdc30094d3c3de3d3ad35?apiKey=37ec813b063f430c8cec37fffc22655e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f2b397e2cb0e5c86d58adeec4cffb4dda24f4bcc3bdc30094d3c3de3d3ad35?apiKey=37ec813b063f430c8cec37fffc22655e&"
                                        alt="Image Description"
                                    />
                                    <div class="absolute top-0 start-0 end-0">
                                        <div class="px-14 md:p-5 ">
                                            <h3 class="text-lg font-bold text-gray-800">
                                                Blog title
                                            </h3>

                                            <p class="mt-1 text-gray-800">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                            <p class="mt-5 text-xs text-gray-500">
                                                Last updated 5 mins ago
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative w-full bg-white  border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                    <img
                                        class="w-full h-auto rounded-xl"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/55f2b397e2cb0e5c86d58adeec4cffb4dda24f4bcc3bdc30094d3c3de3d3ad35?apiKey=37ec813b063f430c8cec37fffc22655e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f2b397e2cb0e5c86d58adeec4cffb4dda24f4bcc3bdc30094d3c3de3d3ad35?apiKey=37ec813b063f430c8cec37fffc22655e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f2b397e2cb0e5c86d58adeec4cffb4dda24f4bcc3bdc30094d3c3de3d3ad35?apiKey=37ec813b063f430c8cec37fffc22655e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f2b397e2cb0e5c86d58adeec4cffb4dda24f4bcc3bdc30094d3c3de3d3ad35?apiKey=37ec813b063f430c8cec37fffc22655e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f2b397e2cb0e5c86d58adeec4cffb4dda24f4bcc3bdc30094d3c3de3d3ad35?apiKey=37ec813b063f430c8cec37fffc22655e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f2b397e2cb0e5c86d58adeec4cffb4dda24f4bcc3bdc30094d3c3de3d3ad35?apiKey=37ec813b063f430c8cec37fffc22655e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f2b397e2cb0e5c86d58adeec4cffb4dda24f4bcc3bdc30094d3c3de3d3ad35?apiKey=37ec813b063f430c8cec37fffc22655e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f2b397e2cb0e5c86d58adeec4cffb4dda24f4bcc3bdc30094d3c3de3d3ad35?apiKey=37ec813b063f430c8cec37fffc22655e&"
                                        alt="Image Description"
                                    />
                                    <div class="absolute top-0 start-0 end-0">
                                        <div class="px-14 md:p-5 ">
                                            <h3 class="text-lg font-bold text-gray-800">
                                                Blog title
                                            </h3>

                                            <p class="mt-1 text-gray-800">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                            <p class="mt-5 text-xs text-gray-500">
                                                Last updated 5 mins ago
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-rows-4 grid-flow-col  aside mx-5">
                    <div>
                        <div className="card1 flex flex-col pt-6 pr-5 pb-2.5 pl-12 bg-white rounded-t-xl  max-md:pl-5 max-md:max-w-full">
                            <div className="flex  max-md:mx-2.5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6accc12673fe17a28e5486451e794ebd9d1b282ef99ec445418c54dc6793c1?apiKey=37ec813b063f430c8cec37fffc22655e&"
                                    className="shrink-0 aspect-[0.96] fill-white w-[26px]"
                                />
                                <div className="flex-auto my-auto text-xl font-semibold text-black">
                                    11 / 08 / 2004
                                </div>
                                <div className="flex-auto text-sm text-black underline">
                                    Title experience
                                </div>
                            </div>
                            <div className="mt-5 text-lg font-light text-black">
                                We strive to create a welcoming and supportive
                                environment that puts our patient ease.
                            </div>
                            <div className="flex gap-5 self-end mt-2 text-sm font-light text-black">
                                <div>More details</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6540cddffcb33bd78f1eab39fc185359646a75335a344f5f2c205ed663e8786b?apiKey=37ec813b063f430c8cec37fffc22655e&"
                                    className="shrink-0 self-start mt-1 aspect-[3.13] fill-black w-[25px]"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        {" "}
                        <div className="flex flex-col px-11 pt-6 pb-3.5 mt-5 bg-blue-300 max-md:px-5 max-md:max-w-full">
                            <div className="flex gap-5 mx-3.5 max-md:mx-2.5">
                                <div className="flex gap-5 items-start text-xl font-semibold text-white">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6accc12673fe17a28e5486451e794ebd9d1b282ef99ec445418c54dc6793c1?apiKey=37ec813b063f430c8cec37fffc22655e&"
                                        className="shrink-0 mt-1 aspect-[0.96] fill-white w-[26px]"
                                    />
                                    <div className="flex-auto">
                                        11 / 08 / 2004
                                    </div>
                                </div>
                                <div className="flex-auto my-auto text-sm text-black underline">
                                    Title experience
                                </div>
                            </div>
                            <div className="mt-3.5 text-lg font-light text-white">
                                We strive to create a welcoming and supportive
                                environment that puts our patient ease.
                            </div>
                            <div className="flex gap-5 self-end mt-2 text-sm font-light text-black">
                                <div>More details</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/419357cef4b5fc042005cbe63924f7fbddce7448e5332047e7bf409080bd87d6?apiKey=37ec813b063f430c8cec37fffc22655e&"
                                    className="shrink-0 self-start mt-1 w-6 aspect-[3.03] fill-black"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex card2 flex-col px-11 py-5 mt-7 bg-green-700 rounded-b-xl  max-md:px-5 max-md:max-w-full">
                            <div className="flex gap-5 mx-3.5 max-md:mx-2.5">
                                <div className="flex gap-5 text-xl font-semibold text-white">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6accc12673fe17a28e5486451e794ebd9d1b282ef99ec445418c54dc6793c1?apiKey=37ec813b063f430c8cec37fffc22655e&"
                                        className="shrink-0 aspect-[0.96] fill-white w-[26px]"
                                    />
                                    <div className="flex-auto">
                                        11 / 08 / 2004
                                    </div>
                                </div>
                                <div className="flex-auto my-auto text-sm text-black underline">
                                    Title experience
                                </div>
                            </div>
                            <div className="mt-4 text-lg font-light text-white">
                                We strive to create a welcoming and supportive
                                environment that puts our patient ease.
                            </div>
                            <div className="flex gap-5 self-end mt-2 text-sm font-light text-black">
                                <div>More details</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/419357cef4b5fc042005cbe63924f7fbddce7448e5332047e7bf409080bd87d6?apiKey=37ec813b063f430c8cec37fffc22655e&"
                                    className="shrink-0 self-start mt-1 w-6 aspect-[3.03] fill-black"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
