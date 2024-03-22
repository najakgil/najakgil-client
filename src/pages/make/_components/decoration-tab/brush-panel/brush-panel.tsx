import { useBrushPanelStore } from 'store/panel/useBrushPanelStore';

const BrushPanel = () => {
  const {brushColor, setBrushColor, brushSize, setBrushSize} = useBrushPanelStore();

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrushColor(event.target.value);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrushSize(parseInt(event.target.value));
  };

  return (
    <div>
      <label htmlFor="brushColor">Brush Color:</label>
      <input
        type="color"
        id="brushColor"
        name="brushColor"
        value={brushColor}
        onChange={handleColorChange}
      />
      <label htmlFor="brushSize">Brush Size:</label>
      <input
        type="range"
        id="brushSize"
        name="brushSize"
        min="1"
        max="20"
        value={brushSize}
        onChange={handleSizeChange}
      />
    </div>
  );
};

export default BrushPanel;
