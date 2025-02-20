export interface PropsPanelData {
  prop: string;
  value: string;
  expression?: boolean;
  propType: string;
}

export const propsPanelData: PropsPanelData[] = [
  { prop: "title", value: "My Title", propType: "string" },
  { prop: "isVisible", value: "true", expression: true, propType: "boolean" },
  { prop: "count", value: "10", propType: "number" },
  {
    prop: "onClick",
    value: "() => alert('Clicked!')",
    expression: true,
    propType: "function",
  },
  {
    prop: "style",
    value: "{ color: 'red' }",
    expression: true,
    propType: "object",
  },
  {
    prop: "data",
    value: "{ id: 1, name: 'Item' }",
    expression: true,
    propType: "object",
  },
  { prop: "items", value: "[1, 2, 3]", expression: true, propType: "array" },
  { prop: "isLoading", value: "false", propType: "boolean" },
  {
    prop: "onSubmit",
    value: "() => console.log('Submitted')",
    expression: true,
    propType: "function",
  },
  { prop: "className", value: "'my-class'", propType: "string" },
];

export const reactNodeSuggestions = [
  {
    value: "article.content",
    type: "string",
    description: "Main article body",
  },
  {
    value: "categories.join(', ')",
    type: "string",
    description: "Comma-separated category names",
  },
  {
    value: "children",
    type: "ReactNode",
    description: "Default slot for nested elements",
  },
  {
    value: "content",
    type: "string",
    description: "Rich text content from CMS",
  },
  {
    value: "data.summary",
    type: "string",
    description: "Summary of fetched data",
  },
  {
    value: "description",
    type: "string",
    description: "Detailed description of the component",
  },
  {
    value: "habit.type",
    type: "HabitTypes | 'task' | 'reminder'",
    description: "Type of habit-related entry",
  },
  {
    value: "user.preferences.theme",
    type: "string",
    description: "User's selected theme",
  },
];
