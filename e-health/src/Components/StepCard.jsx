
function StepCard({ icon, title, description }) {
    return (
      <div className="flex flex-col grow mt-6 max-md:mt-10">
        <div className="flex justify-center items-center self-center px-9 py-8 max-w-full rounded-2xl border-sky-700 border-solid border-[3px] w-[164px] max-md:px-5">
          <img loading="lazy" src={icon} alt="" className="w-full aspect-[0.93]" />
        </div>
        <h3 className="mt-9 text-3xl font-bold leading-9 text-center text-indigo-800">{title}</h3>
        <p className="mt-7 text-xs text-center text-blue-900">{description}</p>
      </div>
    );
  }

  export default StepCard