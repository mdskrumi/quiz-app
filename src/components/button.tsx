import { FaSpinner } from "react-icons/fa";

type Props = {
  children: React.ReactNode;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
};
const Button: React.FC<Props> = ({
  children,
  handleClick,
  type = "submit",
  variant = "primary",
  loading,
  disabled,
  className,
}) => {
  return (
    <button
      className={`flex w-full items-center justify-center border p-2 text-sm font-medium leading-6 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
        variant === "secondary"
          ? "border-secondary-default bg-secondary-default text-white hover:bg-secondary-dark focus-visible:outline-white"
          : variant === "ghost"
          ? "bg-surface border-primary-light text-black hover:bg-primary-light focus-visible:outline-white"
          : variant === "danger"
          ? "border-danger-light bg-danger-default text-white hover:bg-danger-light focus-visible:outline-white"
          : "border-primary-default bg-primary-default text-white hover:bg-primary-dark focus-visible:outline-white"
      } ${
        disabled || loading ? "cursor-not-allowed opacity-70" : ""
      } ${className}`}
      type={type}
      onClick={() => {
        if (typeof handleClick === "function") {
          handleClick!();
        }
      }}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className="m-auto animate-spin">
          <FaSpinner className="w-5 h-5" />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
