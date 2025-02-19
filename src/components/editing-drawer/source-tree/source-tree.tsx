import { NodeApi, NodeRendererProps, Tree, TreeApi } from "react-arborist";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  FileIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Code, IconButton, TextField } from "@radix-ui/themes";
import classNames from "classnames";
import styles from "./source-tree.module.css";
import { SouceTreeData, souceTreeData } from "./source-tree-data";

export interface SourceTreeProps {
  className?: string;
}

const sortedData = sortData(souceTreeData);
const INDENT_STEP = 16;

export const SourceTree = ({ className }: SourceTreeProps) => {
  const [tree, setTree] = useState<TreeApi<Data> | null | undefined>(null);
  const [active, setActive] = useState<Data | null>(null);
  const [focused, setFocused] = useState<Data | null>(null);
  const [selectedCount, setSelectedCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [count, setCount] = useState(0);
  const [followsFocus, setFollowsFocus] = useState(true);
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
        padding={4}
        width="100%"
        rowHeight={20}
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

function Node({ node, style, dragHandle }: NodeRendererProps<SouceTreeData>) {
  // const Icon = FileIcon;
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
        className={styles.arrowButton}
        variant="ghost"
        color="gray"
        onClick={() => node.isInternal && node.toggle()}
        disabled={!node.isInternal}
      >
        <FolderArrow node={node} />
      </IconButton>
      {/* <Icon className={styles.icon} /> */}
      <span className={styles.text}>
        {node.isEditing ? (
          <EditingInput node={node} />
        ) : (
          <Code size="2" variant="ghost">
            {node.data.name}
          </Code>
        )}
      </span>
    </div>
  );
}

function EditingInput({ node }: { node: NodeApi<SouceTreeData> }) {
  return (
    <TextField.Root
      className={styles.nameInput}
      variant="classic"
      size="1"
      autoFocus
      name="name"
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

function sortData(data: SouceTreeData[]) {
  function sortIt(data: SouceTreeData[]) {
    // data.sort((a, b) => (a.name < b.name ? -1 : 1));
    // data.forEach((d) => {
    //   if (d.children) sortIt(d.children);
    // });
    return data;
  }
  return sortIt(data);
}

function FolderArrow({ node }: { node: NodeApi<SouceTreeData> }) {
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
