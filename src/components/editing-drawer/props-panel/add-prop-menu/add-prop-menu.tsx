import { ReactNode } from "react";
import { DropdownMenu, IconButton, Tooltip } from "@radix-ui/themes";
import classNames from "classnames";
import styles from "./add-prop-menu.module.css";
import { Pencil2Icon } from "@radix-ui/react-icons";

export interface AddPropMenuProps {
  className?: string;
  children: ReactNode;
}

export const AddPropMenu = ({ className, children }: AddPropMenuProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>{children}</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label className={styles.interfaceLabel}>
            HabitListProps
            <Tooltip content="Edit interface">
              <IconButton size="1" variant="ghost" color="gray">
                <Pencil2Icon />
              </IconButton>
            </Tooltip>
          </DropdownMenu.Label>
          <DropdownMenu.Group>
            <DropdownMenu.Item>className: string</DropdownMenu.Item>
            <DropdownMenu.Item>children: ReactNode</DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Label className={styles.interfaceLabel}>
            {"React.HTMLAttributes<HTMLDivElement>"}
            <Tooltip content="Edit interface">
              <IconButton size="1" variant="ghost" color="gray" disabled>
                <Pencil2Icon />
              </IconButton>
            </Tooltip>
          </DropdownMenu.Label>
          <DropdownMenu.Group>
            <DropdownMenu.Item>color: string</DropdownMenu.Item>
            <DropdownMenu.Item>size: string</DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};
