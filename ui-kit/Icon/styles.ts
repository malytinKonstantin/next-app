import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { rotateAnimation } from '@/ui-kit/@constants';

type WrapperProps = { isRotate: boolean; mb?: number };

export const Wrapper = styled.span<WrapperProps>((props) => {
  const { isRotate = false, mb = 0 } = props;

  return css`
    ${isRotate && rotateAnimation}
    display: inline-flex;

    ${isRotate && 'animation: spin 1.1s linear infinite'};

    line-height: 0;

    margin-bottom: ${mb}px;
  `;
});
