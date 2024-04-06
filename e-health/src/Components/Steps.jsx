
import React from 'react';
import StepCard from '../Components/StepCard';

function Steps() {
    const steps = [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb36840ab04ab63167480d68fd1399663400c14885725b1476578e02a838dc7c?apiKey=37ec813b063f430c8cec37fffc22655e&",
        title: "Search For Doctor",
        description:
          "We are committed to providing you with the best medical and healthcare services to help you live healthier and happier",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a67c24ba817e2bbcc7a7f76a0e456c367d8c41785a99e16b91f169ea54f2637?apiKey=37ec813b063f430c8cec37fffc22655e&",
        title: "Request Consultation",
        description:
          "We are committed to providing you with the best medical and healthcare services to help you live healthier and happier",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/67e5268f928b2b9f827994d38f45e03a94a107e07084dfdeee2fdc2c7a0fe973?apiKey=37ec813b063f430c8cec37fffc22655e&",
        title: "Make Appointment",
        description:
          "We are committed to providing you with the best medical and healthcare services to help you live healthier and happier",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8fcdd40a4fbad08cf4ddc80fb0ebcfee0075fe99ca5a5a871322be1c74d71540?apiKey=37ec813b063f430c8cec37fffc22655e&",
        title: "Drug Notificatio",
        description:
          "We are committed to providing you with the best medical and healthcare services to help you live healthier and happier",
      },
    ];
  
    return (
      <section>
        <h2 className="mt-40 text-6xl font-bold text-center text-indigo-700 leading-[72px] w-[675px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
          Easy steps for your solution
        </h2>
        <div className="px-5 mt-14 w-full max-w-[1269px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
              >
                <StepCard {...step} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

export default Steps;