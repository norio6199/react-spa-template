import React, { ComponentProps } from 'react';
import { ComponentStory } from '@storybook/react';
import { Button } from './';
import { setStory } from '@/lib/storybook/helper';
import { css } from '@emotion/react';

export default setStory<ComponentProps<typeof Button>>({
  title: 'atom/Button',
  component: Button,
  style: css({}),
  ignore: ['className', 'children', 'onClick'],
});

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'primary',
  size: 'medium',
  children: 'Button',
  onClick: () => alert('clicked!!'),
};
