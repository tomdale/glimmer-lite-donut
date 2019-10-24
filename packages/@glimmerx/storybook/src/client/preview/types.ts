import { StoryFn } from '@storybook/addons';
import { Constructor } from '@glimmerx/core';
import { Component as GlimmerComponent } from '@glimmer/component';

export type StoryFnGlimmerReturnType = string | Constructor<GlimmerComponent>;

export interface IStorybookStory {
  name: string;
  render: () => any;
}

export interface IStorybookSection {
  kind: string;
  stories: IStorybookStory[];
}

export interface ShowErrorArgs {
  title: string;
  description: string;
}

export interface RenderMainArgs {
  storyFn: () => StoryFn<StoryFnGlimmerReturnType>;
  selectedKind: string;
  selectedStory: string;
  showMain: () => void;
  showError: (args: ShowErrorArgs) => void;
  forceRender: boolean;
}