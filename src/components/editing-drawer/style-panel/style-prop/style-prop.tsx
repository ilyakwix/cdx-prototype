import { useState } from "react";
import classNames from "classnames";
import styles from "./style-prop.module.css";
import {
  Button,
  Flex,
  IconButton,
  Inset,
  Text,
  TextField,
  Theme,
} from "@radix-ui/themes";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { InlineTextField } from "../../../shared/inline-text-field/inline-text-field";

export interface StylePropProps {
  className?: string;
  definition?: string;
  value?: string;
}

export const StyleProp = ({ className, definition, value }: StylePropProps) => {
  const [isDefinitionEditing, setIsDefinitionEditing] = useState(false);
  const [isValueEditing, setIsValueEditing] = useState(false);
  return (
    <div className={classNames(styles.root, className)}>
      <Theme className={styles.theme}>
        <Flex direction="column" gap="1" pl="4" justify="center">
          <Flex align="center" className={styles.declaration}>
            {isDefinitionEditing ? (
              <InlineTextField
                className={styles.definitionInput}
                onBlur={() => setIsDefinitionEditing(false)}
                autoFocus
                defaultValue={definition}
              />
            ) : (
              // <TextField.Root
              //   className={styles.definitionInput}
              //   size="1"
              //   variant="classic"
              //   onBlur={() => setIsDefinitionEditing(false)}
              //   autoFocus
              //   defaultValue={definition}
              // />
              <Button
                className={styles.definitionButton}
                variant="ghost"
                color="red"
                ml="1"
                onClick={() => setIsDefinitionEditing(true)}
              >
                <span>{definition}</span>
              </Button>
            )}
            <Text size="2">:</Text>
            {isValueEditing ? (
              <TextField.Root
                size="1"
                placeholder="type @ to show variables"
                variant="classic"
                className={styles.valueInput}
                onBlur={() => setIsValueEditing(false)}
                autoFocus
                defaultValue={value}
              />
            ) : (
              <div>
                <Button
                  size="2"
                  variant="ghost"
                  ml="1"
                  onClick={() => setIsValueEditing(true)}
                >
                  {value}
                </Button>
                <IconButton size="1" variant="soft" color="orange">
                  <ChevronDownIcon />
                </IconButton>
              </div>
            )}
          </Flex>
        </Flex>
      </Theme>
    </div>
  );
};
