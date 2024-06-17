import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSwiper } from 'swiper/react';

import { ReactComponent as RightArrow } from '../../../../assets/RightArrow.svg';

import styles from './AlbumPlaylistCardsCarouselRight.module.css';

const AlbumPlaylistCardsCarouselRight = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on('slideChange', function () {
      setIsEnd(swiper.isEnd);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.rigthNavigarion}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default AlbumPlaylistCardsCarouselRight;
