import { useEffect, useState } from "react";

import { getChildNode }
from "../../admin/services/binaryTreeService";

import UserBinaryChildren
from "./UserBinaryChildren";

import TreeConnector
from "../../admin/components/TreeConnector";

import UserBinaryNode
from "./UserBinaryNode";

function UserBinaryTree({ selectedUser }) {

    const [currentRoot, setCurrentRoot] =
        useState(null);

    const [history, setHistory] =
        useState([]);

    const [leftUser, setLeftUser] =
        useState(null);

    const [rightUser, setRightUser] =
        useState(null);

    useEffect(() => {

        setCurrentRoot(selectedUser);

        setHistory([]);

    }, [selectedUser]);

    function handleNodeClick(user) {

        if (!user) return;

        if (currentRoot) {

            setHistory(
                (prev) => [...prev, currentRoot]
            );

        }

        setCurrentRoot(user);

    }

    function handleBack() {

        if (history.length === 0) return;

        const previousRoot =
            history[history.length - 1];

        setHistory(
            (prev) => prev.slice(0, -1)
        );

        setCurrentRoot(previousRoot);

    }

    const leftChildId =
        currentRoot?.binary?.leftChild;

    const rightChildId =
        currentRoot?.binary?.rightChild;

    useEffect(() => {

        async function loadChildren() {

            if (!currentRoot) {

                setLeftUser(null);

                setRightUser(null);

                return;

            }

            const left =
                await getChildNode(
                    leftChildId
                );

            const right =
                await getChildNode(
                    rightChildId
                );

            setLeftUser(left);

            setRightUser(right);

        }

        loadChildren();

    }, [
        currentRoot,
        leftChildId,
        rightChildId
    ]);

    if (!currentRoot) {

        return <p>No Team Found</p>;

    }

    return (

        <div className="binary-tree">

            <h2>🌳 My Network</h2>

            {history.length > 0 && (

                <button
                    className="back-button"
                    onClick={handleBack}
                >
                    ⬅ Back
                </button>

            )}

            <div className="tree-node">

                <UserBinaryNode
                    user={currentRoot}
                    onClick={handleNodeClick}
                />

            </div>

            <TreeConnector />

            <UserBinaryChildren
    leftUser={leftUser}
    rightUser={rightUser}
    onNodeClick={handleNodeClick}
/>

        </div>

    );

}

export default UserBinaryTree;