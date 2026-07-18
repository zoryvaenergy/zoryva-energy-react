function LevelMatrixPanel({
    selectedUser,
}) {

    if (!selectedUser) {

        return null;

    }

    return (

        <div className="user-card">

            <h2>
                Level & Matrix
            </h2>

            <h3>
                Levels
            </h3>

            <p>
                Level 1 :
                {
                    selectedUser
                        ?.levels
                        ?.level1
                }
            </p>

            <p>
                Level 2 :
                {
                    selectedUser
                        ?.levels
                        ?.level2
                }
            </p>

            <p>
                Level 3 :
                {
                    selectedUser
                        ?.levels
                        ?.level3
                }
            </p>

            <h3>
                Matrix
            </h3>

            <p>
                Total Team :
                {
                    selectedUser
                        ?.matrix
                        ?.totalTeam
                }
            </p>

            <p>
                Current Step :
                {
                    selectedUser
                        ?.matrix
                        ?.currentStep
                }
            </p>

            <p>
                Completed Steps :
                {
                    selectedUser
                        ?.matrix
                        ?.completedSteps
                }
            </p>

        </div>

    );

}

export default LevelMatrixPanel;