const getSorting = (sortBy) => {
  if (!sortBy) return { createdAt: "desc" };

  const sortField = sortBy.startsWith("-") ? sortBy.substring(1) : sortBy;
  const sortOrder = sortBy.startsWith("-") ? "desc" : "asc";

  return { [sortField]: sortOrder };
};

module.exports = getSorting;
