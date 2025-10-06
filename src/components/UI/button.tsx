
interface ButtonProps { 
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  styleCustom: string;
}

export default function ButtonHome({ children, type, onClick, styleCustom }: ButtonProps) {
  return (
    <button
      type={type}
      sx={{ styleCustom }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
