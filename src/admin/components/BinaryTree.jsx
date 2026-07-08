import "../css/BinaryTree.css";
import { useEffect, useState } from "react";
import { getChildNode } from "../services/binaryTreeService";

import BinaryNode from "./BinaryNode";
import BinaryChildren from "./BinaryChildren";
import TreeConnector from "./TreeConnector";

function BinaryTree({ selectedUser }) {

  const [currentRoot, setCurrentRoot] = useState(null);
  const [history, setHistory] = useState([]);

  const [leftUser, setLeftUser] = useState(null);
  const [rightUser, setRightUser] = useState(null);

  // Search होने पर Root बदल जाएगा
  useEffect(() => {

    setCurrentRoot(selectedUser);

    // नई Search पर पुरानी History हट जाएगी
    setHistory([]);

  }, [selectedUser]);

  // Node Click
  function handleNodeClick(user) {

    if (!user) return;

    if (currentRoot) {
      setHistory(prev => [...prev, currentRoot]);
    }

    setCurrentRoot(user);

  }

  // Back Button
  function handleBack() {

    if (history.length === 0) return;

    const previousRoot = history[history.length - 1];

    setHistory(prev => prev.slice(0, -1));

    setCurrentRoot(previousRoot);

  }

  const leftChildId = currentRoot?.binary?.leftChild;
  const rightChildId = currentRoot?.binary?.rightChild;

  // Left / Right Child Load
  useEffect(() => {

    async function loadChildren() {

      if (!currentRoot) {

        setLeftUser(null);
        setRightUser(null);

        return;

      }

      const left = await getChildNode(leftChildId);
      const right = await getChildNode(rightChildId);

      setLeftUser(left);
      setRightUser(right);

    }

    loadChildren();

  }, [currentRoot, leftChildId, rightChildId]);

  if (!currentRoot) {

    return (

      <div className="binary-tree">

        <h2>🌳 Binary Tree Explorer</h2>

        <p>Search a User to load Binary Tree.</p>

      </div>

    );

  }

  return (

    <div className="binary-tree">

      <h2>🌳 Binary Tree Explorer</h2>

      {history.length > 0 && (

        <button
          className="back-button"
          onClick={handleBack}
        >
          ⬅ Back
        </button>

      )}

      <div className="tree-node">

        <BinaryNode
          user={currentRoot}
          onClick={handleNodeClick}
        />

      </div>

      <TreeConnector />

      <BinaryChildren
        leftUser={leftUser}
        rightUser={rightUser}
        onNodeClick={handleNodeClick}
      />

    </div>

  );

}

export default BinaryTree;