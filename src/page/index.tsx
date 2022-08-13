import { css } from '@emotion/react';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <section css={[style.root]}>
      <h1>Home</h1>
    </section>
  );
};

const style = {
  root: css({
    color: 'green',
  }),
};
