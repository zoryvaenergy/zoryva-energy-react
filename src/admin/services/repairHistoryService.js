import { db } from "../../firebase/firebase";

import {
    ref,
    push,
    set,
} from "firebase/database";

export async function saveRepairHistory({

    tool,

    scannedUsers,

    repairedUsers,

    status,

}) {

    try {

        const historyRef = ref(
            db,
            "repairHistory"
        );

        const newHistoryRef = push(
            historyRef
        );

        await set(newHistoryRef, {

            tool,

            scannedUsers,

            repairedUsers,

            status,

            date: new Date().toLocaleDateString(),

            time: new Date().toLocaleTimeString(),

            createdAt: Date.now(),

        });

        console.log(
            "Repair History Saved"
        );

    } catch (error) {

        console.error(
            "Repair History Error:",
            error
        );

    }

}