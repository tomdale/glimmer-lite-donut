import { document } from 'global';
import { RenderMainArgs, GlimmerStoryFnReturnType, GlimmerStoryComponentClass } from './types';
import { renderComponent, RenderComponentOptions } from '@glimmerx/core';

const rootElement = document ? document.getElementById('root') : null;

/**
 * Renders the components
 * @param {function} storyFn - The function to get the Glimmer Component.
 * @param {function} showMain - The function to initialize Storybook elements.
 */
export default function renderMain({ storyFn, showMain }: RenderMainArgs) {
  const storyFnResult: GlimmerStoryFnReturnType = storyFn();
  let glimmerStoryComponent: GlimmerStoryComponentClass;
  let glimmerRenderComponentOptions: RenderComponentOptions = {
    element: rootElement,
  };

  if (typeof storyFnResult === 'function') {
    glimmerStoryComponent = storyFnResult;
  } else {
    glimmerStoryComponent = storyFnResult.componentClass;
    glimmerRenderComponentOptions = {
      ...glimmerRenderComponentOptions,
      ...storyFnResult.renderOptions,
    };
  }
  rootElement.innerHTML = '';
  showMain();
  return renderComponent(glimmerStoryComponent, glimmerRenderComponentOptions);
}
