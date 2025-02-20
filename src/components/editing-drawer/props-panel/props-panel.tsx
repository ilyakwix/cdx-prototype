import { Button, Code, ScrollArea } from "@radix-ui/themes";
import { EditableLabel } from "./editable-label/editable-label";
import { propsPanelData } from "./props-panel-data";
import classNames from "classnames";
import styles from "./props-panel.module.css";
import { PlusIcon } from "@radix-ui/react-icons";
import { PropItem } from "./prop-item/prop-item";
import { AddPropMenu } from "./add-prop-menu/add-prop-menu";

export interface PropsPanelProps {
  className?: string;
}

export const PropsPanel = ({ className }: PropsPanelProps) => {
  return (
    <ScrollArea>
      <div className={classNames(styles.root, className)}>
        {propsPanelData.map((item) => (
          // <PropItem />
          <div className={styles.prop} key={item.prop}>
            <Code size="1" variant="ghost" className={styles.propName}>
              {item.prop}
            </Code>
            <EditableLabel
              className={styles.propValue}
              defaultValue={item.value}
            />
          </div>
        ))}
        <div className={styles.footer}>
          <AddPropMenu>
            <Button size="1" variant="soft">
              <PlusIcon />
              Add a property
            </Button>
          </AddPropMenu>
        </div>
      </div>
    </ScrollArea>
  );
};
