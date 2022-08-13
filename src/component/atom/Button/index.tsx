import React, { ReactNode } from 'react';
import { css } from '@emotion/react';

type Props = {
  className?: string;
  children: ReactNode;
  type: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
};

export const Button: React.FC<Props> = ({
  className,
  children,
  type,
  size = 'medium',
  onClick,
}) => {
  return (
    <button
      className={className}
      css={[style.root, style.type[type], style.size[size]]}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const style = {
  root: css({
    fontWeight: 'bold',
    borderRadius: '3em',
    cursor: 'pointer',
    '&:hover': css({
      opacity: 0.8,
    }),
  }),
  type: {
    primary: css({
      color: 'white',
      backgroundColor: '#1ea7fd',
      border: 0,
    }),
    secondary: css({
      color: '#333',
      backgroundColor: 'white',
      border: 'solid 1px lightgrey',
    }),
  },
  size: {
    small: css({
      fontSize: '12px',
      padding: '10px 16px',
    }),
    medium: css({
      fontSize: '14px',
      padding: '11px 20px',
    }),
    large: css({
      fontSize: '16px',
      padding: '12px 24px',
    }),
  },
};
