import { useEffect, useRef, useState } from "react";
import { Reset, Text, TextField } from "@radix-ui/themes";
import classNames from "classnames";
import styles from "./inline-text-field.module.css";

export interface InlineTextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  defaultValue?: string;
  suggestion?: string;
}

export const InlineTextField = ({
  className,
  defaultValue,
  suggestion,
  ...props
}: InlineTextFieldProps) => {
  const [value, setValue] = useState<string | number>("");
  const [width, setWidth] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setValue(defaultValue || "");
  }, []);
  useEffect(() => {
    if (inputRef.current) {
      setWidth(`${inputRef.current.scrollWidth}px`);
    }
  }, [value]);

  return (
    <div className={classNames(styles.root, className)}>
      <Text className={styles.suggestion}>
        {suggestion ? suggestion : value}
      </Text>
      <Reset>
        <input
          {...props}
          className={styles.input}
          autoFocus
          defaultValue={props.defaultValue}
          onChange={handleChange}
          ref={inputRef}
          // style={{ width }}
        />
      </Reset>
      {/* <TextField.Root
        {...props}
        className={styles.input}
        size="1"
        variant="classic"
        autoFocus
        defaultValue={props.defaultValue}
        onChange={handleChange}
        ref={inputRef}
      /> */}
    </div>
  );
};
