import { useEffect, useState } from "react";
import { Allotment, LayoutPriority } from "allotment";
import { Header } from "./components/header/header";
import { Elements } from "./components/elements/elements";
import styles from "./app.module.css";
import "allotment/dist/style.css";

export type EditorMode = "preview" | "edit" | "code";

function App() {
  // const [showLeftPanel, setShowLeftPanel] = useState(true);
  const [mode, setMode] = useState<EditorMode>("preview");
  const [showDrawer, setShowDrawer] = useState(false);

  const handleSelectMode = (selectedMode: EditorMode) => {
    setMode(selectedMode);
  };

  useEffect(() => {
    if (mode === "edit") {
      setShowDrawer(true);
    } else {
      setShowDrawer(false);
    }
  }, [mode]);

  return (
    <div className={styles.root}>
      <Header mode={mode} onSelectMode={handleSelectMode} />
      <main className={styles.main}>
        <Allotment>
          <Allotment.Pane
            className={styles.chatPane}
            minSize={300}
            maxSize={700}
            preferredSize={500}
            snap
          >
            <aside className={styles.chat}>Chat</aside>
          </Allotment.Pane>
          <Allotment.Pane
            className={styles.stage}
            priority={LayoutPriority.High}
          >
            <Allotment className={styles.previewPane} vertical>
              <Allotment.Pane className={styles.preview} minSize={150}>
                Preview
              </Allotment.Pane>
              {showDrawer && (
                <Allotment.Pane
                  className={styles.drawer}
                  minSize={200}
                  maxSize={700}
                  preferredSize={400}
                  snap
                >
                  <Allotment>
                    <Allotment.Pane minSize={400}>
                      <Elements />
                    </Allotment.Pane>
                    <Allotment.Pane minSize={250} preferredSize={360}>
                      Styles
                    </Allotment.Pane>
                  </Allotment>
                </Allotment.Pane>
              )}
            </Allotment>
          </Allotment.Pane>
        </Allotment>
      </main>
    </div>
  );
}

export default App;
