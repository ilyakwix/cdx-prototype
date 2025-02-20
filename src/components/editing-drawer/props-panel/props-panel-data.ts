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
    value: "comments.map(comment => comment.text)",
    type: "array<string>",
    description: "List of comment texts",
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
    value: "document",
    type: "{ id: string; content: string; metadata: Record<string, unknown> }",
    description: "Document data structure",
  },
  {
    value: "formData",
    type: "Record<string, string | number | boolean>",
    description: "Form input values mapped by field name",
  },
  {
    value: "habit.type",
    type: "HabitTypes | 'task' | 'reminder'",
    description: "Type of habit-related entry",
  },
  {
    value: "items.map(item => item.name)",
    type: "array<string>",
    description: "List of item names",
  },
  {
    value: "messages.map(msg => msg.content)",
    type: "array<string>",
    description: "Chat message contents",
  },
  {
    value: "notifications",
    type: "Array<{ id: string; message: string }>",
    description: "List of user notifications",
  },
  { value: "post.body", type: "string", description: "Blog post content" },
  {
    value: "selectedProduct?.name",
    type: "string | undefined",
    description: "Name of selected product",
  },
  {
    value: "settings",
    type: "{ darkMode: boolean; language: 'en' | 'es' | 'fr' }",
    description: "App settings object",
  },
  {
    value: "tableData",
    type: "Array<{ column: string; value: string | number }>",
    description: "Structured table data",
  },
  {
    value: "tasks",
    type: "Array<{ id: number; title: string; completed: boolean }>",
    description: "List of user tasks",
  },
  {
    value: "theme",
    type: "'light' | 'dark' | 'system'",
    description: "Theme mode selection",
  },
  { value: "title", type: "string", description: "Main title text" },
  { value: "user.bio", type: "string", description: "User's biography text" },
  { value: "user.name", type: "string", description: "Logged-in user's name" },
  {
    value: "user.permissions",
    type: "Array<'read' | 'write' | 'admin'>",
    description: "User access permissions",
  },
  {
    value: "user.preferences.theme",
    type: "string",
    description: "User's selected theme",
  },
  {
    value: "user.profile",
    type: "{ name: string; age: number; avatarUrl: string }",
    description: "User profile object",
  },
];
