import { useState } from "react";
import {
  Button,
  ButtonProps,
  Code,
  DropdownMenu,
  IconButton,
  TextField,
  Tooltip,
} from "@radix-ui/themes";
import classNames from "classnames";
import styles from "./editable-label.module.css";
import {
  CodeIcon,
  DotsHorizontalIcon,
  Link2Icon,
  MagicWandIcon,
  Pencil1Icon,
  QuestionMarkCircledIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { reactNodeSuggestions } from "../props-panel-data";

export interface EditableLabelProps {
  className?: string;
  defaultValue: string;
  textFieldProps?: TextField.RootProps;
  buttonProps?: ButtonProps;
}

export const EditableLabel = ({
  className,
  defaultValue,
  textFieldProps,
  buttonProps,
}: EditableLabelProps) => {
  const [value, setValue] = useState(defaultValue);
  const [lastSavedValue, setLastSavedValue] = useState(defaultValue);
  const [editMode, setEditMode] = useState(false);

  const handleStartEditingProp = () => {
    setEditMode(true);
  };

  const handleFinishEditingProp = () => {
    setLastSavedValue(value);
    setEditMode(false);
    //TODO: Set focus on the button after editing
  };

  const handleCancelEditingProp = () => {
    setValue(lastSavedValue);
    setEditMode(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleFinishEditingProp();
    }
    if (event.key === "Escape") {
      handleCancelEditingProp();
      //TODO: Set focus on the button after editing
    }
  };

  return (
    <div className={classNames(styles.root, className)}>
      {editMode ? (
        <TextField.Root
          {...textFieldProps}
          className={classNames(styles.input, textFieldProps?.className)}
          size="1"
          onBlur={handleFinishEditingProp}
          onKeyDown={handleKeyDown}
          autoFocus
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      ) : (
        <Button
          {...buttonProps}
          className={classNames(styles.button, buttonProps?.className)}
          size="1"
          variant="soft"
          onClick={handleStartEditingProp}
        >
          {value}
        </Button>
      )}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <IconButton
            size="1"
            variant="soft"
            className={styles.contextMenuTrigger}
          >
            <DotsHorizontalIcon />
          </IconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            <Pencil1Icon /> Edit
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <MagicWandIcon />
            Ask AI
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>
              <Link2Icon />
              Bind value
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              {reactNodeSuggestions.map((suggestion, index) => (
                <DropdownMenu.Item
                  key={index}
                  className={styles.suggestionItem}
                >
                  <div className={styles.suggestionItemDetails}>
                    <Code variant="ghost" color="plum">
                      {suggestion.value}
                    </Code>
                    <Code variant="ghost" color="gray">
                      {suggestion.type}
                    </Code>
                  </div>
                  {suggestion.description && (
                    <Tooltip content={suggestion.description}>
                      <QuestionMarkCircledIcon />
                    </Tooltip>
                  )}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <CodeIcon />
            Show in code
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item color="red">
            <TrashIcon />
            Remove
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};
