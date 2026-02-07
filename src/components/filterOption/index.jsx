import "./index.css";

const FilterOption = ({ filters, onFilterChange, onApplyFilters, t }) => {
    
    const handleChange = (key, value) => {
        onFilterChange({ ...filters, [key]: value });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onApplyFilters();
        }
    };
    return (
        <div className="filter-section">
            <h3>{t.filters}</h3>
            <div className="filter-inputs">
                <input
                type="text"
                placeholder={t.namePlaceholder}
                value={filters.name || ""}
                onChange={(e) => handleChange("name", e.target.value)}
                onKeyPress={handleKeyPress}
                className="filter-input"
                />
                
                <select
                value={filters.type || ""}
                onChange={(e) => handleChange("type", e.target.value)}
                className="filter-select"
                >
                <option value="">{t.allTypes}</option>
                {Object.entries(t.types).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                ))}
                </select>

                <div className="hp-range">
                <input
                    type="number"
                    placeholder={t.hpMin}
                    value={filters.minHP || ""}
                    onChange={(e) => handleChange("minHP", e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="filter-input filter-input-small"
                    min="0"
                />
                <span className="range-separator">-</span>
                <input
                    type="number"
                    placeholder={t.hpMax}
                    value={filters.maxHP || ""}
                    onChange={(e) => handleChange("maxHP", e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="filter-input filter-input-small"
                    min="0"
                />
                </div>

                <button className="apply-btn" onClick={onApplyFilters}>
                {t.apply}
                </button>
            </div>
        </div>
    );
}

export default FilterOption;