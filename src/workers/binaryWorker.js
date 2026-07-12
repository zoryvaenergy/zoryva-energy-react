import { updateBinaryCounts }
from "../services/binary/updateBinaryCounts";

export async function binaryWorker(userId) {

    await updateBinaryCounts(userId);

}