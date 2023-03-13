import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Color, FontFamily } from '@/ui-kit/@constants';

export const MessagesWrapper = styled.div(() => {
  return css`
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    max-height: 100%;
  `;
});

export const MessageWrapper = styled.div<{ isOpen: boolean }>(() => {
  return css`
    display: flex;
    align-items: center;
    z-index: 200;
    width: 343px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 12px 24px 12px 16px;
    border-radius: 16px;
    background: ${Color.foodCity.Black_Oven};
    box-sizing: border-box;
  `;
});

export const Text = styled.p(() => {
  return css`
    margin: 0;
    margin-left: 8px;
    font-family: ${FontFamily.SFProText};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: ${Color.foodCity.White};
  `;
});
