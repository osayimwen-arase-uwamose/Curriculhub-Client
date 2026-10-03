const returnNullOrChangeToNumber = (string) => {
  return string === "" ? null : Number(string);
};

export default returnNullOrChangeToNumber;
