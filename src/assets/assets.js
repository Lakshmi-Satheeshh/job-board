import logo from "./logo.jpg";
import compBanner3 from "./compBanner3.jpg"
// import heroBanner from "./heroBanner.jpg";
import core from "./core.jpg";

import alarmSystem from "./alarmSystem.jpg";
import audioProducts from "./audioProducts.jpg";
import displayandcontrol from "./displayandcontrol.jpg";
import led from "./led.jpg";
import parkingManagment from "./parkingManagment.jpg";
import speedGates from "./speedGates.jpg";

import alrm1 from "./alrm1.jpg"
import alrm2 from "./alrm2.jpg"
import alarm3 from "./alarm3.jpg"

import aud1 from "./aud1.jpg";
import aud2 from "./aud2.jpg";
import aud3 from "./aud3.jpg";

import speedG1 from "./speedG1.jpg";
import speedG2 from "./speedG2.jpg";
import speedG3 from "./speedG3.jpg";

import parking1 from "./parking1.jpg";
import parking2 from "./parking2.jpg";

import indoorLED from "./indoorLED.jpg";
import outdoorLED from "./outdoorLED.jpg"
import rentalLED from "./rentalLED.jpg"

import thermalCamera from "./thermalCamera.jpg";
import turbohdcameras from "./turbohdcameras.jpg";
import ultra from "./ultra.jpg"






const assets = {
    logo,
    compBanner3,
    core,

    products: [
    {
      image: alarmSystem,
      title: "Alarm System",
      slug:"alarm-system",
    },
    {
      image: audioProducts,
      title: "Audio Products",
      slug:"audio-system",
    },
    {
      image: displayandcontrol,
      title: "Display & Control",
      slug: "camera",
    },
    {
      image: led,
      title: "LED",
      slug:"LED- displays",
    },
    {
      image: parkingManagment,
      title: "Parking Management",
      slug:"parking-managment",
    },
    {
      image: speedGates,
      title: "Speed Gates",
      slug:"Speed-Gates",
    },
   
  ],
  categories: {
    "alarm-system": {
      title: "Alarm Products",
      images: [
        {src : alrm1, title:"Alaram 1"},
        {src : alrm2, title: "Alarm 2"},
        {src : alarm3, title: "Alarm 3"},
      ],
    },
    "audio-system": {
      title: "Audio Products",
      images: [
        {src : aud1, title:"Audio 1"},
        {src : aud2, title:"Audio 2"},
        {src : aud3, title:"Audio 3"}
      ],
    },
    "camera": {
      title: "Camera Products",
      images: [
        {src : thermalCamera, title:"theramal"},
        {src : turbohdcameras, title:"turbo"},
        {src : ultra, title:"HD Ultra"},
      ],
    },
    "LED- displays": {
      title: "LED Products",
      images: [
        {src : indoorLED, title:"indoor"},
        {src : outdoorLED, title:"outdoor"},
        {src : rentalLED, title:"rental"},
      ],
    },
    "parking-managment": {
      title: "Parking Products",
      images: [
        {src : parking1, title:"Parking"},
        {src : parking2, title:"sp"},
      ],
    },
    "Speed-Gates": {
      title: "speed gate Products",
      images: [
        {src : speedG1, title:"gates"},
        {src : speedG2, title:"gates"},
        {src : speedG3, title:"gates"},
      ],
    },

  }
};


export default assets;