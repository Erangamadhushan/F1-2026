interface Props {
  children: React.ReactNode;
}

const AnimatedText = ({ children }: Props) => {
  return (
    <span className="transition duration-500">
      {children}
    </span>
  );
};

export default AnimatedText;