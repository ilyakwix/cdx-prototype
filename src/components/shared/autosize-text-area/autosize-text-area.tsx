import { useCallback, useEffect, useRef } from "react";
import { TextArea, TextAreaProps } from "@radix-ui/themes";
import classNames from "classnames";
import styles from "./autosize-text-area.module.css";

interface AutosizeTextAreaProps extends TextAreaProps {
  className?: string;
  maxHeight?: number;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const AutosizeTextArea = ({
  className,
  maxHeight,
  placeholder,
  onChange,
  ...props
}: AutosizeTextAreaProps) => {
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
    if (onChange) {
      onChange(event);
    }
    adjustHeight();
  };

  useEffect(() => {
    adjustHeight();
  }, [adjustHeight, maxHeight]);

  return (
    <TextArea
      {...props}
      ref={textareaRef}
      onChange={handleChange}
      className={classNames(styles.root, className)}
      placeholder={placeholder}
      style={{ maxHeight: maxHeight ? `${maxHeight}px` : undefined }}
    />
  );
};
