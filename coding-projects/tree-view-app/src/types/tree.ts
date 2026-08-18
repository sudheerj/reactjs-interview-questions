export type TreeNodeType = "folder" | "file";

export interface TreeNode {
    id: string,
    name: string,
    type: TreeNodeType,
    children?: TreeNode[]
}