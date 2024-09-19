export function highlightText(text: string) {
  const parts = text.split(/\[highlight\](.*?)\[\/highlight\]/g);
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="highlight">
        {part}
      </span>
    ) : (
      part
    )
  );
}
