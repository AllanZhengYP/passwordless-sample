import { fetchAuthSession } from "aws-amplify/auth";

export type AuthSession = Awaited<ReturnType<typeof fetchAuthSession>>;