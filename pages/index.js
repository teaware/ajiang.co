import Head from "next/head";
import { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const menu = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 3 + 200}px at calc(100% - 3rem) 3rem)`,
    transition: {
      type: "spring",
      stiffness: 40,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(1.8rem at calc(100% - 3rem) 3rem)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 320,
      damping: 40,
    },
  },
};

const Magic = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.div
      className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center lg:items-stretch"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <div className="grid justify-center px-4 ml-0 lg:self-start lg:ml-48">
        <h1 className="font-serif text-6xl lg:text-8xl text-black mb-4">
          阿江 <span className="char otter">🦦</span>
        </h1>
        <p className="block self-end ml-auto text-xl font-mono">
          visit my{" "}
          <Link href="https://ajiang.co">
            <a
              target="_blank"
              className="text-green-900 bg-white hover:text-white hover:bg-green-900"
            >
              blog
            </a>
          </Link>
        </p>
      </div>
      <motion.div
        className="w-full h-full bg-gray-600 absolute top-0 left-0"
        variants={menu}
      />
      <Items />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
};

const vItems = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    visibility: "visible",
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    transitionEnd: { visibility: "hidden" },
  },
};
const vPage = {
  open: {
    visibility: "visible",
  },
  closed: {
    transitionEnd: { visibility: "hidden" },
  },
};

const Items = () => (
  <motion.div
    variants={vPage}
    className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
  >
    <motion.ul variants={vItems}>
      <Me />
      {itemIds.map((i) => (
        <Item i={i} key={i} />
      ))}
    </motion.ul>
  </motion.div>
);
const itemIds = [0, 1, 2, 3, 4];

const vItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    visibility: "visible",
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    transitionEnd: { visibility: "hidden" },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const Me = () => {
  return (
    <motion.li
      variants={vItem}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href="https://ajiang.co">
        <a
          className="flex items-center w-60 h-10 mb-6 text-white"
          target="_blank"
        >
          <div className="w-10 h-10 rounded-full mr-5">
            <Image
              className="object-cover w-full h-full rounded-full"
              src="/img/me.jpg"
              width="600"
              height="600"
            />
          </div>
          <div className="w-40 h-5 rounded-md">water 🦦</div>
        </a>
      </Link>
    </motion.li>
  );
};

const Item = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className="flex items-center w-60 h-10 mb-6 cursor-pointer"
      variants={vItem}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-10 h-10 rounded-full mr-5" style={style} />
      <div className="w-40 h-5 rounded-md" style={style} />
    </motion.li>
  );
};

const Path = (props) => (
  <motion.path
    className="stroke-current stroke-2"
    strokeLinecap="square"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center select-none outline-none focus:outline-none border-none bg-transparent"
  >
    <svg className="w-6 h-6 text-white fill-current" viewBox="0 -2 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>阿江</title>
      </Head>

      <div className="h-70vh max-h-screen relative">
        <svg
          className="block w-full h-20 lg:h-40 max-h-screen fill-current text-green-900 absolute bottom-0 left-0"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x={50} y={6} />
          </g>
        </svg>
      </div>
      <div className="h-30vh  bg-green-900 -mt-px pb-px box-content" />
      <Magic />
    </>
  );
}
