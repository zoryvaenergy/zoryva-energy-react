import { ref, get } from "firebase/database";
import { db } from "../../firebase/firebase";

export async function getDashboardStats() {
  const snapshot = await get(ref(db, "users"));

  if (!snapshot.exists()) {
    return {
      totalUsers: 0,
      activeUsers: 0,
      todayRegistrations: 0,
      totalTeamMembers: 0,
      totalBinaryMembers: 0,
    };
  }

  const users = snapshot.val();

  const userList = Object.values(users);

  const today = new Date();

const todayDate = String(today.getDate()).padStart(2, "0");
const todayMonth = String(today.getMonth() + 1).padStart(2, "0");
const todayYear = today.getFullYear();

const todayString = `${todayDate}/${todayMonth}/${todayYear}`;

let activeUsers = 0;
let todayRegistrations = 0;

userList.forEach((user) => {

  if (user.profile?.isActive === true) {
    activeUsers++;
  }

  if (user.profile?.registrationDate === todayString) {
    todayRegistrations++;
  }

});

  return {
    totalUsers: userList.length,
    activeUsers,
    todayRegistrations,
    totalTeamMembers: 0,
    totalBinaryMembers: userList.length,
  };
}