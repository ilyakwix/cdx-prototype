import { Textarea } from "../shared/text-area/text-area";
import { Tooltip } from "../shared/tooltip/tooltip";
import { ArrowUpIcon, FigmaLogoIcon, ImageIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import classNames from "classnames";
import styles from "./chat.module.css";
import { Card } from "@radix-ui/themes";

export interface ChatProps {
  className?: string;
}

export const Chat = ({ className }: ChatProps) => {
  const [promptValue, setPromptValue] = useState("");

  return (
    <section className={classNames(styles.root, className)}>
      <div>
        <Card>Hello World</Card>
      </div>
      <div>
        <div className={styles.prompt}>
          <Textarea
            className={styles.input}
            placeholder="How Codux can help you today?"
            maxHeight={200}
            rows={5}
            value={promptValue}
            onChange={(e) => setPromptValue(e.target.value)}
          />
          <div className={styles.actions}>
            <div className={styles.secondaryActions}>
              <Tooltip content="Attach images...">
                <button className={styles.secondaryButton}>
                  <ImageIcon />
                </button>
              </Tooltip>
              <Tooltip content="Add Figma file...">
                <button className={styles.secondaryButton}>
                  <FigmaLogoIcon />
                </button>
              </Tooltip>
            </div>
            <Tooltip content="Send">
              <button className={styles.sendButton} disabled={!promptValue}>
                <ArrowUpIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <span className={styles.footnote}>
          Codux.ai might get things wrong. Trust but verify.
        </span>
      </div>
    </section>
  );
};
