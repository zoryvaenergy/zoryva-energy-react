import { binaryWorker }
from "./binaryWorker";

import { teamWorker }
from "./teamWorker";

export async function startWorkers(
    userId,
    sponsorId
) {

    await binaryWorker(userId);

    await new Promise(
        (resolve) =>
            setTimeout(resolve, 1000)
    );

    await teamWorker(sponsorId);

}