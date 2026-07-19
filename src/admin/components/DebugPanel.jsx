import {
    verifyMatrix,
} from "../services/verifyMatrix";

import {
    verifyLevels,
} from "../services/verifyLevels";

import {
    verifyActualLevels,
} from "../services/verifyActualLevels";

import {
    useEffect,
    useState,
} from "react";

import {
    verifyUser,
} from "../services/debugService";
import {
    verifyActualMatrix,
} from "../services/verifyActualMatrix";

function DebugPanel({
    selectedUser,
}) {

    const [result, setResult] = useState({

        pass: false,

        checks: [],

    });

    const [actualLevelResult, setActualLevelResult] = useState({

        pass: false,

        checks: [],

    });
     const [actualMatrixResult, setActualMatrixResult] = useState({

    pass: false,

    checks: [],

});
    useEffect(() => {

        async function loadDebug() {

            if (!selectedUser) {

                setResult({

                    pass: false,

                    checks: [],

                });

                setActualLevelResult({

                    pass: false,

                    checks: [],

                });

                return;

            }

            const debugResult =

                await verifyUser(

                    selectedUser

                );

            const actualLevelData =

                await verifyActualLevels(

                    selectedUser

                );

            setResult(

                debugResult

            );

            setActualLevelResult(

                actualLevelData

            );
           const actualMatrixData =

    await verifyActualMatrix(

        selectedUser

    );

setActualMatrixResult(

    actualMatrixData

);
        }

        loadDebug();

    }, [selectedUser]);

    if (!selectedUser) {

        return (

            <div>

                <h3>

                    Select User

                </h3>

            </div>

        );

    }

    const levelResult =

        verifyLevels(

            selectedUser

        );

    const matrixResult =

        verifyMatrix(

            selectedUser

        );
const finalPass =

    result.pass &&

    levelResult.pass &&

    matrixResult.pass &&

    actualLevelResult.pass &&

    actualMatrixResult.pass;
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

                Actual Level Verification

            </h3>

            {actualLevelResult.checks.map(

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
<h3>

    Actual Matrix Verification

</h3>

{actualMatrixResult.checks.map(

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

        {finalPass

            ? "FINAL STATUS ✅"

            : "FINAL STATUS ❌"}

    </h2>

)}

        </div>

    );

}

export default DebugPanel;