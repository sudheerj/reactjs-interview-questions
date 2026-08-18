import type { TreeNode as TreeNodeType } from "../types/tree";
import { useState } from "react";

interface TreeNodeProps {
  node: TreeNodeType;
  level?: number;
}

export function TreeNode({ node, level = 0 }: TreeNodeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isFolder = node.type === "folder";

  const handleClick = () => {
    if (!isFolder) return;
    setIsOpen((previous) => !previous);
  };

  return (
    <div>
      {/* Current node */}
      <div
        className="tree-node"
        style={{ paddingLeft: `${level * 20}px` }}
        onClick={handleClick}
      >
        {/* Expand / collapse arrow */}
        <span className="arrow">{isFolder ? (isOpen ? "▼" : "▶") : ""}</span>

        {/* File / folder icon */}
        <span className="icon">{isFolder ? "📁" : "📄"}</span>

        {/**name */}
        <span className="node-name">{node.name}</span>
      </div>

      {/**Recursively render children  */}
      {isOpen && isFolder && node.children && node.children.length > 0 && (
        <div>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} level={level + 1}></TreeNode>
          ))}
        </div>
      )}
    </div>
  );
}
