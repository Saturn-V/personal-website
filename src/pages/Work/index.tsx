import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Title, { Size, Weight } from "../../components/Title";
import DiscoMusicDesktop from "../../assets/disco_music_desktop.png";
import DiscoMusicMobile1 from "../../assets/disco_music_mobile_home.png";
import DiscoMusicMobile2 from "../../assets/disco_music_mobile_player.png";
import DiscoMusicMobile3 from "../../assets/disco_music_mobile_queue.png";
import styles from "./index.module.css";

enum ProjectType {
  WebApp = "Web App",
}

export default function WorkPage() {
  return (
    <div className={styles.WorkPage}>
      <Title value={`Work`} size={Size.Large} weight={Weight.Heavy} margin />
      <Project
        type={ProjectType.WebApp}
        name={"DisCo Music"}
        mobileAssets={[DiscoMusicMobile1, DiscoMusicMobile2, DiscoMusicMobile3]}
        desktopAssets={[DiscoMusicDesktop]}
      />
    </div>
  );
}

interface ProjectProps {
  type: ProjectType;
  name: string;
  mobileAssets: string[];
  desktopAssets: string[];
}
function Project({ type, name, mobileAssets, desktopAssets }: ProjectProps) {
  return (
    <div className={styles.Project}>
      <div className={styles.Context}>
        <Title
          value={type}
          size={Size.Small}
          weight={Weight.Heavy}
          color={"grey"}
        />
        <div className={styles.Header}>
          <Title value={name} size={Size.Medium} weight={Weight.Heavy} margin />
          <div>
            <button
              onClick={() =>
                window.open(
                  "https://discomusic.projects.alexaaronpena.com",
                  "_blank"
                )
              }
            >
              Open App
            </button>
          </div>
        </div>

        <div
          style={{
            color: "grey",
            display: "flex",
            justifyItems: "flex-start",
            flexWrap: "wrap",
            gap: "0.5rem 1rem",
          }}
        >
          <span>Spotify SDK</span>
          <span>MusicKit JS SDK</span>
          <span>React</span>
          <span>Express</span>
          <span>Postgresql</span>
          <span>Web Sockets</span>
          <span>Docker</span>
          <span>Heroku</span>
        </div>
      </div>

      <div className={styles.Preview}>
        <ImageCarousel
          mobileAssets={mobileAssets.map((asset) => (
            <img src={asset} alt="project asset" className={styles.Asset} />
          ))}
          desktopAssets={desktopAssets.map((asset) => (
            <img
              src={asset}
              alt="project asset"
              className={`${styles.Asset} ${styles.Desktop}`}
            />
          ))}
        ></ImageCarousel>
      </div>
    </div>
  );
}

enum ImageType {
  Desktop = "DESKTOP",
  Mobile = "MOBILE",
}
interface ImageCarouselProps {
  mobileAssets: JSX.Element[];
  desktopAssets: JSX.Element[];
}
function ImageCarousel({ mobileAssets, desktopAssets }: ImageCarouselProps) {
  const [type, setType] = useState(ImageType.Desktop);
  const [activeIndex, setActiveIndex] = useState(0);

  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  });

  const updateActiveIndex = (index: number) => {
    let updatedIndex = index;
    if (index < 0) updatedIndex = 0;
    if (
      type === ImageType.Desktop
        ? index >= desktopAssets.length
        : index >= mobileAssets.length - 1
    )
      updatedIndex =
        type === ImageType.Desktop
          ? desktopAssets.length - 1
          : mobileAssets.length - 1;
    setActiveIndex(updatedIndex);
  };

  return (
    <div className={styles.Carousel}>
      <div className={styles.Navigation}>
        <div className={styles.NavGroup}>
          <button
            className={type === ImageType.Desktop ? styles.ButtonActive : ""}
            onClick={() => {
              setType(ImageType.Desktop);
              setActiveIndex(0);
            }}
          >
            {"Desktop"}
          </button>
          <button
            className={type === ImageType.Mobile ? styles.ButtonActive : ""}
            onClick={() => {
              setType(ImageType.Mobile);
              setActiveIndex(0);
            }}
          >
            {"Mobile"}
          </button>
        </div>
        <div className={styles.NavGroup}>
          <button
            onClick={() => updateActiveIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
          >
            {"<"}
          </button>
          <button
            onClick={() => updateActiveIndex(activeIndex + 1)}
            disabled={
              isMobile
                ? activeIndex ===
                  (type === ImageType.Desktop
                    ? desktopAssets.length - 1
                    : mobileAssets.length - 1)
                : true
            }
          >
            {">"}
          </button>
        </div>
      </div>
      <div
        className={styles.Innards}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {(type === ImageType.Desktop ? desktopAssets : mobileAssets).map(
          (child: any) =>
            // <div className={styles.CarouselItem}>{child}</div>

            child
        )}
      </div>
    </div>
  );
}
