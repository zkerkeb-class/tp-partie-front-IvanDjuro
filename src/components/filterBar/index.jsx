import "./index.css";
import LangOption from "../langOption";
import FilterOption from "../filterOption";
import SortOption from "../sortOption";
import { useNavigate } from "react-router";

    const TRANSLATIONS = {
        french: {
            language: "🌍 Langue",
            create: "➕ Créer un Pokémon",
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
            Grass: "🌿 Plante",
            Fire: "🔥 Feu",
            Water: "💧 Eau",
            Poison: "☠️ Poison",
            Electric: "⚡ Électrik",
            Normal: "⚪ Normal",
            Bug: "🐛 Insecte",
            Flying: "🕊️ Vol",
            Fighting: "🥊 Combat",
            Psychic: "🔮 Psy",
            Rock: "🪨 Roche",
            Ground: "⛰️ Sol",
            Ice: "❄️ Glace",
            Dragon: "🐉 Dragon",
            Ghost: "👻 Spectre",
            Dark: "🌑 Ténèbres",
            Steel: "⚙️ Acier",
            Fairy: "🧚 Fée"
            }
        },
        english: {
            language: "🌍 Language",
            create: "➕ Create Pokémon",
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
            Grass: "🌿 Grass",
            Fire: "🔥 Fire",
            Water: "💧 Water",
            Poison: "☠️ Poison",
            Electric: "⚡ Electric",
            Normal: "⚪ Normal",
            Bug: "🐛 Bug",
            Flying: "🕊️ Flying",
            Fighting: "🥊 Fighting",
            Psychic: "🔮 Psychic",
            Rock: "🪨 Rock",
            Ground: "⛰️ Ground",
            Ice: "❄️ Ice",
            Dragon: "🐉 Dragon",
            Ghost: "👻 Ghost",
            Dark: "🌑 Dark",
            Steel: "⚙️ Steel",
            Fairy: "🧚 Fairy"
            }
        },
        japanese: {
            language: "🌍 言語",
            create: "➕ ポケモンを作成",
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
            Grass: "🌿 くさ",
            Fire: "🔥 ほのお",
            Water: "💧 みず",
            Poison: "☠️ どく",
            Electric: "⚡ でんき",
            Normal: "⚪ ノーマル",
            Bug: "🐛 むし",
            Flying: "🕊️ ひこう",
            Fighting: "🥊 かくとう",
            Psychic: "🔮 エスパー",
            Rock: "🪨 いわ",
            Ground: "⛰️ じめん",
            Ice: "❄️ こおり",
            Dragon: "🐉 ドラゴン",
            Ghost: "👻 ゴースト",
            Dark: "🌑 あく",
            Steel: "⚙️ はがね",
            Fairy: "🧚 フェアリー"
            }
        },
        chinese: {
            language: "🌍 语言",
            create: "➕ 创建宝可梦",
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
            Grass: "🌿 草",
            Fire: "🔥 火",
            Water: "💧 水",
            Poison: "☠️ 毒",
            Electric: "⚡ 电",
            Normal: "⚪ 一般",
            Bug: "🐛 虫",
            Flying: "🕊️ 飞行",
            Fighting: "🥊 格斗",
            Psychic: "🔮 超能力",
            Rock: "🪨 岩石",
            Ground: "⛰️ 地面",
            Ice: "❄️ 冰",
            Dragon: "🐉 龙",
            Ghost: "👻 幽灵",
            Dark: "🌑 恶",
            Steel: "⚙️ 钢",
            Fairy: "🧚 妖精"
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

    const navigate = useNavigate();

    const t = TRANSLATIONS[language] || TRANSLATIONS.french;

    return (
        <div className="filter-bar">
            <h3>{t.language}</h3>
        
            <LangOption language={language} onLanguageChange={onLanguageChange} />

            <button
                type="button"
                className="create-btn"
                onClick={() => navigate(`/pokemons/${language}/create`)}
            >
                {t.create}
            </button>

            <FilterOption filters={filters} onFilterChange={onFilterChange} onApplyFilters={onApplyFilters} t={t} />

            <SortOption sortBy={sortBy} sortOrder={sortOrder} onSortChange={onSortChange} t={t} />

      </div>
    );
};

export default FilterBar;