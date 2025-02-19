export type SouceTreeData = {
  id: string;
  name: string;
  children?: SouceTreeData[];
};

export const souceTreeData = [
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
        id: "dailyProgress",
        name: "ProgressCard",
      },
      {
        id: "listOfHabits",
        name: "HabitsList",
        children: [
          {
            id: "HabitsListMap",
            name: "{items.map(item => (...))}",
            children: [{ id: "habitItem", name: "HabitItem" }],
          },
        ],
      },
    ],
  },
];
