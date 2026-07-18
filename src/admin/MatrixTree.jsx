import { useEffect, useState } from "react";

import {
    ref,
    get,
} from "firebase/database";

import { db } from "../firebase/firebase";

function MatrixTree() {

    const [users, setUsers] =
        useState({});

    useEffect(() => {

        async function loadTree() {

            const snapshot =
                await get(
                    ref(
                        db,
                        "users"
                    )
                );

            if (
                snapshot.exists()
            ) {

                setUsers(
                    snapshot.val()
                );

            }

        }

        loadTree();

    }, []);

    return (

        <div>

            <h1>
                Matrix Tree
            </h1>

            {

                Object.keys(
                    users
                ).map(
                    (userId) => (

                        <div
                            key={
                                userId
                            }
                        >

                            <h3>

                                {
                                    userId
                                }

                            </h3>

                            <p>

                                Parent:

                                {

                                    users[
                                        userId
                                    ]
                                        .matrix
                                        ?.parentId ||
                                    "ROOT"

                                }

                            </p>

                            <p>

                                Position:

                                {

                                    users[
                                        userId
                                    ]
                                        .matrix
                                        ?.position ||
                                    "-"

                                }

                            </p>

                            <hr />

                        </div>

                    )
                )

            }

        </div>

    );

}

export default MatrixTree;