import { User } from "@prisma/client";


export type SafeUser = Omit<
    User,
    "createdAt" | "updatedat" | "emailVerified"> & {

        createdAt: string;
        updatedAt: string;
        emailVerified: string | null;


    };