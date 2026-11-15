import React from "react";
import PageHeading from "../ui/PageHeading";
import RefereeCard from "../ui/RefereeCard";
import { sectionContainer } from "../styles/uiClasses";

const RefereePage = () => {
  return (
    <section className="padding" id="referee">
      <div className={sectionContainer}>
        <PageHeading title="References" description="Professional and academic references available on request." />
        <p className="editorial-reference-intro">
          Contact details are shared upon request via{" "}
          <a href="mailto:huixin.yang.tw@gmail.com">email</a>.
        </p>

        <div className="content-card-stack">
          <RefereeCard
            refereeName="Vlad"
            refereeType="Professional"
            currentPosition="Head of Engineering"
            relationship="Professional reference available upon request. Vlad previously worked with me in an engineering leadership capacity."
            periodWorking="Jun 2025 - Mar 2026"
          />

          <RefereeCard
            refereeName="Zhi"
            refereeType="Academic and Professional"
            currentPosition="Lecturer"
            relationship="Initially my supervisor in 2023, Zhi has been a mentor to me both academically and professionally. After graduation, I assisted in his lab, reinforcing our collaborative efforts."
            periodWorking="Feb 2023 - Mar 2024"
          />

          <RefereeCard
            refereeName="Remy"
            refereeType="Professional"
            currentPosition="Frontend Developer"
            relationship="As a co-worker at Deloitte, Remy and I collaborated closely on several key projects, which showcased my expertise and teamwork abilities."
            periodWorking="Mar 2019 - Apr 2020"
          />

          <RefereeCard
            refereeName="Ken"
            refereeType="Academic and Professional"
            currentPosition="Assistant Professor"
            relationship="I was a statistics tutor for Ken's class at CCU, and he was my academic advisor. Ken has seen my academic performance and work ethic, and he can attest to my dedication and commitment to my studies."
            periodWorking="Feb 2015 - Jul 2015"
          />
          <RefereeCard
            refereeName="Jamie"
            refereeType="Personal Character"
            currentPosition="Student Transitions Officer"
            relationship="For one and a half years living at the residential college, Jamie, my residential advisor, closely observed my personal growth and adaptation in Australia. Her support was pivotal in navigating this significant phase of my life."
            periodWorking="Jul 2022 - Nov 2023"
          />
        </div>
      </div>
    </section>
  );
};

export default RefereePage;
