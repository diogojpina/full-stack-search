import { getCodeSandboxHost } from "@codesandbox/utils";

const codeSandboxHost = getCodeSandboxHost(3001);
const API_URL = codeSandboxHost
  ? `https://${codeSandboxHost}`
  : "http://localhost:3001";

export const apiClient = async (endpoint: string) => {
  return await fetch(`${API_URL}${endpoint}`);
};
