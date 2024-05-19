// /components/FontPreview.tsx
import { useState, CSSProperties } from "react";

interface FontPreviewProps {
  text: string;
  fontSize: string;
  textAlign: CSSProperties["textAlign"];
  fontWeight: number;
  setText: (text: string) => void;
}

const FontPreview: React.FC<FontPreviewProps> = ({
  text,
  fontSize,
  textAlign,
  fontWeight,
  setText,
}) => {
  return (
    <div
      style={{
        fontFamily: "Pretendard Variable",
        fontSize,
        textAlign,
        fontWeight,
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          fontFamily: "Pretendard Variable",
          fontSize,
          textAlign,
          fontWeight,
        }}
      />
    </div>
  );
};

export default FontPreview;
