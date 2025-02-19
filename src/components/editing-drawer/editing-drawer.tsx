import { Allotment } from "allotment";
import { Tabs } from "@radix-ui/themes";
import { SourceTree } from "./source-tree/source-tree";
import { ElementsTree } from "./elements-tree/elements-tree";
import { StylePanel } from "./style-panel/style-panel";
import { ComputedStylesPanel } from "./computed-styles-panel/computed-styles-panel";
import { PropsPanel } from "./props-panel/props-panel";
import { DrawerSettingsTabs, DrawerTreeTabs } from "../../App";
import classNames from "classnames";
import styles from "./editing-drawer.module.css";

interface TabProps<T> {
  id: T;
  label: string;
}

const treeTabs: TabProps<DrawerTreeTabs>[] = [
  { id: "source", label: "Source" },
  { id: "elements", label: "Elements" },
];

const settingsTabs: TabProps<DrawerSettingsTabs>[] = [
  { id: "styles", label: "Styles" },
  { id: "computed", label: "Computed" },
  { id: "props", label: "Props" },
];

export interface EditingDrawerProps {
  className?: string;
}

export const EditingDrawer = ({ className }: EditingDrawerProps) => {
  return (
    <Allotment
      vertical
      // minSize={100}

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
            <Tabs.Root defaultValue="source" className={styles.tabs}>
              <Allotment vertical className={styles.treePane} separator={false}>
                <Allotment.Pane minSize={32} maxSize={32}>
                  <Tabs.List size="1">
                    {treeTabs.map((tab) => (
                      <Tabs.Trigger key={tab.id} value={tab.id}>
                        {tab.label}
                      </Tabs.Trigger>
                    ))}
                  </Tabs.List>
                </Allotment.Pane>
                <Allotment.Pane>
                  <Tabs.Content value="source" className={styles.tabsContent}>
                    <SourceTree />
                  </Tabs.Content>

                  <Tabs.Content value="elements" className={styles.tabsContent}>
                    <ElementsTree />
                  </Tabs.Content>
                </Allotment.Pane>
              </Allotment>
            </Tabs.Root>
          </Allotment.Pane>
          <Allotment.Pane minSize={250} preferredSize={360}>
            <Tabs.Root defaultValue="styles" className={styles.tabs}>
              <Allotment vertical className={styles.treePane} separator={false}>
                <Allotment.Pane minSize={32} maxSize={32}>
                  <Tabs.List size="1">
                    {settingsTabs.map((tab) => (
                      <Tabs.Trigger key={tab.id} value={tab.id}>
                        {tab.label}
                      </Tabs.Trigger>
                    ))}
                  </Tabs.List>
                </Allotment.Pane>
                <Allotment.Pane>
                  <Tabs.Content value="styles" className={styles.tabsContent}>
                    <StylePanel />
                  </Tabs.Content>
                  <Tabs.Content value="computed" className={styles.tabsContent}>
                    <ComputedStylesPanel />
                  </Tabs.Content>
                  <Tabs.Content value="props" className={styles.tabsContent}>
                    <PropsPanel />
                  </Tabs.Content>
                </Allotment.Pane>
              </Allotment>
            </Tabs.Root>
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
