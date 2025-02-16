import { AutosizeTextArea } from "../shared/autosize-text-area/autosize-text-area";
import { ArrowUpIcon, FigmaLogoIcon, ImageIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import {
  Card,
  Heading,
  IconButton,
  ScrollArea,
  SegmentedControl,
  Skeleton,
  Tooltip,
} from "@radix-ui/themes";
import classNames from "classnames";
import styles from "./chat.module.css";

export type ChatMode = "chat" | "history";

export interface ChatProps {
  className?: string;
}

export const Chat = ({ className }: ChatProps) => {
  const [promptValue, setPromptValue] = useState("");
  const [mode, setMode] = useState("chat");
  const [isLoading, setIsLoading] = useState(false);

  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      setIsLoading(true);
      setTimeout(() => {
        requestAnimationFrame(() => {
          setIsLoading(false); // Hide loading indicator
          scrollAreaRef.current!.scrollTop =
            scrollAreaRef.current!.scrollHeight;
        });
      }, 1500);
    }
  }, []);

  return (
    <aside className={classNames(styles.root, className)}>
      <SegmentedControl.Root
        size="1"
        variant="classic"
        value={mode}
        onValueChange={(value: ChatMode) => setMode(value)}
      >
        <SegmentedControl.Item key="chat" value="chat">
          Chat
        </SegmentedControl.Item>
        <SegmentedControl.Item key="history" value="history">
          History
        </SegmentedControl.Item>
      </SegmentedControl.Root>
      {mode === "chat" && (
        <>
          <ScrollArea ref={scrollAreaRef}>
            {!isLoading && (
              <section className={styles.chat}>
                <Card className={styles.promptBubble}>
                  Create a simple habit tracker app showing a list of habits
                  that the user needs to mark as done each day. Make it dark
                  theme
                </Card>
                <div className={styles.answerBubble}>
                  I'll help create a beautiful, minimalist habit tracker with a
                  dark theme. Let's create something that combines elegance with
                  functionality.
                  <br />
                  <br />
                  <Heading as="h3" size="3">
                    Design Inspiration:
                  </Heading>
                  <ul>
                    <li>Modern dark interface with subtle depth</li>
                    <li>Smooth animations for interactions</li>
                    <li>Clean typography with high contrast</li>
                    <li>Card-based layout for habits</li>
                    <li>Subtle glassmorphism effects</li>
                  </ul>
                  <br />
                  <Heading as="h3" size="3">
                    Features for first version:
                  </Heading>
                  <ol>
                    <li>Dark-themed interface with elegant typography</li>
                    <li>List of predefined habits</li>
                    <li>Simple toggle mechanism to mark habits as complete</li>
                    <li>Daily progress overview</li>
                    <li>Smooth animations for interactions</li>
                  </ol>
                  <br />
                  <Heading as="h3" size="3">
                    Style elements:
                  </Heading>
                  <ul>
                    <li>
                      Color palette: Deep charcoal backgrounds, pure white text,
                      subtle accent colors
                    </li>
                    <li>
                      Typography: Clean sans-serif for maximum readability
                    </li>
                    <li>Animations: Subtle scale and opacity transitions</li>
                    <li>Layout: Centered content with comfortable spacing</li>
                    <li>
                      Cards: Subtle glassmorphism effect with minimal borders
                    </li>
                  </ul>
                  <br />
                  I've created a beautiful, minimal habit tracker with a dark
                  theme. The app features smooth animations, elegant
                  glassmorphism effects, and a clean interface that makes
                  tracking habits a delightful experience.
                  <br />
                  <br />
                  If there's knowledge, context or custom instructions you want
                  to include in every edit in this project, set it below.
                  <br />
                  <br />
                  If your project requires backend functionality for persistent
                  storage of habits and tracking progress, you can use the
                  Supabase menu on the top right to connect your project to
                  Supabase.
                </div>
              </section>
            )}
            {isLoading && (
              <>
                <div className={styles.answerBubble}>
                  <Skeleton>
                    Create a simple habit tracker app showing a list of habits
                    that the user needs to mark as done each day. Make it dark
                    theme
                  </Skeleton>
                </div>
                <div className={styles.answerBubble}>
                  <Skeleton>
                    I'll help create a beautiful, minimalist habit tracker with
                    a dark theme. Let's create something that combines elegance
                    with functionality. I'll help create a beautiful, minimalist
                    habit tracker with a dark theme.
                  </Skeleton>
                </div>
              </>
            )}
          </ScrollArea>
          <div className={styles.footer}>
            <div className={styles.prompt}>
              <AutosizeTextArea
                className={styles.input}
                placeholder="How Codux can help you today?"
                maxHeight={200}
                rows={5}
                value={promptValue}
                onChange={(event) => setPromptValue(event.target.value)}
              />
              <div className={styles.actions}>
                <Tooltip content="Send">
                  <IconButton radius="full" disabled={!promptValue}>
                    <ArrowUpIcon />
                  </IconButton>
                </Tooltip>
                <div className={styles.secondaryActions}>
                  <Tooltip content="Attach images">
                    <IconButton variant="ghost" color="gray" radius="full">
                      <ImageIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip content="Add Figma file">
                    <IconButton variant="ghost" color="gray" radius="full">
                      <FigmaLogoIcon />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            </div>
            <span className={styles.footnote}>
              Codux.ai might get things wrong. Trust but verify.
            </span>
          </div>
        </>
      )}
    </aside>
  );
};
