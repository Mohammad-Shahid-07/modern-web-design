import React from "react";

interface Props {
  title: string;
  description: string;
}
const Title = ({
    title,
    description,
}: Props) => {
  return (
    <div className="mt-16 mb-8">
      <h2 className="text-6xl text-white/75 font-medium text-center">
        Revolutionalize your <br /> workflow
      </h2>
      <p className="text-white text-xl leading-10 text-center mt-5">
        Generate highly personalized icebreakers and complete sequences <br />{" "}
        based on your prospects&apos; information.
      </p>
    </div>
  );
};

export default Title;
