import { useTextPanelStore } from 'store/panel/useTextPanelStore';

export default function TextPanel() {
  const {
    textContent,
    setTextContent,
    textColor,
    setTextColor,
    textSize,
    setTextSize,
    textWeight,
    setTextWeight,
  } = useTextPanelStore();

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(event.target.value);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextSize(parseInt(event.target.value));
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextContent(event.target.value);
  };

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextWeight(parseInt(event.target.value));
  };

  return (
    <div>
      <label htmlFor="textColor">Text Color:</label>
      <input
        type="color"
        id="textColor"
        name="textColor"
        value={textColor}
        onChange={handleColorChange}
      />
      <label htmlFor="textSize">Text Size:</label>
      <input
        type="range"
        id="textSize"
        name="textSize"
        min="1"
        max="100"
        value={textSize}
        onChange={handleSizeChange}
      />
      <label htmlFor="textWeight">Text Weight:</label>
      <input
        type="range"
        id="textWeight"
        name="textWeight"
        min="100"
        max="900"
        step="100"
        value={textWeight}
        onChange={handleWeightChange}
      />
      <label htmlFor="textContent">Text Content:</label>
      <input
        type="text"
        id="textContent"
        name="textContent"
        value={textContent}
        onChange={handleTextChange}
      />
      <button onClick={() => {}}>입력</button>
    </div>
  )
}
