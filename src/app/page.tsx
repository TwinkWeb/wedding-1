"use client";

import { ArrowIcon } from "./icons/arrow";
import { Heart } from "./icons/heart";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-(--page-bg) ">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <TimerPart />
      {/* <Questionnaire /> */}
      <AnswerWaiting />
      {/* <div className="w-full fixed bottom-0 left-0 right-0 h-[20px] bg-(--text-clr-1)"></div> */}
    </div>
  );
}

function FirstSection() {
  const firstName = React.useRef(null);
  const lastName = React.useRef(null);
  const andPart = React.useRef(null);

  const imgPart = React.useRef(null);
  const mobileImgPart = React.useRef(null);
  const datePart = React.useRef(null);
  const storyPart = React.useRef(null);
  const buttonPart = React.useRef(null);

  React.useEffect(() => {
    if (!firstName.current || !lastName.current || !andPart.current) return;

    gsap.fromTo(
      firstName.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 2, ease: "power2.out" },
    );

    gsap.fromTo(
      lastName.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out" },
    );

    gsap.fromTo(
      andPart.current,
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 2, ease: "power2.out" },
    );
    gsap.fromTo(
      imgPart.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out" },
    );
    gsap.fromTo(
      mobileImgPart.current,
      { filter: " brightness(5) blur(10px)", y: 100 },
      {
        filter: " brightness(1) blur(0px)",
        y: 0,
        duration: 2,
        ease: "power2.out",
      },
    );

    gsap.fromTo(
      datePart.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 2, ease: "power2.out" },
    );

    gsap.fromTo(
      storyPart.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out" },
    );
    gsap.fromTo(
      buttonPart.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out" },
    );
  }, []);

  return (
    <div className="w-full flex flex-col  justify-center items-center sm:min-h-screen relative overflow-hidden ">
      <div
        ref={imgPart}
        className="flex flex-col bg-(--mobile-bg) py-[30px] relative sm:hidden h-[620px] w-full"
      >
        <div
          style={{
            background:
              " linear-gradient(180deg,var(--mobile-bg) 30%, rgba(237, 221, 83, 0) 100%)",
          }}
          className={"absolute top-0 left-0 w-full h-[45%] z-20"}
        />
        <img
          ref={mobileImgPart}
          src="/first_section.jpg"
          className="w-auto  sm:hidden"
        />
        <div
          style={{
            background:
              " linear-gradient(0deg,var(--mobile-bg) 30%, rgba(237, 221, 83, 0) 100%)",
          }}
          className={"absolute bottom-0 left-0 w-full h-[45%]"}
        />
      </div>

      <div className="flex flex-col max-sm:w-full max-sm:h-full gap-6 justify-between sm:justify-none items-center max-sm:absolute max-sm:top-0 max-sm:left-0 z-20   sm:py-0 py-[25px]">
        <div
          className="flex flex-col text-(--page-bg) sm:text-(--text-clr-1) text-[58px]  leading-none "
          style={{ fontFamily: "var(--oranienbaum)" }}
        >
          <div ref={firstName} className="flex gap-4">
            <p>ДМИТРИЙ</p> <p ref={andPart}>&</p>
          </div>
          <div ref={lastName} className="flex justify-center">
            {" "}
            <p>ОЛЬГА</p>
          </div>
        </div>
        <img
          ref={imgPart}
          src="/first_section.jpg"
          className="max-h-[449px] flex-1 w-auto hidden sm:block"
        />
        <div className="flex flex-col  w-full items-center gap-6">
          <div className="flex flex-col text-end w-full text-(--page-bg) sm:text-(--text-clr-1) px-[15px] sm:px-0">
            <p
              ref={datePart}
              className={"text-[30px] font-bold"}
              style={{ fontFamily: "var(--alex_brush)" }}
            >
              02/05/2026
            </p>

            <p ref={storyPart} className={"text-[16px] font-bold leading-none"}>
              Каждая история любви <br /> прекрасна, но <br /> наша - особенная.
            </p>
          </div>

          <div
            ref={buttonPart}
            className="w-[40%] text-[14px] sm:text-[16px] sm:w-[50%] mt-1.5 flex items-center justify-center gap-3 sm:h-[50px] h-[30px]  rounded-[50%] border sm:border-(--text-clr-1) border-(--page-bg) sm:text-(--text-clr-1) text-(--page-bg)"
          >
            <p>листайте вниз</p>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondSection() {
  const refLetter = React.useRef<HTMLDivElement>(null);
  const firstLetter = React.useRef<HTMLDivElement>(null);
  const secondLetter = React.useRef<HTMLDivElement>(null);

  const titleRef = React.useRef<HTMLDivElement>(null);
  const letterToGuest = React.useRef<HTMLDivElement>(null);

  const dateRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (
      !refLetter.current ||
      !firstLetter.current ||
      !secondLetter.current ||
      !titleRef.current
    )
      return;

    gsap.set(titleRef.current, { opacity: 0, y: 100 });
    gsap.set(letterToGuest.current, { opacity: 0, y: 100 });
    gsap.set(dateRef.current, { opacity: 0, y: 100 });
    gsap.set(firstLetter.current, { opacity: 0, x: 100 });
    gsap.set(secondLetter.current, { opacity: 0, x: -100 });

    gsap.to(firstLetter.current, {
      opacity: 1,
      x: 0,
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: firstLetter.current,
        start: "top 80%",
        once: true,
      },
    });
    gsap.to(secondLetter.current, {
      opacity: 1,
      x: 0,
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: secondLetter.current,
        start: "top 80%",
        once: true,
      },
    });
    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        once: true,
      },
    });

    gsap.to(dateRef.current, {
      opacity: 1,
      y: 0,
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: dateRef.current,
        start: "top 80%",
        once: true,
      },
    });

    gsap.to(letterToGuest.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: letterToGuest.current,
        start: "top 70%",
        once: true,
      },
    });

    gsap.to(refLetter.current, {
      marginTop: 0,
      ease: "none",
      scrollTrigger: {
        trigger: refLetter.current,
        start: "top 75%",
        end: "center 80%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full max-w-[1180px] max-sm:min-h-screen flex flex-col items-center gap-20 max-sm:gap-15 sm:pb-[80px] pb-[60px]">
      <div
        className="flex flex-col sm:flex-row justify-center text-[310px]  text-(--text-clr-1) max-sm:mt-[-30px] relative z-20"
        style={{ fontFamily: "var(--forum)" }}
      >
        <p ref={firstLetter} className={"leading-[0.8]"}>
          LO
        </p>
        <p ref={secondLetter} className={"leading-[0.8]"}>
          VE
        </p>
      </div>

      <p
        ref={titleRef}
        className=" font-bold text-[60px] text-center uppercase  max-sm:text-[40px] text-(--text-clr-1) leading-tight "
        style={{
          fontFamily: "var(--oranienbaum)",
          fontWeight: 300,
        }}
      >
        Дорогие наши <br /> друзья и родные!
      </p>

      <div
        className="w-[450px] h-[450px] max-sm:w-[400px] max-sm:h-[400px] relative bg-center bg-no-repeat bg-cover flex items-center justify-center rotate-[-8deg]"
        ref={letterToGuest}
        style={{
          backgroundImage: "url('/convert.webp')",
        }}
      >
        <div
          className="w-100% h-100%  bg-center bg-no-repeat bg-cover"
          style={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundImage: "url('/front-convert.webp')",
            position: "absolute",
            zIndex: 10,
          }}
        />

        <div
          className="w-100% h-100%  bg-center bg-no-repeat bg-cover"
          ref={refLetter}
          style={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            marginTop: "100px",
            backgroundImage: "url('/convert-paper.webp')",
            position: "absolute",
            zIndex: 5,
          }}
        >
          <p
            className={
              "max-w-[210px] text-[14px] text-center text-(--text-clr-1) absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-tight"
            }
          >
            Если вы сейчас читаете этот текст, значит совсем скоро вы увидите
            одного из нас в свадебном платье, и думаем, что вы догадываетесь,
            кого именно :)
          </p>
        </div>
      </div>

      <div
        className="flex items-center justify-center border-y border-(--text-clr-1) text-center relative w-[50%] max-sm:w-full"
        style={{ fontFamily: "var(--oranienbaum)" }}
        ref={dateRef}
      >
        <img
          src={"/heart-image.png"}
          className="absolute top-[50%] left-[50%] h-[180%] -translate-x-1/2 -translate-y-1/2"
        />
        <div className="flex flex-col flex-1">
          <p className="text-[16px] text-(--text-clr-1) border-b border-(--text-clr-1) uppercase  py-[2px] font-100 ">
            ПЯТНИЦА
          </p>

          <p className="text-[16px] text-(--text-clr-1)   py-[2px] font-bold ">
            мая
          </p>
          <p className="text-[100px]  text-(--text-clr-1) leading-[1.1]   py-[2px] ">
            1
          </p>
        </div>
        <div className="flex flex-col flex-1 border-x border-(--text-clr-1)">
          <p className="text-[16px] text-(--text-clr-1) border-b border-(--text-clr-1) uppercase  py-[2px]  font-100">
            СУББОТА
          </p>
          <p className="text-[16px] text-(--text-clr-1)   py-[2px]  font-bold">
            {" "}
            мая
          </p>
          <p className="text-[100px]  text-(--text-clr-1) leading-[1.1]   py-[2px] ">
            2
          </p>
        </div>
        <div className="flex flex-col flex-1">
          <p className="text-[16px] text-(--text-clr-1) border-b border-(--text-clr-1) uppercase  py-[2px]  font-100">
            ВОСКРЕСЕНЬЕ
          </p>
          <p className="text-[16px] text-(--text-clr-1)   py-[2px]  font-bold">
            {" "}
            мая
          </p>
          <p className="text-[100px] text-(--text-clr-1) leading-[1.1]   py-[2px] ">
            3
          </p>
        </div>
      </div>
    </div>
  );
}

