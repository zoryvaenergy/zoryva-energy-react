import "./MatrixTree.css";
function MatrixTree({ selectedUser }) {

    if (!selectedUser) {

        return (

            <div className="user-card">

                <h2>Matrix Tree</h2>

                <p>Select a user</p>

            </div>

        );

    }

    return (

        <div className="user-card">

            <h2>Matrix Tree</h2>

            <p>

                User ID:

                {selectedUser.profile?.userId}

            </p>

            <p>

                Matrix Parent:

                {selectedUser.matrix?.parentId || "None"}

            </p>

            <p>

                Position:

                {selectedUser.matrix?.position || 0}

            </p>

            <p>

                Children:

                {selectedUser.matrix?.childrenCount || 0}

            </p>
<div className="matrix-children">

    {

        selectedUser.matrixChildren &&

        Object.entries(

            selectedUser.matrixChildren

        ).map(

            ([position, childId]) => (

                <div
                    key={position}
                    className="matrix-child-card"
                >

                    <p>

                        Position {position}

                    </p>

                    <p>

                        {childId}

                    </p>

                </div>

            )

        )

    }

</div>
        </div>

    );

}

export default MatrixTree;