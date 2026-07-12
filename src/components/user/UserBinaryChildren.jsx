import UserBinaryNode from "./UserBinaryNode";

function UserBinaryChildren({

    leftUser,

    rightUser,

    onNodeClick

}) {

    return (

        <div className="children-container">

            <div className="child-node">

                <UserBinaryNode
                    user={leftUser}
                    onClick={onNodeClick}
                />

            </div>

            <div className="child-node">

                <UserBinaryNode
                    user={rightUser}
                    onClick={onNodeClick}
                />

            </div>

        </div>

    );

}

export default UserBinaryChildren;