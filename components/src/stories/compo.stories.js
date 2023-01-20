// compo.stories.js|jsx

import React from 'react';
import { compo } from './compo';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Component',
    component: compo,
};


export const List = () => <Button>Button</Button>;