import { useEraserPanelStore } from "store/panel/useEraserPanelStore";

export default function EraserPanel() {
  const { eraserSize, setEraserSize } = useEraserPanelStore();

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEraserSize(parseInt(event.target.value));
  };

  return (
    <>
      <label htmlFor="eraserSize">Eraser Size:</label>
      <input
        type="range"
        id="eraserSize"
        name="eraserSize"
        min="1"
        max="20"
        value={eraserSize}
        onChange={handleSizeChange}
      />
    </>
  );
}

