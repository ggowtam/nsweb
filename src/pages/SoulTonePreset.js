import React from 'react';
import PresetDetail from '../components/PresetDetail';
import presetImage1 from '../assets/preset1.jpg';
import presetImage2 from '../assets/preset2.jpg';
import presetImage3 from '../assets/preset3.jpg';
import presetImage4 from '../assets/preset4.jpg';
import presetImage5 from '../assets/preset5.jpg';
import presetImage6 from '../assets/preset6.jpg';
import presetImage7 from '../assets/preset7.jpg';
import presetImage8 from '../assets/preset8.jpg';
import presetImage9 from '../assets/preset9.jpg';
import presetImage10 from '../assets/preset10.jpg';
import presetImage11 from '../assets/preset11.jpg';
import presetImage12 from '../assets/preset12.jpg';

const images = [
  { img1: presetImage1, img2: presetImage2, label: 'SOUL TONE 1' },
  { img1: presetImage3, img2: presetImage4, label: 'SOUL TONE 2' },
  { img1: presetImage5, img2: presetImage6, label: 'SOUL TONE 3' },
  { img1: presetImage7, img2: presetImage8, label: 'SOUL TONE 4' },
  { img1: presetImage9, img2: presetImage10, label: 'SOUL TONE 5' },
  { img1: presetImage11, img2: presetImage12, label: 'SOUL TONE 6' },
];

const SoulTonePreset = () => {
  const presetName = 'Soul Tone';
  const price = 34.99;
  const description = `
    Adobe Lightroom & Adobe Camera Raw presets working on Lightroom Classic CC, 6, 5 & 4 and Photoshop CC & CS6.
    The Soul Tone presets are designed to enhance mood and atmosphere in your photos. Ideal for creative and artistic photography.
    Set requires Adobe Lightroom Subscription: LR Classic CC (v11+), and/or LR CC (v5+), and/or Adobe Photoshop ACR (v14+). The presets are in .XMP format.
  `;
  const whatsIncluded = [
    '6 colored presets + 1 B&W preset',
    'How to install preset video',
    'How to install preset pdf'
  ];

  return (
    <PresetDetail
      presetName={presetName}
      presetImages={images}
      price={price}
      description={description}
      whatsIncluded={whatsIncluded}
    />
  );
};

export default SoulTonePreset;
