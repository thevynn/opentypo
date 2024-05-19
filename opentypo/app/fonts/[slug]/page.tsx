// /app/fonts/[slug]/page.tsx
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import FontPreview from "@/components/font-preview";
import Controls from "@/components/font-controls";

const FontPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop(); // 경로의 마지막 부분을 슬러그로 사용

  const [fontSize, setFontSize] = useState(16);
  const [textAlign, setTextAlign] = useState<"left" | "center" | "right">(
    "left"
  );
  const [text, setText] = useState("Sample Text");
  const [fontWeight, setFontWeight] = useState(400);

  return (
    <div>
      <h1>{slug}</h1>
      <Controls
        fontSize={fontSize}
        setFontSize={setFontSize}
        textAlign={textAlign}
        setTextAlign={setTextAlign}
        fontWeight={fontWeight}
        setFontWeight={setFontWeight}
      />
      <FontPreview
        text={text}
        fontSize={`${fontSize}px`}
        textAlign={textAlign}
        fontWeight={fontWeight}
        setText={setText}
      />
    </div>
  );
};

export default FontPage;
