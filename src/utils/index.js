/** 生成成功响应 */
export const generateOk = data => {
  return {
    code: 200,
    message: "请求成功",
    data,
  };
};

/** 生成失败响应 */
export const generateError = message => {
  return {
    code: 500,
    message: message || "请求失败",
  };
};
