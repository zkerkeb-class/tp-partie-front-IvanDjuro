import "./index.css";

const LangOption = ({ language, onLanguageChange }) => {

  
    return (
      
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
    );
}

export default LangOption;