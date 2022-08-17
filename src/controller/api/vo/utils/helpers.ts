export const chkRequired = (
  datas: object,
  required: Array<string>
): boolean => {
  for (const i in required) {
    if (!datas[i]) return false;
  }
  return true;
};
