import React, { memo } from 'react';
import * as styles from './styles';

interface Props {
  children: any,
  onClick?: () => any,
}

const { Button } = styles;

export default memo(
  (props: Props) => <Button {...props} />,
);
