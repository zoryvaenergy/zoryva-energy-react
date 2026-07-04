import { saveUser } from "./saveUser";
import { USER_STATUS } from "../../constants/status";
import { USER_ROLE } from "../../constants/roles";
import { validateForm } from "./validateForm";
import { checkDuplicateMobile } from "./duplicateMobile";
import { verifySponsor } from "./verifySponsor";
import { generateUserId } from "./generateUserId";

export async function registerUser(formData) {

    console.log("Registration Engine Started");

    // Step 1 - Form Validation
    const validation = validateForm(formData);

    if (!validation.success) {
        return validation;
    }

    // Step 2 - Duplicate Mobile Check
    const duplicateCheck = await checkDuplicateMobile(formData.mobile);

    if (!duplicateCheck.success) {
        return duplicateCheck;
    }

    // Step 3 - Sponsor Verification
    const sponsorCheck = await verifySponsor(formData.sponsorId);

    if (!sponsorCheck.success) {
        return sponsorCheck;
    }

    // Step 4 - Generate User ID
const userId = await generateUserId();

const now = new Date();
const userData = {

    profile: {
        userId,
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email || "",
        sponsorId: sponsorCheck?.sponsor?.userId || "",
sponsorName: sponsorCheck?.sponsor?.name || "",
        referralCode: userId,
        role: USER_ROLE.MEMBER,
        status: USER_STATUS.PRE_LAUNCH,
        registrationDate: now.toLocaleDateString("en-GB"),
        registrationTime: now.toLocaleTimeString("en-IN"),
        createdAt: now.getTime(),
         isActive: false,
    },
    // TODO: Hash password before production launch
    auth: {
    password: formData.password,
},wallet: {
    balance: 0,
    totalIncome: 0,
    holdBalance: 0,
    totalWithdrawal: 0,
    availableBalance: 0,
},income: {
    directIncome: 0,
    levelIncome: 0,
    binaryIncome: 0,
    rewardIncome: 0,
},team: {
    directTeam: 0,
    totalTeam: 0,
    activeTeam: 0,
},matrix: {
    parentId: "",
    position: "",
    level: 0,
},binary: {
    leftCount: 0,
    rightCount: 0,
    totalPairs: 0,
},rewards: {
    totalRewards: 0,
},settings: {
    notifications: true,
},
    

};
await saveUser(userData);

console.log("Generated User ID :", userId);


    // Registration Flow Continue...
    return {
        success: true,
          message: "Registration Successful",
        userId
    };

}