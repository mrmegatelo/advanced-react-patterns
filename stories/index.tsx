import { storiesOf } from "@storybook/react";
import * as React from "react";

// Import the presentation components.
import CompoundApp from "../patterns/CompoundApp/CompoundApp";
import DefaultApp from "../patterns/DefaultApp/DefaultApp";
import FlexibleCompoundApp from "../patterns/FlexibleCompoundApp/FlexibleCompoundApp";
import HOCAppFirstIteration from "../patterns/HOCAppFirstIteration/HOCAppFirstIteration";
import HOCAppSecondIteration from "../patterns/HOCAppSecondIteration/HOCAppSecondIteration";

storiesOf("Advanced React Components", module)
  .add("Default", () => (
    <DefaultApp />
  ))
  .add("Compound Pattern", () => (
    <CompoundApp />
  ))
  .add("Flexible Compound Pattern", () => (
    <FlexibleCompoundApp />
  ))
  .add("Higher Order Component Pattern", () => (
    <HOCAppFirstIteration />
  ))
  .add("HOC with props namespacing and developer friendly display names", () => (
    <HOCAppSecondIteration />
  ));
