import {
  Badge,
  Flex,
  IconButton,
  ScrollArea,
  Text,
  TextField,
  Theme,
} from "@radix-ui/themes";
import classNames from "classnames";
import styles from "./style-panel.module.css";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { StyleProp } from "./style-prop/style-prop";

export interface StylePanelProps {
  className?: string;
}

export const StylePanel = ({ className }: StylePanelProps) => {
  return (
    <ScrollArea>
      <div className={classNames(styles.root, className)}>
        <div className={styles.rule}>
          <Theme className={styles.theme}>
            <Flex p="3" direction="column" gap="2">
              <Flex gap="1" wrap="wrap">
                <Badge size="1" variant="solid" color="purple">
                  classname
                  <IconButton variant="ghost">
                    <ChevronDownIcon />
                  </IconButton>
                </Badge>
                <Badge size="1" variant="solid">
                  root
                  <IconButton variant="ghost">
                    <ChevronDownIcon />
                  </IconButton>
                </Badge>
                <Badge size="1" variant="solid">
                  anotherClass
                  <IconButton variant="ghost">
                    <ChevronDownIcon />
                  </IconButton>
                </Badge>
                <Badge size="1" variant="solid" color="purple">
                  error && errorState
                  <IconButton variant="ghost">
                    <ChevronDownIcon />
                  </IconButton>
                </Badge>
              </Flex>
              <TextField.Root size="1" placeholder="Add classes..." />
            </Flex>
            <Flex justify="between" className={styles.selector}>
              <Text size="2" color="gray">
                element.style
              </Text>
            </Flex>
            <Flex direction="column" gap="1" pl="4" justify="center">
              {[
                { key: "margin", value: "12px" },
                { key: "padding-left", value: "4px" },
                { key: "display", value: "flex" },
              ].map(({ key, value }, index) => (
                <StyleProp definition={key} value={value} key={index} />
              ))}
            </Flex>
          </Theme>
        </div>
      </div>
    </ScrollArea>
  );
};
