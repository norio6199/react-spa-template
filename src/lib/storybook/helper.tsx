import React from 'react';
import { SerializedStyles } from '@emotion/react';
import { Meta } from '@storybook/react';

export const setStory = <TProps,>(params: {
  title: Meta['title'];
  component: Meta['component'];
  style: SerializedStyles;
  ignore: (keyof TProps)[];
}): Meta => {
  const { title, component, style, ignore } = params;

  const argTypes: Meta['argTypes'] = {};
  ignore?.forEach((item) => {
    argTypes[item as string] = {
      table: {
        disable: true,
      },
    };
  });

  return {
    title,
    component,
    parameters: {
      docs: {
        source: {
          type: 'dynamic',
          excludeDecorators: true,
        },
      },
    },
    decorators: [(story) => <div css={style}>{story()}</div>],
    argTypes,
  };
};
