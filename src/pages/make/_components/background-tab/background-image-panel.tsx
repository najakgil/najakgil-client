import { useBackgroundTabStore } from 'store/tab/useBackgroundTabStore';

export default function BackgroundImagePanel() {
  const { setActiveBackgroundImage } = useBackgroundTabStore();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataURL = e.target?.result as string;
        setActiveBackgroundImage(imageDataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label htmlFor="backgroundImage">Background Image:</label>
      <input
        type="file"
        id="backgroundImage"
        name="backgroundImage"
        accept="image/*"
        onChange={handleFileSelect}
      />
    </div>
  );
}
