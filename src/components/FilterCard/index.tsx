import "./styles.css";

export default function FilterCard() {
  
  return (
    <div className="dsf-fc-container">
      <form className="dsf-fc-content">
        <div className="dsf-mt20">
          <input type="text" placeholder="Preço mínimo" />
        </div>
        <div className="dsf-mt20">
          <input type="text" placeholder="Preço máximo" />
        </div>
        <div className="dsf-mt20">
          <button>Filtrar</button>
        </div>
      </form>
    </div>
  );
}
