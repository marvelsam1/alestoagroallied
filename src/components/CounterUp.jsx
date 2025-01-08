import React from "react";
import CountUp from "react-countup";

const CounterUp = ({ ScrollTrigger, counterOn, setCounterOn }) => {
  return (
    <section className="lg:px-24 md:px-16 px-4 pt-20 flex md:flex-row flex-col gap-6 md:gap-0 items-center justify-between">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="flex flex-col items-center text-deepGrey">
          <p className="font-semibold lg:text-4xl text-2xl">
            {counterOn && <CountUp start={0} end={50} duration={2} delay={0} />}
            +
          </p>
          <p className="text-deepGrey lg:text-sm text-[0.7rem] font-light">
            workers
          </p>
        </div>
      </ScrollTrigger>

      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="flex flex-col items-center">
          <p className="font-semibold lg:text-4xl text-2xl">
            {counterOn && (
              <CountUp start={0} end={120000} duration={2} delay={0} />
            )}
            +
          </p>
          <p className="text-deepGrey lg:text-sm text-[0.7rem] font-light">
            produce annually
          </p>
        </div>
      </ScrollTrigger>

      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="flex flex-col items-center">
          <p className="font-semibold lg:text-4xl text-2xl">
            {counterOn && <CountUp start={0} end={40} duration={2} delay={0} />}
            +
          </p>
          <p className="text-deepGrey lg:text-sm text-[0.7rem] font-light">
            customers
          </p>
        </div>
      </ScrollTrigger>

      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="flex flex-col items-center">
          <p className="font-semibold lg:text-4xl text-2xl">
            {counterOn && (
              <CountUp start={0} end={100} duration={2} delay={0} />
            )}
            + million
          </p>
          <p className="text-deepGrey lg:text-sm text-[0.7rem] font-light">
            sales yearly
          </p>
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default CounterUp;
