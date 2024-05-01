'use client';
import { useState } from 'react';
// import CloseIcon from '../node@mui/icons-material/Close';
import { Cross1Icon } from '@radix-ui/react-icons';

import './Gallery.css';
const GallerySection = () => {
  let data = [
    {
      id: 1,
      imgsrc:
        'https://wallpapers.com/images/high/sai-pallavi-focus-photograph-tx1gtexi52z0pp89.webp',
    },
    {
      id: 2,
      imgsrc:
        'https://wallpapers.com/images/high/sai-pallavi-elegant-earrings-h7fewrnq5hmjpxvz.webp',
    },
    {
      id: 3,
      imgsrc:
        'https://wallpapers.com/images/high/sai-pallavi-side-view-aepjwid63oxdc1ly.webp',
    },
    {
      id: 4,
      imgsrc:
        'https://wallpapers.com/images/hd/batman-arkham-origins-nsl7ff2rnlsbuau6.webp',
    },
    {
      id: 5,
      imgsrc:
        'https://wallpapers.com/images/high/spider-man-aesthetic-0f74grzoj0jjpp7n.webp',
    },
    {
      id: 6,
      imgsrc:
        'https://wallpapers.com/images/high/iron-man-power-gesture-vua70ols5yhwkb49.webp',
    },
    {
      id: 7,
      imgsrc:
        'https://wallpapers.com/images/high/tony-stark-final-moments-7zfav7rz2l5xag7u.webp',
    },
    {
      id: 8,
      imgsrc:
        'https://wallpapers.com/images/high/spider-man-white-2560-x-1440-avo7w7zonmwtaxtm.webp',
    },
    {
      id: 9,
      imgsrc:
        'https://wallpapers.com/images/high/spider-man-white-3840-x-2160-2wov82jaudol5tgo.webp',
    },
  ];

  const [model, setmodel] = useState(false);
  const [tempimgsrc, settempimgsrc] = useState('');

  const getImg = (imgsrc) => {
    settempimgsrc(imgsrc);
    setmodel(true);
  };

  return (
    <>
      <div className="mt-16">
        <div
          className={
            model
              ? 'w-full h-screen flex items-center justify-center fixed top-0 left-0 bg-black visible opacity-1 overflow-hidden z-50'
              : 'w-full h-screen fixed top-0 left-0 bg-black invisible opacity-0 overflow-hidden z-50'
          }
        >
          <img
            className="w-auto h-auto max-w-full max-h-full block"
            src={tempimgsrc}
            alt=""
          />
          <Cross1Icon
            className="fixed w-8 h-8 text-white inset-6 cursor-pointer"
            onClick={() => setmodel(false)}
          />
        </div>

        <div className="Gallery">
          {data.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => {
                  getImg(item.imgsrc);
                }}
              >
                <img src={item.imgsrc} alt="" className="w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GallerySection;
