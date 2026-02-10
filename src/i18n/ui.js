/**
 * Simple UI i18n helper (route language codes: french, english, japanese, chinese).
 * Add keys here as the UI grows.
 */

const UI = {
  french: {
    back: "← Retour",
    edit: "✏️ Modifier",
    delete: "🗑️ Supprimer",
    save: "💾 Sauvegarder",
    saving: "💾 Sauvegarde...",
    cancel: "✖️ Annuler",

    loadingPokemon: "⚡ Chargement des Pokémon...",
    loadingDetails: "Chargement des données du Pokémon...",
    notFound: "Pokémon introuvable.",

    infoTitle: "Informations du Pokémon",
    number: "Numéro",
    name: "Nom",
    types: "Type(s)",
    statsTitle: "Statistiques",
    helpEdit: '💡 Cliquez sur "Modifier" pour éditer ce Pokémon',

    editTitle: "Édition du Pokémon",

    createTitle: "✨ Créer un nouveau Pokémon",
    previewHint: "👁️ Prévisualisation en temps réel",
    newPokemonFallback: "Nouveau Pokémon",

    nameSection: "📝 Nom",
    namePlaceholder: "Nom du Pokémon",

    imageSection: "🖼️ Image",
    uploadImage: "📤 Uploader une image",
    or: "ou",
    imageUrlPlaceholder: "URL de l'image",

    crySection: "🔊 Cri du Pokémon (optionnel)",
    uploadAudio: "📤 Uploader un fichier audio",
    cryUrlPlaceholder: "URL du fichier audio (optionnel, un cri par défaut sera utilisé)",
    audioNotSupported: "Votre navigateur ne supporte pas l'élément audio.",

    typeSection: "🏷️ Types",
    removeTypeTitle: "Supprimer ce type",
    addType: "+ Ajouter un type",

    statsSection: "📊 Statistiques",

    createNamesTitle: "📝 Noms (toutes les langues obligatoires)",
    english: "🇬🇧 Anglais",
    frenchLabel: "🇫🇷 Français",
    japanese: "🇯🇵 Japonais",
    chinese: "🇨🇳 Chinois",
    requiredHint: "* Tous les champs sont obligatoires",


    invalidAudio: "Veuillez sélectionner un fichier audio valide",
    audioTooLarge: "Le fichier audio ne doit pas dépasser 5MB",
    requiredNameEnglish: "Le nom en anglais est obligatoire",
    requiredNameJapanese: "Le nom en japonais est obligatoire",
    requiredNameChinese: "Le nom en chinois est obligatoire",
    requiredNameFrench: "Le nom en français est obligatoire",
    requiredType: "Au moins un type est obligatoire",
    statRange: (stat) => `${stat} doit être entre 1 et 255`,
    createErrorDefault: "Erreur lors de la création",
    prevShort: "← Préc.",
    nextShort: "Suiv. →",
    ariaPrev: "Page précédente",
    ariaNext: "Page suivante",
    ariaPage: (p) => `Page ${p}`,

    // confirmations / errors
    irreversible: "Cette action est irréversible.",
    confirmDelete: (name) => `Êtes-vous sûr de vouloir supprimer ${name} ?\nCette action est irréversible.`,
    invalidImage: "Veuillez sélectionner une image valide",
    imageTooLarge: "L'image ne doit pas dépasser 5MB",
    saveErrorDefault: "Erreur lors de la sauvegarde",
    deleteErrorDefault: "Erreur lors de la suppression",
  },

  english: {
    back: "← Back",
    edit: "✏️ Edit",
    delete: "🗑️ Delete",
    save: "💾 Save",
    saving: "💾 Saving...",
    cancel: "✖️ Cancel",

    loadingPokemon: "⚡ Loading Pokémon...",
    loadingDetails: "Loading Pokémon data...",
    notFound: "Pokémon not found.",

    infoTitle: "Pokémon information",
    number: "Number",
    name: "Name",
    types: "Type(s)",
    statsTitle: "Stats",
    helpEdit: '💡 Click "Edit" to edit this Pokémon',

    editTitle: "Edit Pokémon",

    createTitle: "✨ Create a new Pokémon",
    previewHint: "👁️ Live preview",
    newPokemonFallback: "New Pokémon",

    nameSection: "📝 Name",
    namePlaceholder: "Pokémon name",

    imageSection: "🖼️ Image",
    uploadImage: "📤 Upload an image",
    or: "or",
    imageUrlPlaceholder: "Image URL",

    crySection: "🔊 Pokémon cry (optional)",
    uploadAudio: "📤 Upload an audio file",
    cryUrlPlaceholder: "Audio URL (optional, a default cry will be used)",
    audioNotSupported: "Your browser does not support the audio element.",

    typeSection: "🏷️ Types",
    removeTypeTitle: "Remove this type",
    addType: "+ Add a type",

    statsSection: "📊 Stats",

    createNamesTitle: "📝 Names (all languages required)",
    english: "🇬🇧 English",
    frenchLabel: "🇫🇷 French",
    japanese: "🇯🇵 Japanese",
    chinese: "🇨🇳 Chinese",
    requiredHint: "* All fields are required",


    invalidAudio: "Please select a valid audio file",
    audioTooLarge: "Audio file must not exceed 5MB",
    requiredNameEnglish: "English name is required",
    requiredNameJapanese: "Japanese name is required",
    requiredNameChinese: "Chinese name is required",
    requiredNameFrench: "French name is required",
    requiredType: "At least one type is required",
    statRange: (stat) => `${stat} must be between 1 and 255`,
    createErrorDefault: "Error while creating",
    prevShort: "← Prev",
    nextShort: "Next →",
    ariaPrev: "Previous page",
    ariaNext: "Next page",
    ariaPage: (p) => `Page ${p}`,

    irreversible: "This action cannot be undone.",
    confirmDelete: (name) => `Are you sure you want to delete ${name}?\nThis action cannot be undone.`,
    invalidImage: "Please select a valid image",
    imageTooLarge: "Image must not exceed 5MB",
    saveErrorDefault: "Error while saving",
    deleteErrorDefault: "Error while deleting",
  },

  japanese: {
    back: "← 戻る",
    edit: "✏️ 編集",
    delete: "🗑️ 削除",
    save: "💾 保存",
    saving: "💾 保存中...",
    cancel: "✖️ キャンセル",

    loadingPokemon: "⚡ ポケモンを読み込み中...",
    loadingDetails: "ポケモンのデータを読み込み中...",
    notFound: "ポケモンが見つかりません。",

    infoTitle: "ポケモン情報",
    number: "番号",
    name: "名前",
    types: "タイプ",
    statsTitle: "ステータス",
    helpEdit: '💡 "編集" をクリックして編集できます',

    editTitle: "ポケモンを編集",

    createTitle: "✨ 新しいポケモンを作成",
    previewHint: "👁️ リアルタイムプレビュー",
    newPokemonFallback: "新しいポケモン",

    nameSection: "📝 名前",
    namePlaceholder: "ポケモンの名前",

    imageSection: "🖼️ 画像",
    uploadImage: "📤 画像をアップロード",
    or: "または",
    imageUrlPlaceholder: "画像URL",

    crySection: "🔊 鳴き声（任意）",
    uploadAudio: "📤 音声ファイルをアップロード",
    cryUrlPlaceholder: "音声URL（任意、デフォルトの鳴き声を使用）",
    audioNotSupported: "お使いのブラウザはaudio要素に対応していません。",

    typeSection: "🏷️ タイプ",
    removeTypeTitle: "このタイプを削除",
    addType: "+ タイプを追加",

    statsSection: "📊 ステータス",

    createNamesTitle: "📝 名前（全言語必須）",
    english: "🇬🇧 英語",
    frenchLabel: "🇫🇷 フランス語",
    japanese: "🇯🇵 日本語",
    chinese: "🇨🇳 中国語",
    requiredHint: "* すべて必須です",


    invalidAudio: "有効な音声ファイルを選択してください",
    audioTooLarge: "音声ファイルは5MB以内にしてください",
    requiredNameEnglish: "英語名は必須です",
    requiredNameJapanese: "日本語名は必須です",
    requiredNameChinese: "中国語名は必須です",
    requiredNameFrench: "フランス語名は必須です",
    requiredType: "少なくとも1つのタイプが必要です",
    statRange: (stat) => `${stat} は1〜255の間である必要があります`,
    createErrorDefault: "作成中にエラーが発生しました",
    prevShort: "← 前へ",
    nextShort: "次へ →",
    ariaPrev: "前のページ",
    ariaNext: "次のページ",
    ariaPage: (p) => `ページ ${p}`,

    irreversible: "この操作は元に戻せません。",
    confirmDelete: (name) => `${name} を削除しますか？\nこの操作は元に戻せません。`,
    invalidImage: "有効な画像を選択してください",
    imageTooLarge: "画像は5MB以内にしてください",
    saveErrorDefault: "保存中にエラーが発生しました",
    deleteErrorDefault: "削除中にエラーが発生しました",
  },

  chinese: {
    back: "← 返回",
    edit: "✏️ 编辑",
    delete: "🗑️ 删除",
    save: "💾 保存",
    saving: "💾 保存中...",
    cancel: "✖️ 取消",

    loadingPokemon: "⚡ 正在加载宝可梦...",
    loadingDetails: "正在加载宝可梦数据...",
    notFound: "未找到宝可梦。",

    infoTitle: "宝可梦信息",
    number: "编号",
    name: "名称",
    types: "属性",
    statsTitle: "属性值",
    helpEdit: '💡 点击“编辑”来修改该宝可梦',

    editTitle: "编辑宝可梦",

    createTitle: "✨ 创建新宝可梦",
    previewHint: "👁️ 实时预览",
    newPokemonFallback: "新宝可梦",

    nameSection: "📝 名称",
    namePlaceholder: "宝可梦名称",

    imageSection: "🖼️ 图片",
    uploadImage: "📤 上传图片",
    or: "或",
    imageUrlPlaceholder: "图片URL",

    crySection: "🔊 宝可梦叫声（可选）",
    uploadAudio: "📤 上传音频文件",
    cryUrlPlaceholder: "音频URL（可选，将使用默认叫声）",
    audioNotSupported: "你的浏览器不支持 audio 元素。",

    typeSection: "🏷️ 属性",
    removeTypeTitle: "移除此属性",
    addType: "+ 添加属性",

    statsSection: "📊 属性值",

    createNamesTitle: "📝 名称（所有语言必填）",
    english: "🇬🇧 英文",
    frenchLabel: "🇫🇷 法文",
    japanese: "🇯🇵 日文",
    chinese: "🇨🇳 中文",
    requiredHint: "* 所有字段均为必填",


    invalidAudio: "请选择有效的音频文件",
    audioTooLarge: "音频文件大小不能超过5MB",
    requiredNameEnglish: "英文名称为必填",
    requiredNameJapanese: "日文名称为必填",
    requiredNameChinese: "中文名称为必填",
    requiredNameFrench: "法文名称为必填",
    requiredType: "至少需要一个属性",
    statRange: (stat) => `${stat} 必须在 1 到 255 之间`,
    createErrorDefault: "创建时出错",
    prevShort: "← 上一页",
    nextShort: "下一页 →",
    ariaPrev: "上一页",
    ariaNext: "下一页",
    ariaPage: (p) => `第 ${p} 页`,

    irreversible: "此操作无法撤销。",
    confirmDelete: (name) => `确定要删除 ${name} 吗？\n此操作无法撤销。`,
    invalidImage: "请选择有效的图片",
    imageTooLarge: "图片大小不能超过5MB",
    saveErrorDefault: "保存时出错",
    deleteErrorDefault: "删除时出错",
  },
};

export function getUi(lang) {
  return UI[lang] || UI.french;
}

export function t(lang, key, ...args) {
  const ui = getUi(lang);
  const v = ui[key];
  if (typeof v === "function") return v(...args);
  return v ?? UI.french[key] ?? key;
}
