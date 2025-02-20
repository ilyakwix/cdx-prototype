import { NodeApi, NodeRendererProps, Tree, TreeApi } from "react-arborist";
import {
  CodeIcon,
  DotIcon,
  LoopIcon,
  MagicWandIcon,
  MixerHorizontalIcon,
  OpacityIcon,
  Pencil1Icon,
  Pencil2Icon,
  TrashIcon,
  TriangleDownIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import {
  Code,
  ContextMenu,
  IconButton,
  ScrollArea,
  TextField,
  Tooltip,
} from "@radix-ui/themes";
import {
  SourceTreeData,
  sourceTreeData,
  SourceTreeNodeType,
} from "./source-tree-data";
import classNames from "classnames";
import styles from "./source-tree.module.css";
import { ThemeColors } from "../types";

export interface SourceTreeProps {
  className?: string;
}

const sortedData = sortData(sourceTreeData);
const INDENT_STEP = 16;

const nodeTypeColors: Record<SourceTreeNodeType, ThemeColors | undefined> = {
  element: undefined,
  component: "indigo",
  expression: "plum",
  text: undefined,
};

export const SourceTree = ({ className }: SourceTreeProps) => {
  const [tree, setTree] = useState<TreeApi<SourceTreeData> | null | undefined>(
    null
  );
  const [active, setActive] = useState<SourceTreeData | null>(null);
  const [focused, setFocused] = useState<SourceTreeData | null>(null);
  const [selectedCount, setSelectedCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [count, setCount] = useState(0);
  const [followsFocus, setFollowsFocus] = useState(true);
  const [disableMulti, setDisableMulti] = useState(false);

  useEffect(() => {
    setCount(tree?.visibleNodes.length ?? 0);
  }, [tree, searchTerm]);

  return (
    <ScrollArea>
      <div className={classNames(styles.root, className)}>
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
    </ScrollArea>
  );
};

function Node({ node, style, dragHandle }: NodeRendererProps<SourceTreeData>) {
  // const Icon = FileIcon;
  const indentSize = Number.parseFloat(`${style.paddingLeft || 0}`);

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        {/* <RightClickZone style={{ height: 150 }} /> */}
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
            {node.data.prop && (
              <Tooltip content={node.data.propType} side="left">
                <Code size="2" variant="ghost" color="gray">
                  {node.data.prop}
                  {": "}
                </Code>
              </Tooltip>
            )}
            {node.isEditing ? (
              <EditingInput node={node} />
            ) : (
              <Code
                size="2"
                variant="ghost"
                color={nodeTypeColors[node.data.type]}
              >
                {node.data.value}
              </Code>
            )}
            {node.data.classNames && (
              <span className={styles.classNames}>
                {node.data.classNames.map((item, index) => (
                  <Code
                    className={styles.className}
                    key={index}
                    size="2"
                    variant="ghost"
                    color="gray"
                  >
                    {item}
                  </Code>
                ))}
              </span>
            )}
          </span>
        </div>
      </ContextMenu.Trigger>
      {node.data.type === "element" && elementContextMenu}
      {node.data.type === "component" && componentContextMenu}
      {node.data.type === "expression" && expressionContextMenu}
      {node.data.type === "text" && textContextMenu}
    </ContextMenu.Root>
  );
}

function EditingInput({ node }: { node: NodeApi<SourceTreeData> }) {
  return (
    <TextField.Root
      className={styles.nameInput}
      variant="classic"
      size="1"
      autoFocus
      name="name"
      defaultValue={node.data.value}
      onFocus={(e) => e.currentTarget.select()}
      onBlur={() => node.reset()}
      onKeyDown={(e) => {
        if (e.key === "Escape") node.reset();
        if (e.key === "Enter") node.submit(e.currentTarget.value);
      }}
    />
  );
}

function sortData(data: SourceTreeData[]) {
  function sortIt(data: SourceTreeData[]) {
    // data.sort((a, b) => (a.name < b.name ? -1 : 1));
    // data.forEach((d) => {
    //   if (d.children) sortIt(d.children);
    // });
    return data;
  }
  return sortIt(data);
}

function FolderArrow({ node }: { node: NodeApi<SourceTreeData> }) {
  return (
    <span className={styles.arrow}>
      {node.isInternal ? (
        node.isOpen ? (
          <TriangleDownIcon />
        ) : (
          <TriangleRightIcon />
        )
      ) : (
        // <div className={styles.emptyArrow} />
        <DotIcon />
      )}
    </span>
  );
}

const elementContextMenu = (
  <ContextMenu.Content>
    <ContextMenu.Item>
      <Pencil2Icon />
      Manage classes
    </ContextMenu.Item>
    <ContextMenu.Item>
      <MagicWandIcon />
      Ask AI
    </ContextMenu.Item>
    <ContextMenu.Sub>
      <ContextMenu.SubTrigger>
        <LoopIcon />
        Swap element
      </ContextMenu.SubTrigger>
      <ContextMenu.SubContent>
        <ContextMenu.Item>Div</ContextMenu.Item>
        <ContextMenu.Item>Span</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>Section</ContextMenu.Item>
        <ContextMenu.Item>Main</ContextMenu.Item>
        <ContextMenu.Item>Aside</ContextMenu.Item>
        <ContextMenu.Item>Header</ContextMenu.Item>
        <ContextMenu.Item>Footer</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>More options…</ContextMenu.Item>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>
    <ContextMenu.Separator />
    <ContextMenu.Item>
      <OpacityIcon />
      Show styles
    </ContextMenu.Item>
    <ContextMenu.Item>
      <MixerHorizontalIcon />
      Show props
    </ContextMenu.Item>
    <ContextMenu.Item>
      <CodeIcon />
      Show in code
    </ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item color="red">
      <TrashIcon />
      Remove
    </ContextMenu.Item>
  </ContextMenu.Content>
);

const componentContextMenu = (
  <ContextMenu.Content>
    <ContextMenu.Item>
      <Pencil1Icon />
      Edit component
    </ContextMenu.Item>
    <ContextMenu.Item>
      <Pencil2Icon />
      Manage classes
    </ContextMenu.Item>
    <ContextMenu.Item>
      <MagicWandIcon />
      Ask AI
    </ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item>
      <OpacityIcon />
      Show styles
    </ContextMenu.Item>
    <ContextMenu.Item>
      <MixerHorizontalIcon />
      Show props
    </ContextMenu.Item>
    <ContextMenu.Item>
      <CodeIcon />
      Show in code
    </ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item color="red">
      <TrashIcon />
      Remove
    </ContextMenu.Item>
  </ContextMenu.Content>
);

const expressionContextMenu = (
  <ContextMenu.Content>
    <ContextMenu.Item>
      <Pencil1Icon />
      Edit expression
    </ContextMenu.Item>
    <ContextMenu.Item>
      <MagicWandIcon />
      Ask AI
    </ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item>
      <CodeIcon />
      Show in code
    </ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item color="red">
      <TrashIcon />
      Remove
    </ContextMenu.Item>
  </ContextMenu.Content>
);

const textContextMenu = (
  <ContextMenu.Content>
    <ContextMenu.Item>
      <Pencil1Icon />
      Edit text
    </ContextMenu.Item>
    <ContextMenu.Item>
      <MagicWandIcon />
      Ask AI
    </ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item>
      <CodeIcon />
      Show in code
    </ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item color="red">
      <TrashIcon />
      Remove
    </ContextMenu.Item>
  </ContextMenu.Content>
);
