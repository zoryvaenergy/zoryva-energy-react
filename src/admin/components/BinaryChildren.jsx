import BinaryNode from "./BinaryNode";

function BinaryChildren({ leftUser, rightUser, onNodeClick }) {

  return (

    <div className="children-container">

      <div className="child-node">

        <BinaryNode
          user={leftUser}
          onClick={onNodeClick}
        />

      </div>

      <div className="child-node">

        <BinaryNode
          user={rightUser}
          onClick={onNodeClick}
        />

      </div>

    </div>

  );

}

export default BinaryChildren;