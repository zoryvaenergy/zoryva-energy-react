import {
    verifyMatrix,
} from "../services/verifyMatrix";

import {
    verifyLevels,
} from "../services/verifyLevels";

import {
    useEffect,
    useState,
} from "react";

import {
    verifyUser,
} from "../services/debugService";

function DebugPanel({
    selectedUser,
}) {

    const [result, setResult] = useState({

        pass: false,

        checks: [],
    });

    const levelResult =
        verifyLevels(
            selectedUser
        );

    const matrixResult =
        verifyMatrix(
            selectedUser
        );

    useEffect(() => {

        async function loadDebug() {

            const debugResult =
                await verifyUser(
                    selectedUser
                );

            console.log(
                "Debug Result :",
                debugResult
            );

            setResult(
                debugResult
            );
        }

        loadDebug();

    }, [selectedUser]);

    return (

        <div>

            <h3>
                System Debug
            </h3>

            {result.checks.map(
                (
                    item,
                    index
                ) => (

                    <p key={index}>

                        {item}

                    </p>

                )
            )}

            <h3>
                Level Verification
            </h3>

            {levelResult.checks.map(

                (
                    item,
                    index
                ) => (

                    <p key={index}>

                        {item.pass
                            ? "✅"
                            : "❌"}

                        {" "}

                        {item.name}

                    </p>

                )
            )}

            <h3>
                Matrix Verification
            </h3>

            {matrixResult.checks.map(

                (
                    item,
                    index
                ) => (

                    <p key={index}>

                        {item.pass
                            ? "✅"
                            : "❌"}

                        {" "}

                        {item.name}

                    </p>

                )
            )}

            {result.checks.length > 0 && (

                <h2>

                    {result.pass
                        ? "PASS ✅"
                        : "FAIL ❌"}

                </h2>

            )}

        </div>

    );
}

export default DebugPanel;
