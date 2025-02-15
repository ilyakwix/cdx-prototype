import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EnterFullScreenIcon,
  MobileIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import { IconButton, Kbd, TextField, Theme, Tooltip } from "@radix-ui/themes";
import classNames from "classnames";
import styles from "./browser-bar.module.css";

export interface BrowserBarProps {
  className?: string;
  onReload?: () => void;
}

export const BrowserBar = ({ className, onReload }: BrowserBarProps) => {
  return (
    <Theme accentColor="gray" panelBackground="solid" asChild>
      <div className={classNames(styles.root, className)}>
        <div className={styles.browserControls}>
          <Tooltip content="Go back">
            <IconButton size="1" variant="ghost" disabled>
              <ArrowLeftIcon className={styles.backButton} />
            </IconButton>
          </Tooltip>

          <Tooltip content="Go forward">
            <IconButton size="1" variant="ghost" disabled>
              <ArrowRightIcon className={styles.forwardButton} />
            </IconButton>
          </Tooltip>

          <Tooltip
            content={
              <span>
                Reload page
                <Kbd size="1" className={styles.shortcut}>
                  ⌘ R
                </Kbd>
              </span>
            }
          >
            <IconButton
              size="1"
              variant="ghost"
              className={styles.reloadButton}
              onClick={onReload}
            >
              <ReloadIcon />
            </IconButton>
          </Tooltip>
        </div>

        <TextField.Root
          className={styles.urlField}
          placeholder="my-project-1gh2nd.codux.ai"
          size="1"
          variant="soft"
        />

        <div className={styles.actions}>
          <Tooltip content="Responsive mode">
            <IconButton size="1" variant="ghost">
              <MobileIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            content={
              <span>
                Full screen
                <Kbd size="1" className={styles.shortcut}>
                  ⌘ .
                </Kbd>
              </span>
            }
          >
            <IconButton size="1" variant="ghost">
              <EnterFullScreenIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </Theme>
  );
};
