// /components/Controls.tsx
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

interface ControlsProps {
  fontSize: number;
  setFontSize: (size: number) => void;
  textAlign: "left" | "center" | "right";
  setTextAlign: (align: "left" | "center" | "right") => void;
  fontWeight: number;
  setFontWeight: (weight: number) => void;
}

const Controls: React.FC<ControlsProps> = ({
  fontSize,
  setFontSize,
  textAlign,
  setTextAlign,
  fontWeight,
  setFontWeight,
}) => {
  return (
    <div className="p-4">
      <Label>Font Size</Label>
      <Slider
        min={8}
        max={280}
        step={1}
        value={[fontSize]} // 수정된 부분
        onValueChange={(value) => setFontSize(value[0])} // 수정된 부분
      />

      <Label>Font Weight</Label>
      <Slider
        min={100}
        max={900}
        step={1}
        value={[fontWeight]} // 수정된 부분
        onValueChange={(value) => setFontWeight(value[0])} // 수정된 부분
      />

      <Label>Text Align</Label>
      <Select
        value={textAlign}
        onValueChange={(value: "left" | "center" | "right") =>
          setTextAlign(value)
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Select text align" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="left">Left</SelectItem>
          <SelectItem value="center">Center</SelectItem>
          <SelectItem value="right">Right</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Controls;
