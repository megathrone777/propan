import React from "react";

export interface TSteps {
  text: string;
  title: string;
  image: {
    url: string;
  };
}

interface TProps extends TSteps {}

const Steps: React.FC<TProps> = () => <div>Steps</div>;

export { Steps };
