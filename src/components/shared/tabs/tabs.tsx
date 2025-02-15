import { ReactNode } from "react";
import { Tabs as RadixTabs } from "radix-ui";
import { ScrollArea } from "../scroll-area/scroll-area";
import styles from "./tabs.module.css";
import classNames from "classnames";

export interface TabProps<T> {
  id: T;
  label: ReactNode;
}

export interface TabContentProps<T> {
  id: T;
  content: ReactNode;
}

export interface TabsProps<T> {
  className?: string;
  tabs: TabProps<T>[];
  content: TabContentProps<T>[];
  defaultValue: T;
  onValueChange?: (value: T) => void;
}

export const Tabs = <T extends string>({
  className,
  tabs,
  content,
  defaultValue,
}: TabsProps<T>) => {
  return (
    <RadixTabs.Root
      className={classNames(styles.root, className)}
      defaultValue={defaultValue}
    >
      <RadixTabs.List className={styles.list}>
        {tabs.map((tab) => (
          <RadixTabs.Trigger
            className={styles.trigger}
            value={tab.id}
            key={tab.id}
          >
            {tab.label}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
      {content.map((tabContent) => (
        <RadixTabs.Content
          className={styles.content}
          value={tabContent.id}
          key={`${tabContent.id}-content`}
        >
          <ScrollArea>{tabContent.content}</ScrollArea>
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
};
