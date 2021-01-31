import { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";

const vMenu = {
  open: (height = 1000) => ({
    clipPath: `circle(${
      height * 3 + 200
    }px at 2rem calc(2rem + env(safe-area-inset-top)))`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
    zIndex: 0,
  }),
  closed: {
    clipPath: "circle(1px at 2rem calc(2rem + env(safe-area-inset-top)))",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    transitionEnd: { zIndex: -1 },
  },
};

export default function Menu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.div
      className="menu"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="w-full h-full max-h-screen bg-indigo-300 dark:bg-indigo-800 absolute top-0 left-0 bottom-0 pt-safe-top box-content"
        variants={vMenu}
      >
        <Items />
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
}

const vItems = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Items = () => (
  <motion.ul
    className="absolute top-0 left-0 bottom-0 w-full flex flex-col items-center justify-center"
    variants={vItems}
  >
    {itemIds.map((i) => (
      <Item i={i} key={i} />
    ))}
  </motion.ul>
);
const itemIds = [0, 1, 2, 3, 4];

const vItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
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
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    className="absolute top-4 left-4 w-8 h-8 mt-safe-top rounded-full transition-all duration-500 ease-in flex items-center justify-center select-none outline-none focus:outline-none border-none text-gray-600 dark:text-white"
  >
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 -2 23 23">
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
