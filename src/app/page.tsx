"use client";

import React from "react";
import { SlideContainer } from "@/components/presentation/SlideContainer";
import Slide01_Cover from "@/components/presentation/slides/Slide01_Cover";
import Slide02_Background from "@/components/presentation/slides/Slide02_Background";
import Slide03_GoalScope from "@/components/presentation/slides/Slide03_GoalScope";
import Slide04_Methodology from "@/components/presentation/slides/Slide04_Methodology";
import Slide05_Architecture from "@/components/presentation/slides/Slide05_Architecture";
import Slide06_SystemModeling from "@/components/presentation/slides/Slide06_SystemModeling";
import Slide07_Refactoring from "@/components/presentation/slides/Slide07_Refactoring";
import Slide08_StateManagement from "@/components/presentation/slides/Slide08_StateManagement";
import Slide09_UIOptimization from "@/components/presentation/slides/Slide09_UIOptimization";
import Slide10_PerformanceEvaluation from "@/components/presentation/slides/Slide10_PerformanceEvaluation";
import Slide11_UAT from "@/components/presentation/slides/Slide11_UAT";
import Slide12_Conclusion from "@/components/presentation/slides/Slide12_Conclusion";
import Slide13_ThankYou from "@/components/presentation/slides/Slide13_ThankYou";

const Page = () => {
  // Placeholder slides until user provides content
  const slides = [
    <Slide01_Cover key="cover" />,
    <Slide02_Background key="background" />,
    <Slide03_GoalScope key="goalscope" />,
    <Slide04_Methodology key="methodology" />,
    <Slide05_Architecture key="architecture" />,
    <Slide06_SystemModeling key="systemmodeling" />,
    <Slide07_Refactoring key="refactoring" />,
    <Slide08_StateManagement key="statemanagement" />,
    <Slide09_UIOptimization key="uioptimization" />,
    <Slide10_PerformanceEvaluation key="performance" />,
    <Slide11_UAT key="uat" />,
    <Slide12_Conclusion key="conclusion" />,
    <Slide13_ThankYou key="thankyou" />,
  ];

  return (
    <main>
      <SlideContainer slides={slides} />
    </main>
  );
};

export default Page;
