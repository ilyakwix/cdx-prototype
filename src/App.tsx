import "allotment/dist/style.css";
import "@radix-ui/themes/styles.css";
import { useState } from "react";
import { Allotment } from "allotment";
import { Header } from "./components/header/header";
import { Chat } from "./components/chat/chat";
import styles from "./app.module.css";
import { Stage } from "./components/stage/stage";
import { EditingDrawer } from "./components/editing-drawer/editing-drawer";
import { SelectionDetails } from "./components/selection-details/selection-details";

const scopes = ["Layout", "App", "HomePage"];
const elements = ["div.root", "HabitList", "HabitItem"];
const selectors = [".root"];
const states = [
  "default",
  "hover",
  "active",
  "focus",
  "focus-visible",
  "focus-within",
];

export type EditorMode = "preview" | "edit" | "code";
export type DrawerTreeTabs = "elements" | "components";
export type DrawerSettingsTabs = "styles" | "computed" | "props";

function App() {
  const [mode, setMode] = useState<EditorMode>("preview");
  const [showDrawer, setShowDrawer] = useState(true);
  const showStage = mode === "preview" || mode === "edit";

  const handleSelectMode = (selectedMode: EditorMode) => {
    setMode(selectedMode);
  };

  const handleToggleDrawer = () => {
    setShowDrawer((prev) => !prev);
  };

  return (
    <div className={styles.root}>
      <Header mode={mode} onSelectMode={handleSelectMode} />
      <Allotment className={styles.main}>
        <Allotment.Pane
          className={styles.chatPane}
          minSize={300}
          maxSize={700}
          preferredSize={500}
          snap
        >
          <Chat />
        </Allotment.Pane>
        <Allotment.Pane className={styles.stage}>
          <Allotment
            className={styles.mainAreaPane}
            vertical
            onVisibleChange={(index, visible) =>
              index === 2 && setShowDrawer(visible)
            }
          >
            <Allotment.Pane
              className={styles.preview}
              minSize={150}
              visible={showStage}
            >
              <Stage />
            </Allotment.Pane>
            {mode === "edit" && (
              <Allotment.Pane
                minSize={32}
                maxSize={32}
                preferredSize={32}
                visible={mode === "edit"}
              >
                <SelectionDetails
                  scopes={scopes}
                  elements={elements}
                  selectors={selectors}
                  states={states}
                  onToggleDrawer={handleToggleDrawer}
                />
              </Allotment.Pane>
            )}
            {mode === "edit" && showDrawer && (
              <Allotment.Pane
                minSize={200}
                maxSize={700}
                preferredSize={400}
                snap
                visible={mode === "edit" && showDrawer}
              >
                <EditingDrawer />
              </Allotment.Pane>
            )}
          </Allotment>
        </Allotment.Pane>
      </Allotment>
    </div>
  );
}

export default App;
