import "./index.css";

const TRANSLATIONS = {
  french: {
    language: "🌍 Langue",
    filters: "🔍 Filtres",
    namePlaceholder: "Nom du Pokémon...",
    allTypes: "Tous les types",
    hpMin: "HP min",
    hpMax: "HP max",
    apply: "✓ Appliquer",
    sortBy: "📊 Trier par",
    id: "🔢 ID",
    name: "📝 Nom",
    hp: "❤️ PV",
    attack: "⚔️ ATQ",
    defense: "🛡️ DÉF",
    speed: "⚡ VIT",
    types: {
      grass: "🌿 Plante",
      fire: "🔥 Feu",
      water: "💧 Eau",
      poison: "☠️ Poison",
      electric: "⚡ Électrik",
      normal: "⚪ Normal",
      bug: "🐛 Insecte",
      flying: "🕊️ Vol",
      fighting: "🥊 Combat",
      psychic: "🔮 Psy",
      rock: "🪨 Roche",
      ground: "⛰️ Sol",
      ice: "❄️ Glace",
      dragon: "🐉 Dragon",
      ghost: "👻 Spectre",
      dark: "🌑 Ténèbres",
      steel: "⚙️ Acier",
      fairy: "🧚 Fée"
    }
  },
  english: {
    language: "🌍 Language",
    filters: "🔍 Filters",
    namePlaceholder: "Pokémon name...",
    allTypes: "All types",
    hpMin: "Min HP",
    hpMax: "Max HP",
    apply: "✓ Apply",
    sortBy: "📊 Sort by",
    id: "🔢 ID",
    name: "📝 Name",
    hp: "❤️ HP",
    attack: "⚔️ ATK",
    defense: "🛡️ DEF",
    speed: "⚡ SPD",
    types: {
      grass: "🌿 Grass",
      fire: "🔥 Fire",
      water: "💧 Water",
      poison: "☠️ Poison",
      electric: "⚡ Electric",
      normal: "⚪ Normal",
      bug: "🐛 Bug",
      flying: "🕊️ Flying",
      fighting: "🥊 Fighting",
      psychic: "🔮 Psychic",
      rock: "🪨 Rock",
      ground: "⛰️ Ground",
      ice: "❄️ Ice",
      dragon: "🐉 Dragon",
      ghost: "👻 Ghost",
      dark: "🌑 Dark",
      steel: "⚙️ Steel",
      fairy: "🧚 Fairy"
    }
  },
  japanese: {
    language: "🌍 言語",
    filters: "🔍 フィルター",
    namePlaceholder: "ポケモンの名前...",
    allTypes: "すべてのタイプ",
    hpMin: "HP 最小",
    hpMax: "HP 最大",
    apply: "✓ 適用",
    sortBy: "📊 並び替え",
    id: "🔢 ID",
    name: "📝 名前",
    hp: "❤️ HP",
    attack: "⚔️ 攻撃",
    defense: "🛡️ 防御",
    speed: "⚡ 素早さ",
    types: {
      grass: "🌿 くさ",
      fire: "🔥 ほのお",
      water: "💧 みず",
      poison: "☠️ どく",
      electric: "⚡ でんき",
      normal: "⚪ ノーマル",
      bug: "🐛 むし",
      flying: "🕊️ ひこう",
      fighting: "🥊 かくとう",
      psychic: "🔮 エスパー",
      rock: "🪨 いわ",
      ground: "⛰️ じめん",
      ice: "❄️ こおり",
      dragon: "🐉 ドラゴン",
      ghost: "👻 ゴースト",
      dark: "🌑 あく",
      steel: "⚙️ はがね",
      fairy: "🧚 フェアリー"
    }
  },
  chinese: {
    language: "🌍 语言",
    filters: "🔍 筛选",
    namePlaceholder: "宝可梦名称...",
    allTypes: "所有属性",
    hpMin: "最小HP",
    hpMax: "最大HP",
    apply: "✓ 应用",
    sortBy: "📊 排序",
    id: "🔢 ID",
    name: "📝 名称",
    hp: "❤️ HP",
    attack: "⚔️ 攻击",
    defense: "🛡️ 防御",
    speed: "⚡ 速度",
    types: {
      grass: "🌿 草",
      fire: "🔥 火",
      water: "💧 水",
      poison: "☠️ 毒",
      electric: "⚡ 电",
      normal: "⚪ 一般",
      bug: "🐛 虫",
      flying: "🕊️ 飞行",
      fighting: "🥊 格斗",
      psychic: "🔮 超能力",
      rock: "🪨 岩石",
      ground: "⛰️ 地面",
      ice: "❄️ 冰",
      dragon: "🐉 龙",
      ghost: "👻 幽灵",
      dark: "🌑 恶",
      steel: "⚙️ 钢",
      fairy: "🧚 妖精"
    }
  }
};

const FilterBar = ({ 
  filters, 
  onFilterChange, 
  onApplyFilters,
  sortBy, 
  sortOrder,
  onSortChange, 
  language, 
  onLanguageChange 
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.french;

  const handleChange = (key, value) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onApplyFilters();
    }
  };

  const getSortIcon = (sort) => {
    if (sortBy !== sort) return '';
    return sortOrder === 'asc' ? ' ↑' : ' ↓';
  };

  return (
    <div className="filter-bar">
      <div className="language-section">
        <h3>{t.language}</h3>
        <div className="language-buttons">
          <button
            className={`lang-btn ${language === "french" ? "active" : ""}`}
            onClick={() => onLanguageChange("french")}
          >
            🇫🇷 Français
          </button>
          <button
            className={`lang-btn ${language === "english" ? "active" : ""}`}
            onClick={() => onLanguageChange("english")}
          >
            🇬🇧 English
          </button>
          <button
            className={`lang-btn ${language === "japanese" ? "active" : ""}`}
            onClick={() => onLanguageChange("japanese")}
          >
            🇯🇵 日本語
          </button>
          <button
            className={`lang-btn ${language === "chinese" ? "active" : ""}`}
            onClick={() => onLanguageChange("chinese")}
          >
            🇨🇳 中文
          </button>
        </div>
      </div>

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

      <div className="sort-section">
        <h3>{t.sortBy}</h3>
        <div className="sort-buttons">
          <button
            className={`sort-btn ${sortBy === "Id" ? "active" : ""}`}
            onClick={() => onSortChange("Id")}
          >
            {t.id}{getSortIcon("Id")}
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
    </div>
  );
};

export default FilterBar;