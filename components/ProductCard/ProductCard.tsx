import React, { FC, useCallback, useState } from 'react';
import { ComponentSize } from '@/ui-kit/@types';
import { Icon, Stepper } from '@/ui-kit';
import { defaultProps } from './ProductCard.defaultProps';
import * as Styled from './styles';
import { ProductCardProps } from './types';

export const ProductCard: FC<ProductCardProps> = (props) => {
  const {
    id,
    type = defaultProps.type,
    img,
    name,
    weight,
    price,
    setCount,
    closeCard,
  } = props;
  const isDefault = type === 'default';
  const isCart = type === 'cart';
  const [countValue, setCountValue] = useState(isCart ? 1 : 0);
  const [loading, setLoading] = useState(false);
  const priceText = `${price.value.toLocaleString()} ${price.currency}`;

  const changeValue = useCallback(
    async (value: number) => {
      setLoading(true);
      await setCount(value);
      setLoading(false);

      setCountValue(value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleButtonClick = async () => {
    await changeValue(1);
  };

  const handleStepperChange = useCallback(
    async (value: number) => {
      await changeValue(value);
    },
    [changeValue],
  );

  return (
    <Styled.Wrapper {...props}>
      <Styled.Img img={img} type={type} />

      <Styled.Shadow type={type}>
        <Styled.Text type={type}>{name}</Styled.Text>

        <Styled.SubTextWrapper>
          <Styled.SubText type={type}>
            {`${weight.value} ${weight.measure}`}
          </Styled.SubText>
          {isDefault && !!countValue && (
            <>
              <Styled.Separator />{' '}
              <Styled.SubText type={type}>{priceText}</Styled.SubText>
            </>
          )}
        </Styled.SubTextWrapper>

        <Styled.CardButtonWrapper>
          {!countValue ? (
            <Styled.CardButton
              loading={loading}
              block={isDefault}
              type="secondary"
              onClick={handleButtonClick}
            >
              {priceText}
            </Styled.CardButton>
          ) : (
            <Stepper
              size={isDefault ? ComponentSize.large : ComponentSize.small}
              initialValue={1}
              min={isCart ? 1 : 0}
              decrementProps={{ loading }}
              incrementProps={{ loading }}
              onChange={handleStepperChange}
            />
          )}
          {isCart && <Styled.Text type={type}>{priceText}</Styled.Text>}
        </Styled.CardButtonWrapper>
      </Styled.Shadow>
      {isCart && (
        <Styled.CloseButton onClick={() => closeCard && closeCard(id)}>
          <Icon name="closeFill" />
        </Styled.CloseButton>
      )}
    </Styled.Wrapper>
  );
};
