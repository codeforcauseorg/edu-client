export const wait = async (time, res) => {
  await setTimeout(res, time);
};

export default wait;
