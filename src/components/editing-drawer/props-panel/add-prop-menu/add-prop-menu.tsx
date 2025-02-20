import { ReactNode } from "react";
import { DropdownMenu } from "@radix-ui/themes";
import classNames from "classnames";
import styles from "./add-prop-menu.module.css";

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
          <DropdownMenu.Group>
            <DropdownMenu.Label>AddPropMenuProps</DropdownMenu.Label>
            <DropdownMenu.Item>className: string</DropdownMenu.Item>
            <DropdownMenu.Item>children: ReactNode</DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Group>
            <DropdownMenu.Label>BaseProps</DropdownMenu.Label>
            <DropdownMenu.Item>color: string</DropdownMenu.Item>
            <DropdownMenu.Item>size: string</DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};
