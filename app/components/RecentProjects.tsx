"use client";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { motion } from "framer-motion";

// Define animation variants
const variants = {
  hidden: (direction: string) => ({
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "bottom" ? 100 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const RecentProjects = () => {
  // Helper function to determine animation direction
  const getDirection = (index: number) => {
    const directions = ["left", "right", "bottom"];
    return directions[index % directions.length];
  };

  return (
    <section className="text-[#ddd] overflow-hidden">
      <div className="py-10 max-w-7xl mx-auto px-3">
        <div className="max-w-7xl mx-auto">
          <h1 className="heading text-[30px] font-bold md:text-[38px] text-center mb-0 md:mb-10">
            Programs We Offered
          </h1>
          <div className="flex flex-wrap items-center justify-around px-4 gap-10 sm:gap-5 md:gap-16 mt-5">
            {projects.map((item, index) => (
              <motion.div
                key={item.id}
                className="lg:min-h-[32.5rem] h-[22rem] md:h-[25rem] backdrop-blur-sm flex items-center justify-center sm:w-64 md:w-80 w-[100%]"
                custom={getDirection(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants}
                transition={{
                  delay: index * 0.2, // Staggered delay
                }}
              >
                <PinContainer
                  title={"forensiqhq.com"}
                  href={item.link}
                >
                  <div className="relative flex items-center justify-center sm:w-[40vw] md:w-80 overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div
                      className="relative w-72 h-full overflow-hidden rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <Image
                        width={500}
                        height={500}
                        src="/bg.png"
                        alt="bgimg"
                        className="rounded-md"
                      />
                    </div>
                    <Image
                      width={500}
                      height={500}
                      src={item.img}
                      alt="cover"
                      className="z-0 absolute rounded-md bottom-0"
                    />
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{ color: "#BEC1DD", margin: "1vh 0" }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-green-400">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </PinContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
