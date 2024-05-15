'use client';
import { useState } from 'react';
// import CloseIcon from '../node@mui/icons-material/Close';
import { Cross1Icon } from '@radix-ui/react-icons';

import './GallerySection.css';
const GallerySection = () => {
  let data = [
    {
      id: 1,
      imgsrc:
        'hhttps://res.cloudinary.com/ddtprt8xt/image/upload/v1715738171/hc_a5l8vs.png',
    },
    {
      id: 2,
      imgsrc:
        'https://res.cloudinary.com/ddtprt8xt/image/upload/v1715738177/cricketGround_vn6k2v.png',
    },
    {
      id: 3,
      imgsrc:
        'https://res.cloudinary.com/ddtprt8xt/image/upload/v1715738441/3_m1rnlm.png',
    },
    {
      id: 4,
      imgsrc:
        'https://res.cloudinary.com/ddtprt8xt/image/upload/v1715742327/9_medpub.jpg',
    },
    {
      id: 5,
      imgsrc:
        'hhttps://res.cloudinary.com/ddtprt8xt/image/upload/v1715742328/8_pqet56.jpg',
    },
    {
      id: 6,
      imgsrc:
        'https://res.cloudinary.com/ddtprt8xt/image/upload/v1715742328/11_viqaam.jpg',
    },
    {
      id: 7,
      imgsrc:
        'https://res.cloudinary.com/ddtprt8xt/image/upload/v1715742329/7_jtz59w.jpg',
    },
    {
      id: 8,
      imgsrc:
        'https://res.cloudinary.com/ddtprt8xt/image/upload/v1715742329/10_axesfe.jpg',
    },
    {
      id: 9,
      imgsrc:
        'https://res.cloudinary.com/ddtprt8xt/image/upload/v1715742329/6_pczmdt.jpg',
    },
    {
      id: 10,
      imgsrc:
        'https://res.cloudinary.com/ddtprt8xt/image/upload/v1715742330/12_tio2tt.jpg',
    },
    {
      id: 11,
      imgsrc:
        'https://res.cloudinary.com/ddtprt8xt/image/upload/v1715742331/13_ymqqta.jpg',
    },
    {
      id: 12,
      imgsrc:
        'https://res.cloudinary.com/ddtprt8xt/image/upload/v1715742333/16_eqpxzn.jpg',
    },
    {
      id: 13,
      imgsrc:
        'https://res.cloudinary.com/ddtprt8xt/image/upload/v1715742725/17_i9frcs.jpg',
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
