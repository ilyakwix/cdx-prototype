import { ReactNode } from "react";
import { ToggleGroup as RadixToggleGroup } from "radix-ui";
import styles from "./toggle-group.module.css";

export interface ToggleGroupItemProps<T> {
  id: T;
  label: ReactNode;
  disabled?: boolean;
}

export interface ToggleGroupProps<T> {
  items: ToggleGroupItemProps<T>[];
  value: T;
  onValueChange?: (value: T) => void;
}

export const ToggleGroup = <T extends string>({
  items,
  value,
  onValueChange,
}: ToggleGroupProps<T>) => {
  return (
    <RadixToggleGroup.Root
      className={styles.root}
      type="single"
      value={value}
      loop
      onValueChange={onValueChange}
    >
      {items.map((item) => (
        <RadixToggleGroup.Item
          key={item.id}
          className={styles.item}
          value={item.id}
          disabled={item.disabled}
        >
          {item.label}
        </RadixToggleGroup.Item>
      ))}
    </RadixToggleGroup.Root>
  );
};
