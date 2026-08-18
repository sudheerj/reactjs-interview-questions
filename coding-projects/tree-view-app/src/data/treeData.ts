import type {TreeNode} from "../types/tree"; 

export const treeData: TreeNode[] = [
 {
    id: "1",
    name: "src",
    type: "folder",
    children: [
      {
        id: "2",
        name: "components",
        type: "folder",
        children: [
          {
            id: "3",
            name: "Tree.tsx",
            type: "file",
          },
          {
            id: "4",
            name: "TreeNode.tsx",
            type: "file",
          },
        ],
      },
      {
        id: "5",
        name: "App.tsx",
        type: "file",
      },
      {
        id: "6",
        name: "main.tsx",
        type: "file",
      },
    ],
  },

  {
    id: "7",
    name: "public",
    type: "folder",
    children: [
      {
        id: "8",
        name: "favicon.ico",
        type: "file",
      },
      {
        id: "9",
        name: "logo.svg",
        type: "file",
      },
    ],
  },

  {
    id: "10",
    name: "package.json",
    type: "file",
  },

  {
    id: "11",
    name: "README.md",
    type: "file",
  },
];