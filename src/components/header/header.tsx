import { type EditorMode } from "../../App";
import { type ReactNode } from "react";
import { GlobeIcon } from "@radix-ui/react-icons";
import { AppMenu } from "./app-menu/app-menu";
import {
  Button,
  Heading,
  SegmentedControl,
  VisuallyHidden,
} from "@radix-ui/themes";
import styles from "./header.module.css";

export interface HeaderProps {
  mode: EditorMode;
  onSelectMode: (value: EditorMode) => void;
}

export const Header = ({ mode, onSelectMode }: HeaderProps) => {
  const items: { id: EditorMode; label: ReactNode }[] = [
    {
      id: "preview",
      label: "Preview",
    },
    {
      id: "edit",
      label: "Edit",
    },
    {
      id: "code",
      label: "Code",
    },
  ];

  return (
    <header className={styles.root}>
      <div className={styles.leftSide}>
        <AppMenu />
        <Heading className={styles.heading} size="2" truncate>
          <VisuallyHidden>Project name: </VisuallyHidden>
          my-project
        </Heading>
      </div>
      <SegmentedControl.Root
        variant="classic"
        value={mode}
        onValueChange={(value: EditorMode) => onSelectMode(value)}
      >
        {items.map((item) => (
          <SegmentedControl.Item key={item.id} value={item.id}>
            {item.label}
          </SegmentedControl.Item>
        ))}
      </SegmentedControl.Root>
      <Button className={styles.publishButton}>
        <GlobeIcon />
        Publish
      </Button>
    </header>
  );
};
