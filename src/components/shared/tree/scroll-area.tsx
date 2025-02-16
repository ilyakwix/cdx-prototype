import { ReactNode } from "react";
import { ScrollArea as RadixScrollArea } from "radix-ui";
import classNames from "classnames";
import styles from "./scroll-area.module.css";

export interface ScrollAreaProps {
  className?: string;
  children: ReactNode;
}

export const ScrollArea = ({ className, children }: ScrollAreaProps) => {
  return (
    <RadixScrollArea.Root className={classNames(styles.root, className)}>
      <RadixScrollArea.Viewport className={styles.viewport}>
        {children}
      </RadixScrollArea.Viewport>
      <RadixScrollArea.Scrollbar
        className={styles.scrollbar}
        orientation="vertical"
      >
        <RadixScrollArea.Thumb className={styles.thumb} />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Corner className={styles.corner} />
    </RadixScrollArea.Root>
  );
};
