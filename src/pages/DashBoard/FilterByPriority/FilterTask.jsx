const FilterTask = ({ selectedPriority, setSelectedPriority }) => {
  const handlePriorityChange = (e) => {
    const priority = e.target.value;
    setSelectedPriority(priority);
  };
  return (
    <div className="mt-4 px-4 py-5">
      <label className="block mb-2 font-bold text-white">
        Filter by Priority:
      </label>
      <select
        className="p-2 border rounded"
        value={selectedPriority}
        onChange={handlePriorityChange}
      >
        <option value="all">All</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
};

export default FilterTask;
