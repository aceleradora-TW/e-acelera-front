const INVALID_PARAM_VALUES = new Set(["", "null", "undefined"]);

const isDebugEnabled = () => {
  const publicFlag = process.env.NEXT_PUBLIC_PROGRESS_DEBUG === "true";
  const serverFlag = process.env.PROGRESS_DEBUG === "true";
  return publicFlag || serverFlag;
};

const normalizeValue = (value?: string | null) => {
  if (value === null || value === undefined) return "";
  return value.trim();
};

export const isInvalidProgressParam = (value?: string | null) => {
  const normalized = normalizeValue(value).toLowerCase();
  return INVALID_PARAM_VALUES.has(normalized);
};

export const hasProgressToken = (token?: string | null) => {
  return !isInvalidProgressParam(token);
};

export const logProgressDebug = (
  event: string,
  payload: Record<string, unknown>
) => {
  if (!isDebugEnabled()) return;

  const timestamp = new Date().toISOString();
  console.info(`[progress-debug] ${event}`, {
    timestamp,
    ...payload,
  });
};
