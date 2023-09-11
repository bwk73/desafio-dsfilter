/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./styles.css";

type Props = {
  onFilter: Function;
}

type FormData = {
  min?: number;
  max?: number;
}

export default function FilterCard({onFilter} : Props) {

  const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({...formData, [name]: value});
  }
  
  function handleSubmit(event: any) {
    event.preventDefault();
    const min = formData.min || 0;
    const max = formData.max || Number.MAX_VALUE;
    onFilter(min, max);
  }

  return (
    <div className="dsf-fc-container">
      <form onSubmit={handleSubmit} className="dsf-fc-content">
        <div className="dsf-mt20">
          <input 
            name="min"
            value={formData.min || ""}
            type="text" 
            placeholder="Preço mínimo" 
            onChange={handleInputChange}
          />
        </div>
        <div className="dsf-mt20">
          <input
            name="max" 
            value={formData.max || ""}
            type="text" 
            placeholder="Preço máximo" 
            onChange={handleInputChange}
          />
        </div>
        <div className="dsf-mt20">
          <button type="submit" onClick={handleSubmit}>Filtrar</button>
        </div>
      </form>
    </div>
  );
}
