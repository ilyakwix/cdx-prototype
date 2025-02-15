import { ReactNode } from "react";
import { Tooltip as RadixTooltip } from "radix-ui";
import classNames from "classnames";
import styles from "./tooltip.module.css";

export interface TooltipProps extends RadixTooltip.TooltipProps {
  className?: string;
  children: ReactNode;
  content: ReactNode;
}

export const Tooltip = ({ className, children, content }: TooltipProps) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={classNames(styles.content, className)}
            sideOffset={5}
          >
            {content}
            <RadixTooltip.Arrow className={styles.arrow} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};
