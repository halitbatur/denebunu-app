const sanitizeCategory = (string) => {
  return (
    string.charAt(0).toUpperCase() + string.slice(1, 8) + " " + string.slice(8)
  );
};

export default sanitizeCategory;
