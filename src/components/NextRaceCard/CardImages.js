import { useState, useEffect, useCallback } from "react";

import ItalyTrack from "../../assets/tracks/monza.jpeg";
import BelgiumTrack from "../../assets/tracks/spa.jpeg";
import NetherlandsTrack from "../../assets/tracks/zandvoort.jpeg";
import HungaryTrack from "../../assets/tracks/hungaroring.jpeg";
import BrazilTrack from "../../assets/tracks/interlagos.jpeg";
import FranceTrack from "../../assets/tracks/paul-ricard.jpeg";
import MexicoTrack from "../../assets/tracks/autodromo-hermanos-rodriguez.jpeg";
import AzerbaijanTrack from "../../assets/tracks/baku.jpeg";
import SpainTrack from "../../assets/tracks/catalunya.jpeg";
import MonacoTrack from "../../assets/tracks/monaco.jpeg";
import TurkeyTrack from "../../assets/tracks/istanbul-park.jpeg";
import RussiaTrack from "../../assets/tracks/sochi.jpeg";
import JapanTrack from "../../assets/tracks/suzuka.jpeg";
import UKTrack from "../../assets/tracks/silverstone.jpeg";
import AustriaTrack from "../../assets/tracks/red-bull-ring.jpeg";
import PortugalTrack from "../../assets/tracks/portimao.jpeg";
import BahrainTrack from "../../assets/tracks/bahrain.jpeg";
import ImolaTrack from "../../assets/tracks/imola.jpeg";
import USATrack from "../../assets/tracks/cota.jpeg";
import AustraliaTrack from "../../assets/tracks/melbourne.jpeg";
import UAETrack from "../../assets/tracks/yas-marina.jpeg";
import DefaultImage from "../../assets/tracks/f1.jpeg";

const CardImages = (props) => {
  const [imageUrl, setImageUrl] = useState("");

  const setImageByCircuit = useCallback(async () => {
    const country = props.circuit;
    switch (country) {
      case "monza":
        setImageUrl(ItalyTrack);
        break;
      case "spa":
        setImageUrl(BelgiumTrack);
        break;
      case "zandvoort":
        setImageUrl(NetherlandsTrack);
        break;
      case "hungaroring":
        setImageUrl(HungaryTrack);
        break;
      case "interlagos":
        setImageUrl(BrazilTrack);
        break;
      case "ricard":
        setImageUrl(FranceTrack);
        break;
      case "suzuka":
        setImageUrl(JapanTrack);
        break;
      case "rodriguez":
        setImageUrl(MexicoTrack);
        break;
      case "catalunya":
        setImageUrl(SpainTrack);
        break;
      case "sochi":
        setImageUrl(RussiaTrack);
        break;
      case "istanbul":
        setImageUrl(TurkeyTrack);
        break;
      case "monaco":
        setImageUrl(MonacoTrack);
        break;
      case "BAK":
        setImageUrl(AzerbaijanTrack);
        break;
      case "silverstone":
        setImageUrl(UKTrack);
        break;
      case "red_bull_ring":
        setImageUrl(AustriaTrack);
        break;
      case "portimao":
        setImageUrl(PortugalTrack);
        break;
      case "bahrain":
        setImageUrl(BahrainTrack);
        break;
      case "imola":
        setImageUrl(ImolaTrack);
        break;
      case "americas":
        setImageUrl(USATrack);
        break;
      case "albert_park":
        setImageUrl(AustraliaTrack);
        break;
      case "yas_marina":
        setImageUrl(UAETrack);
        break;
      default:
        setImageUrl(DefaultImage);
    }
  }, [props]);
  useEffect(() => {
    setImageByCircuit();
  }, [setImageByCircuit]);
  return (
    <div className="home-photo" style={{ backgroundImage: `url(${imageUrl})` }} />
  );
};

export default CardImages;
