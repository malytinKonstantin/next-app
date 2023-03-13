import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FontFamily, FontWeight, Color } from '@/ui-kit/@constants';

export const Wrapper = styled.div(() => {
  return css`
    height: 100%;

    padding: 8px 16px;
    background-color: ${Color.NFTea.Black_BO_02};

    box-sizing: border-box;
    overflow: hidden;

    > * input {
      min-width: auto;
    }

    @media (min-width: 720px) {
      padding-left: 24px;
      padding-right: 24px;
    }

    @media (min-width: 1024px) {
      width: 280px;
      padding-left: 32px;
      padding-right: 32px;
    }

    @media (min-width: 1440px) {
      width: 352px;
    }
  `;
});

export const Bar = styled.div(() => {
  return css`
    width: 100%;
    height: 100%;
  `;
});

export const Head = styled.div(() => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: auto;
  `;
});

export const ToggleButton = styled.button<{ isOpen: boolean }>((props) => {
  const { isOpen } = props;

  return css`
    margin: 0;
    padding: 0;
    background: none;
    color: ${Color.NFTea.Purple_Sugar_100};
    border: none;
    opacity: 1;

    transform: rotate(${isOpen ? -90 : 90}deg);
    transition: 0.5s;

    > span > svg {
      fill: currentColor;
    }

    @media (min-width: 1024px) {
      opacity: 0;
    }
  `;
});

export const Body = styled.div<{ isOpen: boolean }>((props) => {
  const { isOpen } = props;

  return css`
    width: 100%;
    height: ${isOpen ? '330px' : 0};
    // opacity: ${isOpen ? 1 : 0};
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (min-width: 1024px) {
      height: calc(100% - 70px);
      opacity: 1;
    }
  `;
});
export const PointsList = styled.ul(() => {
  return css`
    margin: 0;
    padding: 0;
    padding-bottom: 16px;
    height: 100%;
    box-sizing: border-box;
    list-style: none;

    overflow: scroll;

    & > li:last-child {
      border-bottom: none;
    }

    @media (min-width: 1024px) {
      //height: calc(100% - 154px);
      height: 100%;
    }
  `;
});

export const PointsItem = styled.li(() => {
  return css`
    margin: 0;
    padding: 8px 0;

    border-bottom: 1px solid ${Color.NFTea.Black_BO_10};
  `;
});

export const Title = styled.h2(() => {
  return css`
    font-family: ${FontFamily.HalvarBreitschrift};
    font-style: normal;
    font-weight: ${FontWeight.w700};
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.04em;

    color: ${Color.NFTea.Purple_Sugar_100};
  `;
});

export const SubTitle = styled.p(() => {
  return css`
    margin: 0 0 4px;
    font-family: ${FontFamily.HalvarMittelschrift};
    font-style: normal;
    font-weight: ${FontWeight.w700};
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.02em;

    color: ${Color.NFTea.Purple_Sugar_100};
  `;
});

export const P = styled.p(() => {
  return css`
    display: flex;

    margin: 0;
    font-family: ${FontFamily.HalvarMittelschrift};
    font-style: normal;
    font-weight: ${FontWeight.w700};
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.04em;

    > span {
      :nth-of-type(1) {
        min-width: 95px;
        margin-right: 4px;
      }

      :nth-of-type(2) {
        max-width: 160px;
      }
    }
  `;
});

export const Opening = styled.div((props) => {
  return css`
    padding: 8px 16px 8px 8px;
    background: #e9f8e2;
    border-radius: 16px;
    display: flex;
    align-items: center;

    font-weight: 500;
    font-size: 16px;

    svg {
      height: 32px;
      margin-right: 8px;
    }
  `;
});
