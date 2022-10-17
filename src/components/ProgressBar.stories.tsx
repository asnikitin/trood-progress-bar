import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IItem, ProgressBar } from "./ProgressBar";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ProgressBar",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

export const Task: ComponentStory<typeof ProgressBar> = () => (
  <ProgressBar
    items={
      [
        { name: "Sold", color: "#BD1FBE", value: 677 },
        { name: "Got free", color: "#FC64FF", value: 23 },
        { name: "Burned", color: "#00F53D", value: 202 },
        { name: "Free float", color: "#6D6D6D", value: 323 },
      ] as IItem[]
    }
  />
);

export const BurnedIs0: ComponentStory<typeof ProgressBar> = () => (
  <ProgressBar
    items={
      [
        { name: "Sold", color: "#BD1FBE", value: 677 },
        { name: "Got free", color: "#FC64FF", value: 23 },
        { name: "Burned", color: "#00F53D", value: 0 },
        { name: "Free float", color: "#6D6D6D", value: 323 },
      ] as IItem[]
    }
  />
);

export const WidthIs400: ComponentStory<typeof ProgressBar> = () => (
  <ProgressBar
    items={
      [
        { name: "Sold", color: "#BD1FBE", value: 677 },
        { name: "Got free", color: "#FC64FF", value: 23 },
        { name: "Burned", color: "#00F53D", value: 202 },
        { name: "Free float", color: "#6D6D6D", value: 323 },
      ] as IItem[]
    }
    width={500}
  />
);
