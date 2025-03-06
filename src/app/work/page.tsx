"use client"

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";


import Title, { Size, Weight } from "../../components/Title";
import styles from "./page.module.css";
import Card from "@/components/Card";
import { Next, Previous } from "@/components/icons/carousel";

enum ProjectType {
  WebApp = "Web App",
  SaaS = "SaaS"
}

export default function WorkPage() {
  return (
    <div className={styles.page}>
      <Title value={`Work`} size={Size.Large} weight={Weight.Heavy} className={styles.title} margin />

      <div className={styles.work}>
        <Project
          type={ProjectType.WebApp}
          name={"DisCo Music"}
          description="A mobile first web app to merge music libraries across streaming
          services. Use it as your daily music player while adding music
          directly to your streaming service libraries. Create a Local Party and
          build the music queue with your friends and family, or a Remote Party
          to listen with friends from afar."
          tools={["Spotify SDK", "MusicKit JS SDK", "React", "NextJS", "Express", "Postgresql", "Web Sockets", "Docker", "Kubernetes", "iOS"]}
          link={"https://discomusic.projects.alexaaronpena.com"}
          landingLink={"https://discomusicapp.com"}
          mobileAssets={["/assets/work/disco/mobile1.png", "/assets/work/disco/mobile2.png", "/assets/work/disco/mobile3.png"]}
          desktopAssets={["/assets/work/disco/desktop1.png"]}
        />

        <Project
          type={ProjectType.SaaS}
          name={"Portal Robotics"}
          description="A Software as a Service (SasS) startup providing that extends your 
          cloud experience to the edge and enhances the visibility, security, and control 
          of your distributed edge infrastructure, significantly reducing management costs 
          through an automated open architecture."
          tools={["Rancher", "ArgoCD", "React", "NextJS", "Express", "Postgresql", "Web Sockets", "Docker", "K3s", "Shadcn", "SaltStack", "Helm", "ARM", "x86", "Rocky9", "RHEL", "Terraform", "NeuVector"]}
          link={"https://www.portalrobotics.com"}
          mobileAssets={[]}
          desktopAssets={["/assets/work/portal/desktop1.png", "/assets/work/portal/desktop2.png", "/assets/work/portal/desktop3.png", "/assets/work/portal/desktop4.png"]}
        />

        <Project
          type={ProjectType.SaaS}
          name={"La Conexion"}
          description="A Software as a Service (SasS) startup providing web hosting and 
          Social Media Marketing Agency (SMMA) services with end to end support. The
          founders being based out of San Jose, CA and both being of Mexican descent, our
          inital goal was to cater to local businesses and spanish speaking communities to
          empower these business owners with visibility, the best customer support, and 
          competetive pricing."
          tools={["Turbo Repo", "React", "NextJS", "Vercel Hosting"]}
          link={"https://www.laconexcion.com"}
          mobileAssets={["/assets/work/la-conexion/mobile1.png", "/assets/work/la-conexion/mobile2.png", "/assets/work/la-conexion/mobile3.png"]}
          desktopAssets={["/assets/work/la-conexion/desktop1.png"]}
        />
      </div>
    </div>
  );
}

interface ProjectProps {
  type: ProjectType;
  name: string;
  description: string;
  tools: string[]
  link: string
  landingLink?: string
  mobileAssets: string[];
  desktopAssets: string[];
}
function Project({ type, name, description, tools, link, landingLink, mobileAssets, desktopAssets }: ProjectProps) {
  return (
    <Card className={styles.Project}>
      <>
        <div className={styles.Context}>
          <Title
            value={type}
            size={Size.Small}
            weight={Weight.Heavy}
            color={"grey"}
          />
          <div className={styles.Header}>
            <Title value={name} size={Size.Medium} weight={Weight.Heavy} margin />
            <div className={styles.Section}>
              <button
                className={[styles.buttonpill, styles.Active].join(" ")}
                onClick={() =>
                  window.open(
                    link,
                    "_blank"
                  )
                }
              >
                Visit
              </button>
              {landingLink && <button
                className={[styles.buttonpill, styles.Active].join(" ")}
                onClick={() =>
                  window.open(
                    landingLink,
                    "_blank"
                  )
                }
              >
                Landing
              </button>}
            </div>
          </div>

          <span style={{ marginBottom: "1.5rem" }}>{description}</span>

          <div
            style={{
              color: "grey",
              display: "flex",
              justifyItems: "flex-start",
              flexWrap: "wrap",
              gap: "0.5rem 1rem",
            }}
          >
            {tools.map(tool => <span key={tool}>{tool}</span>)}
          </div>
        </div>

        <div className={styles.Preview}>
          <ImageCarousel
            mobileAssets={mobileAssets.map((asset) => (
              <img key={asset} src={asset} alt="project asset" className={styles.Asset} />
            ))}
            desktopAssets={desktopAssets.map((asset) => (
              <img
                key={asset}
                src={asset}
                alt="project asset"
                className={`${styles.Asset} ${styles.Desktop}`}
              />
            ))}
          ></ImageCarousel>
        </div>
      </>
    </Card>
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
            className={`${styles.buttonpill} ${type === ImageType.Desktop && styles.Active
              }`}
            onClick={() => {
              setType(ImageType.Desktop);
              setActiveIndex(0);
            }}
          >
            {"Desktop"}
          </button>
          {mobileAssets.length > 0 && <button
            className={`${styles.buttonpill} ${type === ImageType.Mobile && styles.Active
              }`}
            onClick={() => {
              setType(ImageType.Mobile);
              setActiveIndex(0);
            }}
          >
            {"Mobile"}
          </button>}
        </div>
        <div className={styles.NavGroup}>
          <button
            className={styles.paddlenav}
            onClick={() => updateActiveIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
          >
            <Previous />
          </button>
          <button
            className={styles.paddlenav}
            onClick={() => updateActiveIndex(activeIndex + 1)}
            disabled={
                activeIndex ===
                (type === ImageType.Desktop
                  ? desktopAssets.length - 1
                  : mobileAssets.length - 1)
            }
          >
            <Next />
          </button>
        </div>
      </div>
      <div
        className={styles.Innards}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {(type === ImageType.Desktop ? desktopAssets : mobileAssets).map(
          (child: any) => child
        )}
      </div>
    </div>
  );
}
