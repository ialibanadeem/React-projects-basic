import React, { useState } from "react";
import "./styles.css";
import menuData from "./data"; // <-- import your sample data here

// Reusable TreeItem component
const TreeItem = ({ item, level = 0 }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  const toggleExpand = () => {
    if (hasChildren) {
      setExpanded((prev) => !prev);
    }
  };

  return (
    <div className="tree-item" style={{ paddingLeft: `${level * 20}px` }}>
      <div className="tree-label" onClick={toggleExpand}>
        {hasChildren && (
          <span className="arrow">{expanded ? "▼" : "▶"}</span>
        )}
        {item.title}
      </div>

      {hasChildren && expanded && (
        <div className="tree-children">
          {item.children.map((child, index) => (
            <TreeItem key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

// Main TreeNav component
export default function TreeNav() {
  return (
    <div className="tree-nav">
      {menuData.map((item, index) => (
        <TreeItem key={index} item={item} />
      ))}
    </div>
  );
}
