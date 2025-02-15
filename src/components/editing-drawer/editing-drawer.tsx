import { Allotment } from "allotment";
import { Tabs } from "@radix-ui/themes";
import { SourceTree } from "./source-tree/source-tree";
import { ElementsTree } from "./elements-tree/elements-tree";
import classNames from "classnames";
import styles from "./editing-drawer.module.css";

// const drawerTreeTabs: TabProps<DrawerTreeTabs>[] = [
//   { id: "elements", label: "Elements" },
//   { id: "components", label: "Components" },
// ];
// const drawerTreeTabsContent: TabContentProps<DrawerTreeTabs>[] = [
//   { id: "elements", content: <Elements /> },
//   {
//     id: "components",
//     content: <Components />,
//   },
// ];
// const drawerSettingsTabs: TabProps<DrawerSettingsTabs>[] = [
//   { id: "styles", label: "Styles" },
//   { id: "computed", label: "Computed" },
//   { id: "props", label: "Props" },
// ];
// const drawerSettingsTabsContent: TabContentProps<DrawerSettingsTabs>[] = [
//   { id: "styles", content: <div></div> },
//   { id: "computed", content: <div></div> },
//   { id: "props", content: <div></div> },
// ];

export interface EditingDrawerProps {
  className?: string;
}

export const EditingDrawer = ({ className }: EditingDrawerProps) => {
  return (
    <Allotment
      vertical
      minSize={100}
      className={classNames(styles.root, className)}
    >
      <Allotment.Pane
        className={styles.drawer}
        minSize={200}
        maxSize={700}
        preferredSize={400}
        snap
      >
        <Allotment>
          <Allotment.Pane minSize={400}>
            <Tabs.Root defaultValue="source">
              <Tabs.List>
                <Tabs.Trigger value="source">Source</Tabs.Trigger>
                <Tabs.Trigger value="elements">Elements</Tabs.Trigger>
              </Tabs.List>

              <div>
                <Tabs.Content value="source">
                  <SourceTree />
                </Tabs.Content>

                <Tabs.Content value="elements">
                  <ElementsTree />
                </Tabs.Content>
              </div>
            </Tabs.Root>
            {/* <Tabs
              className={styles.drawerTabs}
              tabs={drawerTreeTabs}
              content={drawerTreeTabsContent}
              defaultValue="components"
            /> */}
          </Allotment.Pane>
          <Allotment.Pane minSize={250} preferredSize={360}>
            {/* <Tabs
              className={styles.drawerTabs}
              tabs={drawerSettingsTabs}
              content={drawerSettingsTabsContent}
              defaultValue="styles"
            /> */}
            Styles
          </Allotment.Pane>
        </Allotment>
      </Allotment.Pane>
    </Allotment>
  );
};
