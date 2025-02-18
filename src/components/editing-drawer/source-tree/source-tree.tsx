import { NodeApi, NodeRendererProps, Tree, TreeApi } from "react-arborist";
import classNames from "classnames";
import styles from "./source-tree.module.css";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  FileIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { IconButton } from "@radix-ui/themes";

type Data = { id: string; name: string; children?: Data[] };

const data = [
  {
    id: "root",
    name: "div",
    children: [
      {
        id: "header",
        name: "header",
        children: [
          {
            id: "mainHeading",
            name: "h1",
            children: [{ id: "mainHeadingText", name: "Daily Habits" }],
          },
          {
            id: "subtitle",
            name: "span",
            children: [
              { id: "subtitleText", name: "Sunday, February 16, 2025" },
            ],
          },
        ],
      },
      {
        id: "listOfHabits",
        name: "HabitsList",
        children: [
          { id: "habit1", name: "HabitItem" },
          { id: "habit2", name: "HabitItem" },
          { id: "habit3", name: "HabitItem" },
        ],
      },
    ],
  },
];

export interface SourceTreeProps {
  className?: string;
}

const sortedData = sortData(data);
const INDENT_STEP = 15;

export const SourceTree = ({ className }: SourceTreeProps) => {
  const [tree, setTree] = useState<TreeApi<Data> | null | undefined>(null);
  const [active, setActive] = useState<Data | null>(null);
  const [focused, setFocused] = useState<Data | null>(null);
  const [selectedCount, setSelectedCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [count, setCount] = useState(0);
  const [followsFocus, setFollowsFocus] = useState(false);
  const [disableMulti, setDisableMulti] = useState(false);

  useEffect(() => {
    setCount(tree?.visibleNodes.length ?? 0);
  }, [tree, searchTerm]);

  return (
    <div className={classNames(styles.root, className)}>
      {/* <Tree
        initialData={elementsData}
        width="100%"
        padding={8}
        indent={24}
        className={styles.tree}
        rowClassName={styles.row}
        renderCursor={Selection}
      >
        {Node}
      </Tree> */}

      <Tree
        initialData={sortedData}
        selectionFollowsFocus={followsFocus}
        disableMultiSelection={disableMulti}
        ref={(t) => setTree(t)}
        openByDefault={true}
        searchTerm={searchTerm}
        selection={active?.id}
        className={styles.tree}
        rowClassName={styles.row}
        padding={16}
        width="100%"
        rowHeight={24}
        indent={INDENT_STEP}
        overscanCount={8}
        onSelect={(selected) => setSelectedCount(selected.length)}
        onActivate={(node) => setActive(node.data)}
        onFocus={(node) => setFocused(node.data)}
        onToggle={() => {
          setTimeout(() => {
            setCount(tree?.visibleNodes.length ?? 0);
          });
        }}
      >
        {Node}
      </Tree>
    </div>
  );
};

function Node({ node, style, dragHandle }: NodeRendererProps<Data>) {
  const Icon = FileIcon;
  const indentSize = Number.parseFloat(`${style.paddingLeft || 0}`);

  return (
    <div
      ref={dragHandle}
      style={style}
      className={classNames(styles.node, node.state)}
    >
      <div className={styles.indentLines}>
        {new Array(indentSize / INDENT_STEP).fill(0).map((_, index) => {
          return <div key={index}></div>;
        })}
      </div>
      <IconButton
        variant="ghost"
        color="gray"
        onClick={() => node.isInternal && node.toggle()}
      >
        <FolderArrow node={node} />
      </IconButton>
      <Icon className={styles.icon} />
      <span className={styles.text}>
        {node.isEditing ? <Input node={node} /> : node.data.name}
      </span>
    </div>
  );
}

function Input({ node }: { node: NodeApi<Data> }) {
  return (
    <input
      autoFocus
      name="name"
      type="text"
      defaultValue={node.data.name}
      onFocus={(e) => e.currentTarget.select()}
      onBlur={() => node.reset()}
      onKeyDown={(e) => {
        if (e.key === "Escape") node.reset();
        if (e.key === "Enter") node.submit(e.currentTarget.value);
      }}
    />
  );
}

function sortData(data: Data[]) {
  function sortIt(data: Data[]) {
    // data.sort((a, b) => (a.name < b.name ? -1 : 1));
    // data.forEach((d) => {
    //   if (d.children) sortIt(d.children);
    // });
    return data;
  }
  return sortIt(data);
}

function FolderArrow({ node }: { node: NodeApi<Data> }) {
  return (
    <span className={styles.arrow}>
      {node.isInternal ? (
        node.isOpen ? (
          <ChevronDownIcon />
        ) : (
          <ChevronRightIcon />
        )
      ) : (
        <div className={styles.emptyArrow} />
      )}
    </span>
  );
}
