export type SourceTreeNodeType =
  | "element"
  | "component"
  | "expression"
  | "text";

export type SourceTreeData = {
  id: string;
  value: string;
  type: SourceTreeNodeType;
  children?: SourceTreeData[];
  prop?: string;
  propType?: string;
};

export const sourceTreeData: SourceTreeData[] = [
  {
    id: "root",
    value: "div",
    type: "element",
    children: [
      {
        id: "header",
        value: "header",
        type: "element",
        children: [
          {
            id: "mainHeading",
            value: "h1",
            type: "element",
            children: [
              { id: "mainHeadingText", value: "Daily Habits", type: "text" },
            ],
          },
          {
            id: "subtitle",
            value: "span",
            type: "element",
            children: [
              { id: "subtitleText", value: "{today}", type: "expression" },
            ],
          },
        ],
      },
      {
        id: "dailyProgress",
        value: "ProgressCard",
        type: "component",
      },
      {
        id: "listOfHabits",
        value: "HabitsList",
        type: "component",
        children: [
          {
            id: "HabitsListMap",
            value: "{items.map((item) => ...)}",
            type: "expression",
            children: [
              {
                id: "habitItemCard",
                value: "HabitItemCard",
                type: "component",
                children: [
                  {
                    id: "habitItemLabel",
                    value: "{item.title}",
                    type: "expression",
                  },
                  {
                    id: "habitItemStatusIndicator",
                    value: "StatusIndicator",
                    type: "component",
                    prop: "status",
                    propType: "React.ReactNode",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
