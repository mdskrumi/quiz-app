import { FieldError } from "react-hook-form";

interface ErrorMessageInterface {
  message: string | FieldError;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageInterface> = ({
  message,
  className,
}) => (
  <p role="alert" className={`text-sm text-danger-default ${className}`}>
    {message.toString()}
  </p>
);

export default ErrorMessage;
