import React from 'react';
// import Slider from 'react-slick';
import { PageWrapper } from '@/pageComponents/Nftea/components';
import {
  Blocks,
  // SlideCard,
  // Styled,
  // sliderSettings,
  // slides,
} from '@/pageComponents/Nftea/pages/main';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainPage = () => {
  return (
    <PageWrapper>
      {/* <Styled.Wrapper>
        <Slider {...sliderSettings}>
          {slides.map((slide) => (
            <SlideCard {...slide} />
          ))}
        </Slider>
      </Styled.Wrapper> */}
      <Blocks />
    </PageWrapper>
  );
};

export default MainPage;
