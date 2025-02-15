import { BrowserBar } from "./browser-bar/browser-bar";
import { useState } from "react";
import styles from "./stage.module.css";
import { Allotment } from "allotment";

export interface StageProps {
  className?: string;
}

export const Stage = ({ className }: StageProps) => {
  const [iframeKey, setIframeKey] = useState(0);

  const handleReload = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <Allotment className={className} vertical>
      <Allotment.Pane minSize={32} maxSize={32} className={styles.browserBar}>
        <BrowserBar onReload={handleReload} />
      </Allotment.Pane>
      <Allotment.Pane>
        <iframe
          key={iframeKey}
          className={styles.preview}
          src="https://habit-haven-dark.lovable.app/"
        ></iframe>
      </Allotment.Pane>
    </Allotment>
  );
};
