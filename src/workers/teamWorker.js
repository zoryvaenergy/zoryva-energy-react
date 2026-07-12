import { updateTeamCounts }
from "../services/team/updateTeamCounts";

export async function teamWorker(sponsorId) {

    await updateTeamCounts(sponsorId);

}