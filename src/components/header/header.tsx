import { type EditorMode } from "../../App";
import { GlobeIcon } from "@radix-ui/react-icons";
import { AppMenu } from "../app-menu/app-menu";
import {
  ToggleGroup,
  ToggleGroupItemProps,
} from "../shared/toggle-group/toggle-group";
import styles from "./header.module.css";

export interface HeaderProps {
  mode: EditorMode;
  onSelectMode: (value: EditorMode) => void;
}

export const Header = ({ mode, onSelectMode }: HeaderProps) => {
  const items: ToggleGroupItemProps<EditorMode>[] = [
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
        <AppMenu /> my-project
      </div>
      <ToggleGroup
        items={items}
        onValueChange={onSelectMode}
        value={mode}
      ></ToggleGroup>
      <button className={styles.publishButton}>
        <GlobeIcon />
        Publish
      </button>
    </header>
  );
};
