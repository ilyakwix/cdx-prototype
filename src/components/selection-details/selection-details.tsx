import { Toolbar } from "radix-ui";
import {
  IconButton,
  Kbd,
  Select,
  Text,
  Theme,
  Tooltip,
} from "@radix-ui/themes";
import { ViewHorizontalIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import styles from "./selection-details.module.css";

export interface SelectionDetailsProps {
  className?: string;
  scopes: string[];
  elements: string[];
  selectors: string[];
  states: string[];
  onToggleDrawer?: () => void;
}

export const SelectionDetails = ({
  className,
  scopes,
  elements,
  selectors,
  states,
  onToggleDrawer,
}: SelectionDetailsProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.selectionDetails}>
        <Toolbar.Root className={styles.selectionDetails}>
          <Text as="label" size="2" className={styles.label}>
            Scope
            <Select.Root size="1" defaultValue={scopes[scopes.length - 1]}>
              <Toolbar.Button asChild>
                <Select.Trigger variant="surface" className={styles.select} />
              </Toolbar.Button>
              <Select.Content>
                {scopes.map((scope, index) => (
                  <Select.Item
                    key={`scope-${index}`}
                    value={scope}
                    className={styles.selectItem}
                  >
                    {scope}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Text>

          <Text as="label" size="2" className={styles.label}>
            Element
            <Select.Root size="1" defaultValue={elements[elements.length - 1]}>
              <Toolbar.Button asChild>
                <Select.Trigger variant="surface" className={styles.select} />
              </Toolbar.Button>
              <Select.Content>
                {elements.map((element, index) => (
                  <Select.Item
                    key={`element-${index}`}
                    value={element}
                    className={styles.selectItem}
                  >
                    {element}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Text>

          <Text as="label" size="2" className={styles.label}>
            Selector
            <Select.Root
              size="1"
              defaultValue={selectors[selectors.length - 1]}
            >
              <Toolbar.Button asChild>
                <Select.Trigger variant="surface" className={styles.select} />
              </Toolbar.Button>
              <Select.Content>
                {selectors.map((selector, index) => (
                  <Select.Item
                    key={`selector-${index}`}
                    value={selector}
                    className={styles.selectItem}
                  >
                    {selector}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Text>

          <Text as="label" size="2" className={styles.label}>
            State
            <Select.Root size="1" defaultValue={states[0]}>
              <Toolbar.Button asChild>
                <Select.Trigger variant="surface" className={styles.select} />
              </Toolbar.Button>
              <Select.Content>
                {states.map((state, index) => (
                  <Select.Item
                    key={`state-${index}`}
                    value={state}
                    className={styles.selectItem}
                  >
                    {state}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Text>
        </Toolbar.Root>
      </div>

      <Tooltip
        content={
          <Text>
            Toggle Drawer
            <Kbd size="1" className={styles.shortcut}>
              ⌘ ⌥ I
            </Kbd>
          </Text>
        }
      >
        <Theme accentColor="gray" asChild>
          <IconButton onClick={onToggleDrawer} size="1" variant="ghost">
            <ViewHorizontalIcon />
          </IconButton>
        </Theme>
      </Tooltip>
    </div>
  );
};
