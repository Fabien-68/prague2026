import React from 'react';

interface FilterPanelProps {
  allCategories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ allCategories, selectedCategories, onCategoryChange }) => {
  return (
    <div className="my-8 md:my-10 max-w-5xl mx-auto p-6 bg-black bg-opacity-40 border border-gray-700 rounded-lg backdrop-blur-sm">
      <h3 className="text-xl font-bold text-white mb-4 text-center md:text-left">Filtrez par catégories :</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {allCategories.map(category => (
          <label key={category} className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
              className="form-checkbox h-5 w-5 bg-gray-800 border-gray-600 rounded text-blue-500 focus:ring-blue-500"
            />
            <span className="text-gray-200">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
