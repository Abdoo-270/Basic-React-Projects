import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { rgb, weight } = color;
  const rgbToHex = (r, g, b) => {
    const hex = ((r << 16) | (g << 8) | b).toString(16);
    return "#" + "0".repeat(6 - hex.length) + hex;
  };
  const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy color to clipboard");
      }
    } else {
      toast.error("Clipboard access not available");
    }
  };
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </article>
  );
};
export default SingleColor;
