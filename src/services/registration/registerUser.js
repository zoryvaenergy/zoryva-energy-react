import { updateTeamCounts } from "../team/updateTeamCounts";
import { saveUser } from "./saveUser";
import { USER_STATUS } from "../../constants/status";
import { USER_ROLE } from "../../constants/roles";
import { validateForm } from "./validateForm";
import { checkDuplicateMobile } from "./duplicateMobile";
import { verifySponsor } from "./verifySponsor";
import { generateUserId } from "./generateUserId";
import { placeUser } from "../binary/placeUser";
import { updateBinaryCounts } from "../binary/updateBinaryCounts";

export async function registerUser(formData) {

    console.log("Registration Engine Started");
    console.time("Registration");

    // Step 1 - Form Validation
    const validation = validateForm(formData);

    if (!validation.success) {
        return validation;
    }

    // Step 2 - Duplicate Mobile Check
    console.time("Duplicate Check");
    const duplicateCheck = await checkDuplicateMobile(formData.mobile);
console.timeEnd("Duplicate Check");
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
            side: formData.side || "",
            role: USER_ROLE.MEMBER,
            status: USER_STATUS.PRE_LAUNCH,
            registrationDate: now.toLocaleDateString("en-GB"),
            registrationTime: now.toLocaleTimeString("en-IN"),
            createdAt: now.getTime(),
            isActive: false,
        },

        auth: {
            password: formData.password,
        },

        wallet: {
            balance: 0,
            totalIncome: 0,
            holdBalance: 0,
            totalWithdrawal: 0,
            availableBalance: 0,
        },

        income: {
            directIncome: 0,
            levelIncome: 0,
            binaryIncome: 0,
            rewardIncome: 0,
        },

        team: {
            directTeam: 0,
            totalTeam: 0,
            activeTeam: 0,
        },

        matrix: {
            parentId: "",
            position: "",
            level: 0,
        },

        binary: {
            parentId: "",
            position: "",
            leftChild: "",
            rightChild: "",
            leftCount: 0,
            rightCount: 0,
            totalPairs: 0,
        },

        rewards: {
            totalRewards: 0,
        },

        settings: {
            notifications: true,
        }

    };

    // Save New User
    await saveUser(userData);

    console.log("User Saved");
    console.log("Sponsor Value :", formData.sponsorId);
    console.log("Side Value :", formData.side);

    if (formData.sponsorId && formData.side) {

        console.time("Place User");
        const placed = await placeUser(
            userId,
            sponsorCheck.sponsor.userId,
            formData.side
        );
        console.timeEnd("Place User");

        console.log("PlaceUser Result :", placed);
        console.time("Binary Counts");

        await updateBinaryCounts(userId);

        console.timeEnd("Binary Counts");
        console.time("Team Counts");

        await updateTeamCounts(sponsorCheck.sponsor.userId);
        console.timeEnd("Team Counts");

        console.log("updateTeamCounts Finished");

       

    }

    console.log("Generated User ID :", userId);
console.timeEnd("Registration");
    return {
        success: true,
        message: "Registration Successful",
        userId,
        user: userData,
    };

}