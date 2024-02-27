import React from "react";
import Card from "./common/Card";

const Referee = () => {
  return (
    <section className="padding" id="referee">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center">Referee</h2>
        <p className="text-base text-gray-700 italic mt-4 mb-8">
          Should you require further details or wish to establish contact, please do not hesitate to
          reach out to me directly at{" "}
          <a href="mailto:huixin.yang.tw@gmail.com" className="underline text-gray-900">
            huixin.yang.tw@gmail.com
          </a>
          . I am more than happy to provide the contact information upon request.
        </p>

        <Card
          refereeName="Zhi Zhang"
          refereeType="Academic and Professional"
          currentPosition="Lecturer at UWA"
          relationship="Initially my supervisor in 2023, Zhi has been a mentor to me both academically and professionally. Currently, I assist in his lab, reinforcing our collaborative efforts."
          periodWorking="Since Feb 2024"
        />

        <Card
          refereeName="Jamie Tang"
          refereeType="Personal Character"
          currentPosition="Student Transitions Officer at UniHall"
          relationship="For one and a half years living at the residential college, Jamie, my residential advisor, closely observed my personal growth and adaptation in Australia. Her support was pivotal in navigating this significant phase of my life."
          periodWorking="Jul 2022 - Nov 2023"
        />
        <Card
          refereeName="Remy Kung"
          refereeType="Professional"
          currentPosition="Frontend Developer at Greenbase"
          relationship="As a co-worker at Deloitte, Remy and I collaborated closely on several key projects, which showcased my expertise and teamwork abilities."
          periodWorking="Mar 2019 - Apr 2020"
        />

        <Card
          refereeName="Ken Pan"
          refereeType="Academic and Professional"
          currentPosition="Assistant Professor at Geneseo State College"
          relationship="I was a statistics tutor for Ken's class at CCU, and he was my academic advisor. Ken has seen my academic performance and work ethic, and he can attest to my dedication and commitment to my studies."
          periodWorking="Feb 2015 - Jul 2015"
        />
      </div>
    </section>
  );
};

export default Referee;
