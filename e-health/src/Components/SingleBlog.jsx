import React from "react";

const articleData = {
    title: "The GameStop Stock Frenzy Is Turning Into A Cautionary Tale For Fintech",
    author: "Jennifer Tescher",
    authorRole: "Founder and CEO, Financial Health Network",
    date: "04 Jun 2018",
    thumbnail: "src/assets/img/brain-lateral.png",
    content:
        "<p>When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.When a crusading group of retail traders decided last week to bid up the price of GameStop GME 11.8% shares, the target was Wall Street. Empowered by Reddit and the commission-free trades of Robinhood's online trading app, they succeeded in putting the squeeze on hedge funds that had shorted GameStop. They also unknowingly squeezed Robinhood.</p>",
};

const SingleArticle = ({ article }) => {
    const { title, author, authorRole, date, thumbnail, content } = article;

    return (
        <div className="w-full mx-auto  py-8 px-10">
            <section className="">
                <div className="container mx-auto">
                    <div className="mx-auto max-w-3xl  text-center"></div>
                </div>
            </section>

            <div className="w-full mx-4">
                <figure className="mb-8 flex justify-around gap-3 my-10 ">
                    <div className="flex flex-col justify-between">
                        <div className="flex gap-2 ">
                            <span className="text-blue-800 font-bold">
                                CATEGORY
                            </span>

                            <span className="text-gray-500 font-thin">
                                {date}
                            </span>
                        </div>

                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-yesevaOne my-10">
                            {title}
                        </h1>
                        <div className="flex  my-4  space-x-4 text-gray-500 font-cormorantGaramond">
                            <img
                                src="src/assets/img/65c44dca69cab286ae15dc81d0e5a6b9.jpg"
                                alt=""
                                className="rounded-full w-10 h-10 object-cover bg-cover "
                            />
                            <div className="flex flex-col">
                                {" "}
                                <span className="text-blue-800 font-bold">
                                    {author}
                                </span>
                                <span className="">{authorRole}</span>
                            </div>
                        </div>
                    </div>

                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-1/2 h-2/3 mx-8 rounded-lg thumbnail"
                    />
                </figure>
                <div
                    className="article-content font-cormorantGaramond leading-loose mx-10 my-16"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    );
};

const SingleBlog = () => {
    return (
        <div>
            <SingleArticle article={articleData} />
        </div>
    );
};

export default SingleBlog;
