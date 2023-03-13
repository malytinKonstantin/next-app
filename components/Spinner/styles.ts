import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface WrapperProps {
  fill?: string;
  lineWidth?: number;
}

export const Wrapper = styled.span<WrapperProps>((props) => {
  const { fill } = props;

  return css`
    & svg > path {
      stroke: ${fill};
    }
  `;
});
