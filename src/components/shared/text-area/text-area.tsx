import { useCallback, useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./text-area.module.css";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  maxHeight?: number;
}

export const Textarea = ({
  className,
  maxHeight,
  placeholder,
  ...props
}: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const scrollHeight = Math.min(
        textarea.scrollHeight,
        maxHeight ?? Infinity
      );
      textarea.style.height = `${scrollHeight}px`;
    }
  }, [maxHeight]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (props.onChange) {
      props.onChange(event);
    }
    adjustHeight();
  };

  useEffect(() => {
    adjustHeight();
  }, [adjustHeight, maxHeight]);

  return (
    <textarea
      {...props}
      ref={textareaRef}
      onChange={handleChange}
      className={classNames(styles.root, className)}
      placeholder={placeholder}
      style={{ maxHeight: maxHeight ? `${maxHeight}px` : undefined }}
    />
  );
};
