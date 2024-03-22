import { useBackgroundTabStore } from 'store/tab/useBackgroundTabStore';

export default function BackgroundColorPanel() {
  const { activeBackgroundColor, setActiveBackgroundColor } = useBackgroundTabStore();

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveBackgroundColor(event.target.value);
  };
  return (
    <>
      <label htmlFor="brushColor">Background Color:</label>
      <input
        type="color"
        id="brushColor"
        name="brushColor"
        value={activeBackgroundColor}
        onChange={handleColorChange}
      />
    </>
  );
}
