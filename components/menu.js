import { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";

const vMenu = {
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

export default function Menu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.div
      className="absolute w-full h-full top-0 left-0"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="w-full h-full bg-gray-600 absolute top-0 left-0"
        variants={vMenu}
      />
      <Items />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
}

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
