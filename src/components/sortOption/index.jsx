import "./index.css";


const SortOption = ({ sortBy, sortOrder, onSortChange, t }) => {

    const getSortIcon = (sort) => {
        if (sortBy !== sort) return '';
        return sortOrder === 'asc' ? ' ↑' : ' ↓';
    };

    return (
        <div className="sort-section">
            <h3>{t.sortBy}</h3>
            <div className="sort-buttons">
                <button
                className={`sort-btn ${sortBy === "id" ? "active" : ""}`}
                onClick={() => onSortChange("id")}
                >
                {t.id}{getSortIcon("id")}
                </button>
                <button
                className={`sort-btn ${sortBy === "name" ? "active" : ""}`}
                onClick={() => onSortChange("name")}
                >
                {t.name}{getSortIcon("name")}
                </button>
                <button
                className={`sort-btn ${sortBy === "hp" ? "active" : ""}`}
                onClick={() => onSortChange("hp")}
                >
                {t.hp}{getSortIcon("hp")}
                </button>
                <button
                className={`sort-btn ${sortBy === "attack" ? "active" : ""}`}
                onClick={() => onSortChange("attack")}
                >
                {t.attack}{getSortIcon("attack")}
                </button>
                <button
                className={`sort-btn ${sortBy === "defense" ? "active" : ""}`}
                onClick={() => onSortChange("defense")}
                >
                {t.defense}{getSortIcon("defense")}
                </button>
                <button
                className={`sort-btn ${sortBy === "speed" ? "active" : ""}`}
                onClick={() => onSortChange("speed")}
                >
                {t.speed}{getSortIcon("speed")}
                </button>
            </div>
        </div>
    );
}

export default SortOption;