const ThirdSection = () => {
  const locationTitle = React.useRef<HTMLDivElement>(null);
  const information = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!locationTitle.current || !information.current) return;

    gsap.set(locationTitle.current, {
      opacity: 0,
      y: 100,
      transform: "scale(0.8)",
    });
    gsap.set(information.current, {
      opacity: 0,
      y: 100,
    });

    gsap.to(information.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: information.current,
        start: "top 80%",
        once: true,
      },
    });

    gsap.to(locationTitle.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      transform: "scale(1)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: locationTitle.current,
        start: "top 80%",
        once: true,
      },
    });

    return () => {
      // window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full max-w-[580px] flex flex-col justify-center items-center ">
      <div
        className=" flex flex-col justify-center items-center w-full max-w-[800px] max-sm:w-[95vw]  gap-15 py-8"
        style={{
          backgroundColor: "rgba(251, 191, 197)",
        }}
      >
        <div
          ref={locationTitle}
          className={
            "flex flex-row uppercase max-sm:flex-col max-sm:text-center"
          }
          style={{ fontFamily: "var(--forum)" }}
        >
          <p className="text-[158px] text-(--text-clr-1) leading-none">Loca</p>
          <p className="text-[158px] text-(--text-clr-1) leading-none">tion</p>
        </div>
        <div
          ref={information}
          className="flex flex-row justify-center items-stretch gap-7 max-sm:gap-5"
        >
          <div className="flex flex-col justify-between items-center gap-7 flex-1">
            <p className="text-[16px] text-(--text-clr-1) text-center">
              Банкет: ул. Ленинская Слобода,
              <br /> 26, стр. 15
            </p>

            <a
              href="https://yandex.ru/maps/213/moscow/house/ulitsa_leninskaya_sloboda_26s15/Z04YcAJhTEcOQFtvfXtxeXRnYg==/?indoorLevel=1&ll=37.651501%2C55.709050&z=18.92"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50%] min-w-[200px] max-sm:min-w-[150px] mt-1.5 flex items-center justify-center gap-3 h-[50px] rounded-[50%] border border-(--text-clr-1) text-(--text-clr-1) cursor-pointer transition-all duration-300 hover:bg-(--text-clr-1) hover:text-white"
            >
              <p>как добраться</p>
            </a>
          </div>
          <div className="flex flex-col justify-between items-center gap-7 flex-1">
            <p className="text-[16px] text-(--text-clr-1) text-center">
              ЗАГС: Малый Харитоньевский пер., д. 10, стр. 1
            </p>

            <a
              href={
                "https://yandex.ru/maps/213/moscow/house/maly_kharitonyevskiy_pereulok_10s1/Z04YcANkQUQPQFtvfXt3dHVkYA==/?ll=37.644972%2C55.766026&mode=search&sctx=ZAAAAAgBEAAaKAoSCUVnmUUoYEZAEbTIdr6fZEhAEhIJj3IwmwDDzj8R1IBB0qdVuD8iBgABAgMEBSgKOABAypIHSAFqAnJ1nQHNzMw9oAEAqAEAvQGqBBnkwgEG5vG7kKQBggIX0KfQuNGB0YLRi9C1INC%2F0YDRg9C00YuKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=37.644972%2C55.766026&sspn=0.001491%2C0.000693&text=%D0%A7%D0%B8%D1%81%D1%82%D1%8B%D0%B5%20%D0%BF%D1%80%D1%83%D0%B4%D1%8B&z=19.87"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50%] min-w-[200px] max-sm:min-w-[150px] mt-1.5 flex items-center justify-center gap-3 h-[50px] rounded-[50%] border border-(--text-clr-1) text-(--text-clr-1) cursor-pointer transition-all duration-300 hover:bg-(--text-clr-1) hover:text-white"
            >
              <p>как добраться</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FourthSection = () => {
  const mainTitle = React.useRef(null);
  const subTitle = React.useRef(null);
  const firstPartOfTiming = React.useRef(null);
  const secondPartOfTiming = React.useRef(null);

  React.useEffect(() => {
    if (!mainTitle.current || !subTitle.current) return;

    gsap.set(mainTitle.current, {
      opacity: 0,
      y: 200,
    });
    gsap.set(subTitle.current, {
      opacity: 0,
      y: 100,
    });
    gsap.set(firstPartOfTiming.current, {
      opacity: 0,
      x: -100,
    });
    gsap.set(secondPartOfTiming.current, {
      opacity: 0,
      x: 100,
    });

    gsap.to(firstPartOfTiming.current, {
      opacity: 1,
      x: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: firstPartOfTiming.current,
        start: "top 90%",
        once: true,
      },
    });

    gsap.to(secondPartOfTiming.current, {
      opacity: 1,
      x: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: secondPartOfTiming.current,
        start: "top 90%",
        once: true,
      },
    });

    gsap.to(mainTitle.current, {
      opacity: 1,
      y: 0,
      duration: 2,
      transform: "scale(1)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: firstPartOfTiming.current,
        start: "top 90%",
        once: true,
      },
    });

    gsap.to(subTitle.current, {
      opacity: 1,
      y: 0,
      duration: 2,
      transform: "scale(1)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: firstPartOfTiming.current,
        start: "top 90%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const maps = [
    { id: 1, time: "12:45", text: () => <>Cбор гостей в загсе</> },
    {
      id: 2,
      time: "13:00",
      text: () => (
        <span>
          Начало церемонии <br /> регистрации
        </span>
      ),
    },
    { id: 3, time: "15:00", text: () => <>Фуршет</> },
    { id: 4, time: "16:00", text: () => <>Банкет</> },
    { id: 5, time: "23:00", text: () => <>Окончание вечера</> },
  ];

  return (
    <div
      className={"flex flex-col items-center w-full text-(--text-clr-1) py-5 "}
    >
      <p
        ref={mainTitle}
        className="text-[64px] uppercase leading-tight"
        style={{ fontFamily: "var(--forum)", fontWeight: 100 }}
      >
        Тайминг
      </p>
      <p
        ref={subTitle}
        className="text-[90px] leading-tight "
        style={{ fontFamily: "var(--fleur-de-leah" }}
      >
        of the day
      </p>
      <div className="flex gap-10 max-sm:gap-15 mt-10 items-center max-sm:flex-col">
        <div className="w-[95px] h-px bg-(--text-clr-1) max-sm:rotate-90" />
        <div
          className="flex gap-10 items-start max-sm:flex-col  max-sm:gap-4"
          style={{ fontFamily: "var(--forum)" }}
        >
          <div
            ref={firstPartOfTiming}
            className={
              "flex flex-row max-sm:flex-col gap-10  max-sm:gap-4  items-start max-sm:items-center max-sm:w-full"
            }
          >
            {maps.slice(0, 3).map((map) => (
              <div key={map.id} className="flex flex-col items-center">
                <p className="text-[32px]">{map.time}</p>
                <p className="text-[18px] text-center font-light">
                  {map.text()}
                </p>
              </div>
            ))}
          </div>

          <div
            ref={secondPartOfTiming}
            className={
              "flex flex-row max-sm:flex-col gap-10 max-sm:gap-4 items-start max-sm:items-center max-sm:w-full"
            }
          >
            {maps.slice(3).map((map) => (
              <div key={map.id} className="flex flex-col items-center">
                <p className="text-[32px]">{map.time}</p>
                <p className="text-[18px] text-center font-light">
                  {map.text()}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[95px] h-px bg-(--text-clr-1) max-sm:rotate-90" />
      </div>
    </div>
  );
};

const colors = [
  "#2A0306",
  "#101F12",
  "#ESE1C7",
  "#899064",
  "#D4B99D",
  "#A16C56",
];

const FifthSection = () => {
  const dressCode = React.useRef(null);
  const descriptionDressCode = React.useRef(null);
  const paletteRef = React.useRef(null);

  React.useEffect(() => {
    if (!dressCode.current || !descriptionDressCode.current) return;

    gsap.set(dressCode.current, {
      opacity: 0,
      y: 100,
    });
    gsap.set(descriptionDressCode.current, {
      opacity: 0,
      y: 100,
    });

    gsap.set(paletteRef.current, {
      opacity: 0,
      y: 100,
    });

    gsap.to(dressCode.current, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: dressCode.current,
        start: "top 90%",
        once: true,
      },
    });

    gsap.to(paletteRef.current, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: paletteRef.current,
        start: "top 90%",
        once: true,
      },
    });

    gsap.to(descriptionDressCode.current, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: descriptionDressCode.current,
        start: "top 90%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-(--text-clr-1)">
      <div className={"relative"}>
        <p
          className="text-[720px]"
          style={{ fontFamily: "var(--forum)", lineHeight: 1 }}
        >
          D
        </p>
        <p
          ref={dressCode}
          className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[64px] uppercase"
          style={{ fontFamily: "var(--forum)", lineHeight: 1 }}
        >
          Дресс- <br /> код
        </p>
      </div>
      <p ref={descriptionDressCode} className="text-[18px] text-center">
        Мы очень ждем и готовимся к нашему незабываемому <br /> дню! Поддержите
        нас Вашими улыбками и объятиями, <br /> а также красивыми нарядами в
        палитре мероприятия.
      </p>
      <div ref={paletteRef} className="flex gap-6 mt-10 max-w-[300px]">
        <img src="./colors.jpg" />
      </div>
    </div>
  );
};

function TimerPart() {
  const titleRef = React.useRef(null);

  const firstPartOfTimingRef = React.useRef(null);
  const secondPartOfTimingRef = React.useRef(null);
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    if (
      !firstPartOfTimingRef.current ||
      !secondPartOfTimingRef.current ||
      !titleRef.current
    )
      return;

    gsap.set(titleRef.current, {
      opacity: 0,
      y: 200,
    });

    gsap.set(firstPartOfTimingRef.current, {
      opacity: 0,
      x: -100,
    });

    gsap.set(secondPartOfTimingRef.current, {
      opacity: 0,
      x: 100,
    });

    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 90%",
        once: true,
      },
    });

    gsap.to(firstPartOfTimingRef.current, {
      opacity: 1,
      x: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: firstPartOfTimingRef.current,
        start: "top 90%",
        once: true,
      },
    });

    gsap.to(secondPartOfTimingRef.current, {
      opacity: 1,
      x: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: secondPartOfTimingRef.current,
        start: "top 90%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  React.useEffect(() => {
    const weddingDate = new Date("2026-05-02T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  const pluralize = (
    number: number,
    one: string,
    few: string,
    many: string,
  ) => {
    const mod10 = number % 10;
    const mod100 = number % 100;

    if (mod10 === 1 && mod100 !== 11) {
      return one;
    }
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
      return few;
    }
    return many;
  };

  return (
    <div
      className={"flex flex-col text-(--text-clr-1) py-10 gap-10"}
      style={{ fontFamily: "var(--forum)", lineHeight: 1 }}
    >
      <p ref={titleRef} className="text-[64px] max-sm:text-[44px] text-center ">
        ДО СВАДЬБЫ <br /> ОСТАЛОСЬ
      </p>

      <div className={"flex flex-row items-center justify-center gap-6 "}>
        <div
          ref={firstPartOfTimingRef}
          className={"flex flex-row items-center justify-evenly gap-6 flex-1 "}
        >
          <div className={"flex flex-col items-center justify-center gap-2"}>
            <p className="max-sm:text-[20px] text-[48px]">
              {formatNumber(timeLeft.days)}
            </p>
            <p className="max-sm:text-[16px] text-[18px]">
              {pluralize(timeLeft.days, "День", "Дня", "Дней")}
            </p>
          </div>

          <div className={"flex flex-col items-center justify-center gap-2"}>
            <p className="max-sm:text-[20px] text-[48px]">
              {formatNumber(timeLeft.hours)}
            </p>
            <p className="max-sm:text-[16px] text-[18px]">
              {pluralize(timeLeft.hours, "Час", "Часа", "Часов")}
            </p>
          </div>
        </div>
        <div
          ref={secondPartOfTimingRef}
          className={"flex flex-row items-center justify-evenly gap-6 flex-1"}
        >
          <div className={"flex flex-col items-center justify-center gap-2"}>
            <p className="max-sm:text-[20px] text-[48px]">
              {formatNumber(timeLeft.minutes)}
            </p>
            <p className="max-sm:text-[16px] text-[18px]">
              {pluralize(timeLeft.minutes, "Минута", "Минуты", "Минут")}
            </p>
          </div>

          <div className={"flex flex-col items-center justify-center gap-2"}>
            <p className="max-sm:text-[20px] text-[48px]">
              {formatNumber(timeLeft.seconds)}
            </p>
            <p className="max-sm:text-[16px] text-[18px]">
              {pluralize(timeLeft.seconds, "Секунда", "Секунды", "Секунд")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Questionnaire(props: { handleSuccess?: () => void }) {
  const { handleSuccess } = props;
  const [answer, setAnswer] = React.useState<{
    name: string;
    willBeThere?: string;
    partnerName?: string;
    drink: string[];
  }>({
    name: "",
    willBeThere: "",
    partnerName: "",
    drink: [],
  });

  const [status, setStatus] = React.useState<"idle" | "loading" | "success">(
    "idle",
  );

  const handleConfirm = async () => {
    setStatus("loading");

    try {
      const supabase = createClient(
        "https://vgitafkhtffrhtsoybug.supabase.co",
        "sb_publishable_2SCY6K40u_VcrRUtqh9RFw_4cyqzuEp",
      );

      await supabase.from("guests").insert([
        {
          Name: answer.name,
          willBeThere: answer.willBeThere === "C Удовольствием приду!",
          Drinks: answer.drink,
        },
      ]);

      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
        setAnswer({
          name: "",
          willBeThere: "",
          partnerName: "",
          drink: [],
        });
      }, 3000);
      handleSuccess?.();
    } catch (error) {
      setStatus("idle");
    }
  };

  if (status === "loading") {
    return (
      <div
        className="flex flex-col items-center justify-center text-(--text-clr-1) w-full max-w-[680px] min-h-[400px] gap-6 py-10 transition-all duration-500 ease-in-out"
        style={{
          fontFamily: "var(--forum)",
          lineHeight: 1,
        }}
      >
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-(--text-clr-1) border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-[24px] text-center animate-pulse">
          Записываем в журнал...
        </p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center text-(--text-clr-1) w-full max-w-[680px] min-h-[400px] gap-6 py-10 transition-all duration-500 ease-in-out"
        style={{
          fontFamily: "var(--forum)",
          lineHeight: 1,
        }}
      >
        <div className="relative">
          <svg
            className="w-24 h-24 text-(--text-clr-1) animate-[scale-in_0.5s_ease-out]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              strokeWidth="2"
              className="opacity-25"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4"
              className="animate-[draw_0.5s_ease-out_0.2s_forwards]"
              style={{
                strokeDasharray: 20,
                strokeDashoffset: 20,
              }}
            />
          </svg>
        </div>
        <div className="flex flex-col gap-2 text-center animate-[fade-in_0.5s_ease-out_0.3s_forwards] opacity-0">
          <p className="text-[32px] font-bold">Спасибо!</p>
          <p className="text-[20px]">Ваш ответ успешно отправлен</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col text-(--text-clr-1) w-full max-w-[680px] gap-8 py-10 transition-all duration-500 ease-in-out"
      style={{
        fontFamily: "var(--forum)",
        lineHeight: 1,
      }}
    >
      <div className="flex flex-col text-center gap-3">
        <p className="text-[64px] max-sm:text-[44px]">Анкета гостя</p>
        <p className="text-[18px] max-sm:text-[16px] font-bold">
          Пожалуйста, подтвердите ваше <br /> присутствие на свадьбе до
        </p>
        <p className="text-[54px] max-sm:text-[16px]">10 АПРЕЛЯ 2026 </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className={"text-[36px] max-sm:text-[24px] uppercase"}>
          Ваше имя и фамилия
        </p>
        <input
          type="text"
          value={answer.name}
          onChange={(e) => setAnswer({ ...answer, name: e.target.value })}
          placeholder="Ваше имя и фамилия"
          className={
            "text-[24px] py-3 max-sm:text-[18px] w-full border border-(--text-clr-1) placeholder:text-[24px] max-sm:placeholder:text-[18px] px-2"
          }
        />
      </div>

      <ComponentWithVariants
        value={answer.willBeThere || ""}
        variants={["C Удовольствием приду!", "К сожалению, не смогу"]}
        title="Планируете ли вы присутствовать?"
        onChange={(value) => {
          setAnswer({ ...answer, willBeThere: value });
        }}
      />

      {/* <div className="flex flex-col gap-3">
        <p className={"text-[36px] max-sm:text-[24px] uppercase"}>
          ЕСЛИ ВЫ БУДЕТЕ НЕ ОДНИ, заполните поле ниже, пожалуйста
        </p>

        <input
          type="text"
          value={answer.partnerName}
          placeholder="Имя и фамилия вашего спутника/спутницы"
          onChange={(e) =>
            setAnswer({ ...answer, partnerName: e.target.value })
          }
          className={
            "text-[24px] py-3 max-sm:text-[18px] w-full border border-(--text-clr-1) placeholder:text-[24px] max-sm:placeholder:text-[18px] px-2"
          }
        />
      </div> */}

      <ComponentWithVariants
        value={answer.drink}
        variants={[
          "Шампанское",
          "Белое вино",
          "Красное вино",
          "Водка",
          "Виски",
          "Джин",
          "Ром",
          "Не пью алкоголь",
        ]}
        title="ВАШИ ПРЕДПОЧТЕНИЯ"
        multi={true}
        onChange={(value) => {
          setAnswer((prev) => {
            const added = prev.drink?.find((v) => v === value);
            if (added) {
              return {
                ...prev,
                drink: prev.drink?.filter((v) => v !== value),
              };
            } else {
              return {
                ...prev,
                drink: [...prev.drink, value],
              };
            }
          });
        }}
      />
      <div className="flex flex-row flex-1 justify-center">
        <div
          onClick={handleConfirm}
          className="w-[50%]  min-w-[180px] mt-1.5 flex items-center justify-center gap-3 h-[50px] rounded-[50%] border border-(--text-clr-1) text-(--text-clr-1) cursor-pointer transition-all duration-300 hover:bg-(--text-clr-1) hover:text-white"
        >
          <p>ПОДТВЕРДИТЬ</p>
        </div>
      </div>
    </div>
  );
}

function ComponentWithVariants({
  variants,
  title,
  onChange,
  value,
}: {
  variants: string[];
  title: string;
  multi?: boolean;
  value: string | string[];
  onChange: (value: string) => void;
}) {
  const isString = typeof value === "string";

  return (
    <div className="flex flex-col gap-3">
      <p className={"text-[36px] max-sm:text-[24px] uppercase"}>{title}</p>
      {variants.map((variant, key) => {
        const isActive = isString ? value === variant : value.includes(variant);
        return (
          <div key={key} className="flex flex-row items-center gap-2">
            <div
              className={
                "w-[20px] h-[20px] rounded-md border border-(--text-clr-1) " +
                (isActive ? "bg-(--text-clr-1)" : "")
              }
            />
            <p
              onClick={() => onChange(variant)}
              className="text-[24px] max-sm:text-[18px] cursor-pointer"
            >
              {variant}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function AnswerWaiting() {
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="hidden md:inline-block">
        <Questionnaire />
      </div>
      <div className="md:hidden w-full">
        <ConfirmationMobile />
      </div>
    </div>
  );
}

function ConfirmationMobile() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleConfirm = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="w-full flex flex-row justify-center  py-10"
        style={{
          backgroundImage: 'url("/confirmationMobile.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="flex flex-col w-[80%]  items-center text-(--text-clr-1) gap-6 py-10 border-radius-[5px]"
          style={{
            fontFamily: "var(--forum)",
            lineHeight: 1,
            backgroundColor: "white",
          }}
        >
          <p className="text-[44px] leading-[0.9] text-center uppercase">
            Анкета <br /> гостя
          </p>
          <p className="text-[14px] text-center">
            Пожалуйста, подтвердите ваше <br /> присутствие на свадьбе до
          </p>
          <p className="text-[30px]">10 апреля 2026</p>
          <div className="flex flex-row flex-1 justify-center">
            <div
              onClick={handleConfirm}
              className="w-[40%]  min-w-[180px] mt-1.5 flex items-center justify-center gap-3 h-[50px] rounded-[50%] border border-(--text-clr-1) text-(--text-clr-1) cursor-pointer transition-all duration-300 hover:bg-(--text-clr-1) hover:text-white"
            >
              <p className="text-[14px]">ПОДТВЕРДИТЬ</p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full h-full bg-(--page-bg) overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-(--text-clr-1) hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="p-8 h-full flex flex-col justify-center">
              <Questionnaire
                handleSuccess={() =>
                  setTimeout(() => setIsModalOpen(false), 2000)
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
