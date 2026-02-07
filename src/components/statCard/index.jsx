import "./index.css"

const StatCard = ({ pokemon }) => {

    return (
        <div className="poke-stats">
            <div className="stat">
                <div className="stat-header">
                    <span className="stat-label">HP</span>
                    <span className="stat-value">{pokemon.base.HP}</span>
                </div>
                <div className="stat-bar">
                    <div className="stat-bar-fill" style={{ width: `${(pokemon.base.HP / 160) * 100}%` }}></div>
                </div>
            </div>
            
            <div className="stat">
                <div className="stat-header">
                    <span className="stat-label">ATK</span>
                    <span className="stat-value">{pokemon.base.Attack}</span>
                </div>
                <div className="stat-bar">
                    <div className="stat-bar-fill" style={{ width: `${(pokemon.base.Attack / 160) * 100}%` }}></div>
                </div>
            </div>
            
            <div className="stat">
                <div className="stat-header">
                    <span className="stat-label">DEF</span>
                    <span className="stat-value">{pokemon.base.Defense}</span>
                </div>
                <div className="stat-bar">
                    <div className="stat-bar-fill" style={{ width: `${(pokemon.base.Defense / 160) * 100}%` }}></div>
                </div>
            </div>
            
            <div className="stat">
                <div className="stat-header">
                    <span className="stat-label">SPD</span>
                    <span className="stat-value">{pokemon.base.Speed}</span>
                </div>
                <div className="stat-bar">
                    <div className="stat-bar-fill" style={{ width: `${(pokemon.base.Speed / 160) * 100}%` }}></div>
                </div>
            </div>
        </div>
    );
}

export default StatCard;