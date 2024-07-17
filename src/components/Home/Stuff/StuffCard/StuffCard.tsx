import { motion } from "framer-motion";
import { FaSmile } from "react-icons/fa";
import checkOddOrEven from "~/utils/oddOrEven.util";

interface IProps {
  item: {
    title: string;
    description: string;
    button: {
      href: string;
      title: string;
    };
    svg: React.ReactNode;
    status: string;
    id: number;
  };
}

export default function StuffCard({ item }: IProps) {
  const result = checkOddOrEven(item.id);

  return (
    <div
      className={`relative flex flex-col items-start gap-6 rounded-2xl border-4 border-secondary-main bg-white-main p-4 sm:p-10 lg:w-full lg:max-w-[635px] lg:gap-8 ${result == "Odd" ? "lg:mr-auto" : "lg:ml-auto"}`}
    >
      <div className="flex w-full items-center justify-between">
        <h6 className="text-xl font-bold text-primary-main lg:text-3xl">
          {item.title}
        </h6>
        <div
          className={`flex items-center justify-center gap-2 rounded-full p-2 text-sm font-light lg:text-base ${item.status === "available" ? "bg-blue-main/20 text-blue-main" : "bg-gray-300 text-stone-500"}`}
        >
          {item.status === "available" ? "Available" : "Coming Soon"}
          <FaSmile size="20" />
        </div>
      </div>
      <p className="max-w-[420px] text-sm font-light text-primary-main lg:text-xl">
        {item.description}
      </p>
      {item.status === "available" ? (
        <motion.a
          href={item.button.href}
          target="_blank"
          referrerPolicy="no-referrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-lg bg-red-main px-6 py-2 font-inter font-bold text-white-main lg:px-8 lg:py-5"
        >
          {item.button.title}
        </motion.a>
      ) : (
        <button
          type="button"
          className="cursor-not-allowed rounded-lg bg-red-main px-6 py-2 font-inter font-bold text-white-main opacity-20 lg:px-8 lg:py-5"
        >
          {item.button.title}
        </button>
      )}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0, translateY: "-100vh" }}
        animate={{ opacity: 1, translateY: 0 }}
        className={`absolute -bottom-10 -right-8 h-36 w-36 animate-ping lg:bottom-20 lg:h-[250px] lg:w-[250px] ${result == "Odd" ? "lg:-right-80" : "lg:-left-80 lg:right-0"}`}
      >
        {item.svg}
      </motion.div>
    </div>
  );
}
