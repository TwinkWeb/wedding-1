"use client";

import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import { useEffect, useRef, useState, forwardRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showSwipe, setShowSwipe] = useState(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      e.preventDefault();
      const delta = e.deltaY;
      const currentScroll = window.scrollY;
      const windowHeight = window.innerHeight;

      if (Math.abs(delta) > 10) {
        setIsScrolling(true);
        setShowSwipe(false);
        const targetSection =
          delta > 0
            ? Math.ceil(currentScroll / windowHeight)
            : Math.floor(currentScroll / windowHeight);

        gsap.to(window, {
          scrollTo: targetSection * windowHeight,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            setIsScrolling(false);
            setShowSwipe(true);
          },
        });
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;

      const touchEndY = e.changedTouches[0].clientY;
      const delta = touchStartY.current - touchEndY;
      const currentScroll = window.scrollY;
      const windowHeight = window.innerHeight;

      if (Math.abs(delta) > 50) {
        setIsScrolling(true);
        setShowSwipe(false);
        const targetSection =
          delta > 0
            ? Math.ceil(currentScroll / windowHeight)
            : Math.floor(currentScroll / windowHeight);

        gsap.to(window, {
          scrollTo: targetSection * windowHeight,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            setIsScrolling(false);
            setShowSwipe(true);
          },
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isScrolling]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col min-h-screen bg-zinc-50 font-sans"
    >
      <FirstSection
        showSwipe={showSwipe}
        onAnimationComplete={() => setShowSwipe(true)}
      />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
}

function FourthSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans py-4 px-2 gap-2">
      <div
        style={{
          width: "100%",
          height: "300px",
          borderRadius: "8px",
        }}
      >
        <video
          ref={videoRef}
          src="/saimon.MOV"
          loop
          muted
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div>
        <p className={"text-center"} style={{ color: "black" }}>
          Кот, прости меня, пожалуйста. Я не смог вовремя справиться со своими
          переживаниями, поэтому создалось впечатление, что мне это безралично,
          но это не так. Я очень переживаю из-за свадьбы, не потому что мне всё
          равно, а потому что мне ОЧЕНЬ важно, чтобы всё было нормально и чтобы
          мы ни в чём не страдали потом. Я переживаю из-за денег, чувствую
          ответственность, и это так сильно на меня давит, что я просто
          закрываюсь.Но я постараюсь исправиться! Прошу обратить внимание, что
          Саймон сверху, это +100 к удаче!
        </p>
      </div>
    </div>
  );
}

