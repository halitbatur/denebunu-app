export default (string) => {
  return (
    string.charAt(0).toUpperCase() + string.slice(1, 8) + " " + string.slice(8)
  );
};
