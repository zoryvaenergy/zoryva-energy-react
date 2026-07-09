import { db } from "../../firebase/firebase";
import {
  ref,
  get,
  update
} from "firebase/database";

export async function repairTeamCounts() {

  console.log("================================");
  console.log("TEAM REPAIR STARTED");
  console.log("================================");

  const usersRef = ref(db, "users");

  const snapshot = await get(usersRef);

  if (!snapshot.exists()) {

    console.log("No Users Found");

    return {
      success: false,
      repaired: 0,
    };

  }

  const users = snapshot.val();

  let repaired = 0;
    for (const userId in users) {

    const user = users[userId];

    const leftCount =
      user.binary?.leftCount || 0;

    const rightCount =
      user.binary?.rightCount || 0;

    const totalTeam =
      leftCount + rightCount;

    const savedTotal =
      user.team?.totalTeam || 0;

    if (savedTotal !== totalTeam) {

      console.log("--------------------------------");

      console.log(
        user.profile?.userId,
        "Repairing..."
      );

      console.log(
        "Old Total :",
        savedTotal
      );

      console.log(
        "New Total :",
        totalTeam
      );

      await update(

        ref(db, `users/${userId}`),

        {

          "team/totalTeam": totalTeam,

        }

      );

      repaired++;

    }

  }
    console.log("================================");
  console.log("TEAM REPAIR FINISHED");
  console.log("================================");
  console.log("Users Repaired :", repaired);

  return {

    success: true,

    repaired,

  };

}