function SecondSection() {
  const steps = [
    { time: "12:30", title: "Церемония бракосочетания", Icon: ringsIcon },
    { time: "13:30", title: "Фотосессия", Icon: cameraIcon },
    { time: "15:30", title: "Начало банкета", Icon: plateIcon },
    { time: "23:00", title: "Окончание празднования", Icon: clockIcon },
  ];

  return (
    <div
      className="flex flex-col min-h-screen bg-zinc-50 font-sans relative justify-end"
      style={{ backgroundColor: "#65694e" }}
    >
      <div
        className="absolute top-[20px] right-0  w-[80%] h-[300px]"
        style={{
          borderTopLeftRadius: "30px",
          borderBottomLeftRadius: "30px",
          backgroundImage: "url('/second.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        className="flex flex-col items-start justify-center gap-4 px-4"
        style={{
          width: "80vw",
          height: "80vh",
          position: "relative",
          zIndex: 40,
          backgroundColor: "#e9ddd3",
          borderRadius: "50% 50% 0 0 / 20% 20% 0 0",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-row justify-start items-center columns-gap-2"
          >
            {step.Icon && <step.Icon />}
            <div style={{ marginLeft: "15px" }} className="flex flex-col">
              <p className="text font-bold" style={{ color: "#65694e" }}>
                {step.time}
              </p>
              <p
                className="text"
                style={{ color: "#65694e", fontSize: "14px" }}
              >
                {step.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FirstSection({
  showSwipe,
  onAnimationComplete,
}: {
  showSwipe: boolean;
  onAnimationComplete: () => void;
}) {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const namesRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (
      titleRef.current &&
      imageRef.current &&
      namesRef.current &&
      portraitRef.current &&
      subtextRef.current
    ) {
      const text = "Приглашение на свадьбу";
      titleRef.current.innerHTML = "";

      const chars = text.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        span.style.display = "inline-block";
        // Preserve spaces
        if (char === " ") {
          span.style.width = "0.25em";
        }
        return span;
      });

      chars.forEach((char) => titleRef.current?.appendChild(char));

      // Set initial state for image, names and portrait
      gsap.set(namesRef.current, { y: -20 });
      gsap.set(portraitRef.current, { y: 20 });

      // Animate title letters
      gsap.to(chars, {
        opacity: 1,
        duration: 0.05,
        stagger: 0.05,
        ease: "power2.inOut",
        onComplete: () => {
          // Animate image, names and portrait after title animation completes

          gsap.to(namesRef.current, {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(imageRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              // Animate subtext after image appears
              const subtextContent =
                " С большой радостью приглашаем вас отпраздновать с нами день создания нашей семьи; ваше присутствие сделает этот момент ещё более особенным";
              if (subtextRef.current) {
                subtextRef.current.innerHTML = "";

                const subtextChars = subtextContent.split("").map((char) => {
                  const span = document.createElement("span");
                  span.textContent = char;
                  span.style.opacity = "0";
                  span.style.display = "inline-block";
                  if (char === " ") {
                    span.style.width = "0.25em";
                  }
                  return span;
                });

                subtextChars.forEach((char) =>
                  subtextRef.current?.appendChild(char)
                );

                gsap.to(subtextChars, {
                  opacity: 1,
                  duration: 0.03,
                  stagger: 0.02,
                  ease: "power2.inOut",
                  onComplete: () => {
                    // Call callback after all animations complete
                    onAnimationComplete();
                  },
                });
              }
            },
          });
          gsap.to(portraitRef.current, {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
    }
  }, []);

  return (
    <div className="flex min-h-screen pt-4 pb-6 flex-col items-center justify-between relative">
      <p
        ref={titleRef}
        className={`text-black text-4xl ${greatVibes.className} title`}
      />

      <div ref={imageRef} className="relative image" style={{ opacity: 0 }}>
        <div
          ref={namesRef}
          className="absolute px-1 z-50 names"
          style={{
            width: "60px",
            height: "100px",
            backgroundColor: "#65694e",
            left: "50%",
            top: "-40px",
            borderRadius: "15px",
            transform: "translateX(-50%)",
          }}
        >
          <p
            className="text-white text-center "
            style={{
              fontFamily: "var(--font-fancy)",

              textAlign: "left",
              fontSize: "2rem",
            }}
          >
            D
          </p>
          <p
            className="text-white text-center"
            style={{
              fontFamily: "var(--font-fancy)",
              fontSize: "2rem",
              marginTop: "-20px",
            }}
          >
            &
          </p>
          <p
            className="text-white text-center text-align-right"
            style={{
              fontFamily: "var(--font-fancy)",
              fontSize: "2rem",
              textAlignLast: "right",
              marginTop: "-20px",
            }}
          >
            O
          </p>
        </div>
        <div
          ref={portraitRef}
          className="relative portrait"
          style={{
            borderTopLeftRadius: "43%",
            borderTopRightRadius: "43%",
            width: "90vw",

            overflow: "hidden",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 bottom-0 opacity-20"
            style={{
              backgroundColor: "white",
            }}
          />
          <Image src="/ph.jpg" alt="rings" height={1000} width={800} />
        </div>
      </div>
      <p
        ref={subtextRef}
        style={{ minHeight: "160px" }}
        className={`text-black text-2xl px-4 text-center ${greatVibes.className} subtext`}
      />

      {/* Swipe indicator */}
      {showSwipe && (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-300">
          <p className={`text-black text-sm `}>Swipe</p>
          <div className=" animate-bounce z-50">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

const ringsIcon = () => {
  return (
    <svg
      fill="#65694e"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512.00 512.00"
      xmlSpace="preserve"
      width="64px"
      height="64px"
      transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"
      stroke="#65694e"
      strokeWidth="0.00512"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M371.769,176.364l30.47-30.47l-21.71-25.265h-52.305l-21.71,25.265l30.47,30.47 c-29.557,3.279-57.658,14.863-80.982,33.507c-23.324-18.644-51.425-30.228-80.982-33.507l30.47-30.47l-21.71-25.265h-52.305 l-21.71,25.265l30.47,30.47C61.471,185.049,0,251.988,0,333.024c0,86.914,70.71,157.625,157.625,157.625 c35.834,0,70.513-12.2,98.375-34.472c27.862,22.272,62.542,34.472,98.375,34.472C441.29,490.649,512,419.938,512,333.024 C512,251.988,450.529,185.049,371.769,176.364z M327.237,145.11l7.97-9.275h38.337l7.969,9.275l-27.138,27.138L327.237,145.11z M130.486,145.11l7.97-9.275h38.337l7.969,9.275l-27.138,27.138L130.486,145.11z M157.625,475.441 c-78.529,0-142.417-63.888-142.417-142.417s63.888-142.417,142.417-142.417c34.337,0,67.503,12.392,93.387,34.894 c8.035,6.984,15.308,14.898,21.618,23.522c17.933,24.508,27.412,53.555,27.412,84.002c0,27.573-7.775,54-22.563,76.946 c-0.192-0.192-0.376-0.39-0.566-0.583c-0.834-0.847-1.659-1.702-2.465-2.574c-0.357-0.386-0.705-0.781-1.055-1.172 c-0.661-0.736-1.315-1.479-1.955-2.233c-0.368-0.433-0.731-0.869-1.092-1.308c-0.618-0.751-1.225-1.513-1.823-2.28 c-0.337-0.432-0.675-0.863-1.005-1.3c-0.655-0.867-1.293-1.748-1.921-2.636c-0.195-0.275-0.396-0.545-0.589-0.823 c10.887-18.81,16.619-40.153,16.619-62.037c0-21.925-5.759-43.301-16.685-62.137l0.061-0.096l-2.58-4.072 c-4.983-7.859-10.817-15.117-17.407-21.662c-2.197-2.182-4.478-4.285-6.839-6.304l-6.234-5.332l-0.161,0.22 c-21.339-15.929-47.37-24.62-74.156-24.62c-68.375,0-124.002,55.628-124.002,124.002s55.627,124.001,124.002,124.001 c26.853,0,52.947-8.733,74.315-24.737c0.095,0.118,0.196,0.231,0.291,0.348c0.539,0.661,1.092,1.311,1.641,1.964 c0.423,0.501,0.841,1.007,1.269,1.503c0.586,0.677,1.185,1.342,1.782,2.01c0.409,0.457,0.812,0.92,1.226,1.372 c0.656,0.716,1.326,1.418,1.995,2.122c0.37,0.389,0.734,0.787,1.108,1.172c0.815,0.841,1.646,1.666,2.48,2.488 c0.228,0.225,0.449,0.456,0.677,0.68C219.606,465.022,189.107,475.441,157.625,475.441z M289.077,246.04 c18.767-14.095,41.689-21.81,65.298-21.81c59.989,0,108.794,48.805,108.794,108.794c0,59.989-48.805,108.792-108.794,108.792 c-23.608,0-46.531-7.715-65.298-21.81c17.142-25.819,26.172-55.735,26.172-86.984C315.249,301.775,306.22,271.858,289.077,246.04z M256,379.489c-6.834-14.454-10.418-30.285-10.418-46.465c0-16.18,3.584-32.012,10.418-46.465 c6.834,14.454,10.418,30.285,10.418,46.465C266.418,349.204,262.834,365.035,256,379.489z M222.923,246.04 c-17.142,25.819-26.172,55.735-26.172,86.984c0,31.248,9.029,61.165,26.172,86.984c-18.767,14.095-41.69,21.81-65.298,21.81 c-59.989,0-108.794-48.804-108.794-108.793S97.636,224.23,157.625,224.23C181.234,224.23,204.156,231.945,222.923,246.04z M354.375,475.441c-34.337,0-67.503-12.392-93.387-34.894c-8.034-6.983-15.308-14.898-21.618-23.522 c-17.933-24.508-27.412-53.555-27.412-84.001c0-27.573,7.775-54.001,22.562-76.946c0.194,0.194,0.38,0.394,0.572,0.589 c0.833,0.845,1.656,1.698,2.46,2.569c0.355,0.384,0.701,0.778,1.05,1.167c0.664,0.739,1.32,1.485,1.964,2.243 c0.364,0.429,0.724,0.862,1.082,1.296c0.622,0.756,1.233,1.522,1.835,2.294c0.334,0.428,0.669,0.855,0.997,1.289 c0.655,0.867,1.292,1.748,1.921,2.635c0.196,0.277,0.398,0.548,0.591,0.827c-10.887,18.81-16.619,40.153-16.619,62.038 c0,21.925,5.759,43.3,16.685,62.136l-0.062,0.096l2.581,4.072c6.643,10.478,14.8,19.888,24.245,27.966l6.234,5.332l0.161-0.221 c21.34,15.929,47.369,24.62,74.156,24.62c68.375,0,124.002-55.626,124.002-124.001s-55.626-124.001-124.002-124.001 c-26.853,0-52.947,8.733-74.315,24.738c-0.095-0.118-0.196-0.231-0.291-0.348c-0.538-0.66-1.089-1.309-1.638-1.96 c-0.424-0.503-0.844-1.011-1.274-1.508c-0.58-0.67-1.173-1.329-1.764-1.989c-0.416-0.464-0.825-0.935-1.246-1.394 c-0.642-0.701-1.298-1.387-1.951-2.075c-0.385-0.406-0.763-0.818-1.153-1.221c-0.781-0.805-1.577-1.594-2.373-2.382 c-0.262-0.259-0.516-0.525-0.78-0.783c24.804-19.075,55.302-29.493,86.786-29.493c78.529,0,142.417,63.888,142.417,142.417 C496.792,411.554,432.904,475.441,354.375,475.441z"></path>{" "}
          </g>{" "}
        </g>{" "}
        <g>
          {" "}
          <g>
            {" "}
            <rect
              x="248.396"
              y="21.351"
              width="15.208"
              height="47.344"
            ></rect>{" "}
          </g>{" "}
        </g>{" "}
        <g>
          {" "}
          <g>
            {" "}
            <rect
              x="294.983"
              y="52.217"
              transform="matrix(0.4198 -0.9076 0.9076 0.4198 130.5873 323.9224)"
              width="47.343"
              height="15.207"
            ></rect>{" "}
          </g>{" "}
        </g>{" "}
        <g>
          {" "}
          <g>
            {" "}
            <rect
              x="185.738"
              y="36.156"
              transform="matrix(0.9076 -0.4198 0.4198 0.9076 -7.2537 86.6932)"
              width="15.207"
              height="47.343"
            ></rect>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

const cameraIcon = () => {
  return (
    <svg
      width="64px"
      height="64px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#65694e"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
          stroke="#65694e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z"
          stroke="#65694e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

const plateIcon = () => {
  return (
    <svg
      fill="#65694e"
      height="64px"
      width="64px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 408.113 408.113"
      xmlSpace="preserve"
      stroke="#65694e"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M203.174,342.483c-76.33,0-138.429-62.097-138.429-138.424c0-76.33,62.099-138.429,138.429-138.429 c76.327,0,138.424,62.099,138.424,138.429C341.598,280.387,279.501,342.483,203.174,342.483z M203.174,75.63 c-70.815,0-128.429,57.613-128.429,128.429c0,70.813,57.613,128.424,128.429,128.424c70.813,0,128.424-57.611,128.424-128.424 C331.598,133.243,273.987,75.63,203.174,75.63z M35.277,336.753H21.132c-2.762,0-5-2.239-5-5V176.161 C6.603,171.921,0,162.824,0,152.311V82.113c0-2.761,2.238-5,5-5s5,2.239,5,5v65.198h5.468V82.113c0-2.761,2.238-5,5-5s5,2.239,5,5 v65.198h5.474V82.113c0-2.761,2.238-5,5-5s5,2.239,5,5v65.198h5.469V82.113c0-2.761,2.238-5,5-5s5,2.239,5,5v70.198 c0,10.513-6.604,19.61-16.133,23.851v155.591C40.277,334.514,38.039,336.753,35.277,336.753z M26.132,326.753h4.146V178.703h-4.146 V326.753z M10.866,157.311c2.353,6.602,9.236,11.393,17.339,11.393s14.986-4.791,17.339-11.393H10.866z M384.691,335.464h-14.6 c-2.762,0-5-2.239-5-5V79.242c0-2.063,1.268-3.916,3.191-4.662c1.928-0.747,4.108-0.234,5.501,1.29 c1.122,1.229,27.53,30.567,32.242,72.151c4.586,40.435,0.21,107.148,0.021,109.968c-0.176,2.626-2.357,4.667-4.989,4.667h-11.367 v67.808C389.691,333.225,387.453,335.464,384.691,335.464z M375.092,325.464h4.6v-62.808h-4.6V325.464z M375.092,252.656h21.26 c0.916-16.083,3.539-70.003-0.261-103.508c-2.673-23.579-13.229-43.257-20.999-54.955V252.656z M203.174,299.064 c-52.389,0-95.01-42.619-95.01-95.005c0-52.389,42.621-95.01,95.01-95.01c52.386,0,95.005,42.622,95.005,95.01 C298.179,256.445,255.56,299.064,203.174,299.064z M203.174,119.049c-46.875,0-85.01,38.135-85.01,85.01 c0,46.872,38.135,85.005,85.01,85.005c46.872,0,85.005-38.133,85.005-85.005C288.179,157.184,250.046,119.049,203.174,119.049z M104.805,140.978c-0.894,0-1.799-0.239-2.615-0.742c-2.353-1.447-3.085-4.527-1.638-6.879 c16.541-26.879,47.096-41.172,48.388-41.767c2.509-1.156,5.479-0.059,6.634,2.45c1.154,2.507,0.059,5.475-2.447,6.631l0,0 c-0.289,0.134-29.134,13.675-44.059,37.927C108.123,140.133,106.483,140.978,104.805,140.978z"></path>{" "}
      </g>
    </svg>
  );
};

const clockIcon = () => {
  return (
    <svg
      width="64px"
      height="64px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke="#65694e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

const ThirdSection = () => {
  const photo1Ref = useRef<HTMLDivElement>(null);
  const photo2Ref = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !photo1Ref.current ||
      !photo2Ref.current ||
      !heartRef.current
    )
      return;

    // Set initial state
    gsap.set([photo1Ref.current, photo2Ref.current], { opacity: 0 });
    gsap.set(heartRef.current, { opacity: 0, scale: 0 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Fade in both photos
            gsap.to([photo1Ref.current, photo2Ref.current], {
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              onComplete: () => {
                // Rotate photos after fade in completes
                const tl = gsap.timeline();

                tl.to(
                  photo1Ref.current,
                  {
                    rotation: -10,
                    duration: 0.6,
                    ease: "back.out(1.2)",
                  },
                  0
                );

                tl.to(
                  photo2Ref.current,
                  {
                    rotation: 10,
                    duration: 0.6,
                    ease: "back.out(1.2)",
                  },
                  0
                );

                // Show heart after photos rotate
                tl.to(heartRef.current, {
                  opacity: 1,
                  scale: 1,
                  duration: 0.5,
                  ease: "back.out(1.7)",
                });
              },
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
      className={
        "flex flex-col min-h-screen bg-zinc-50 font-sans justify-evenly  overflow-hidden"
      }
      style={{ backgroundColor: "#e9ddd3" }}
    >
      <div
        className="flex flex-row px-3 items-end relative"
        style={{ height: 400 }}
      >
        <div
          ref={heartRef}
          className="absolute heart"
          style={{ top: 0, left: "50%", transform: "translate(-50%, 40%)" }}
        >
          <HeartIcon />
        </div>

        <PhotoComp ref={photo1Ref} url="/dmitri_child.jpg" name="Dmitri" />
        <PhotoComp ref={photo2Ref} url="/olya-child.jpg" name="Olga" />
      </div>
      <p
        className=" text-center text-2xl"
        style={{ color: "black", fontFamily: "Parisienne" }}
      >
        С огромной радостью приглашаем вас на самое главное событие в нашей
        жизни - нашу свадьбу!
      </p>

      <div className="flex flex-row px-3 items-center justify-center relative gap-1.5">
        <p
          className={"text-6xl"}
          style={{ color: "black", fontFamily: "Parisienne" }}
        >
          02
        </p>
        <div
          style={{
            width: "2px",
            height: "60px",
            backgroundColor: "#65694e",
            borderRadius: "10px",
          }}
        />
        <p
          className={"text-6xl"}
          style={{ color: "black", fontFamily: "Parisienne" }}
        >
          05
        </p>
        <div
          style={{
            width: "2px",
            height: "60px",
            backgroundColor: "#65694e",
            borderRadius: "10px",
          }}
        />

        <p
          className={"text-6xl"}
          style={{ color: "black", fontFamily: "Parisienne" }}
        >
          25
        </p>
      </div>
    </div>
  );
};

const PhotoComp = forwardRef<HTMLDivElement, { url: string; name: string }>(
  ({ url, name }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          backgroundColor: "white",
          width: 200,
          height: "80%",
          boxShadow:
            "0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.15)",
        }}
        className="flex flex-col p-2 gap-2"
      >
        <div
          style={{
            width: "100%",
            height: "90%",
            backgroundImage: "url('" + url + "')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <p
          className="text-center text-2xl "
          style={{ fontFamily: "Parisienne", color: "black" }}
        >
          {name}
        </p>
      </div>
    );
  }
);

function HeartIcon() {
  return (
    <svg
      width="64px"
      height="64px"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke=""
    >
      <g id="SVGRepo_bgCaredrediered"></g>
      <g id="SVGRepo_tredaceredCaredrediered"></g>
      <g id="SVGRepo_iconCaredrediered">
        {" "}
        <path
          d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
          fill="red"
        ></path>{" "}
      </g>
    </svg>
  );
}

PhotoComp.displayName = "PhotoComp";
