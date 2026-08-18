import { TreeNode as TreeNodeComponent } from "./TreeNode";
import type { TreeNode } from "../types/tree";

interface TreeProps {
  data: TreeNode[];
}
export function Tree({ data }: TreeProps) {
  return (
    <div className="tree">
      {data.map((node) => {
        return (
          <TreeNodeComponent node={node} key={node.id}></TreeNodeComponent>
        );
      })}
    </div>
  );
}
