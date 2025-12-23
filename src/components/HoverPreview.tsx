import { useState, useRef } from "react";

type Props = {
  content: string;
  title?: string;
};

const HoverPreview = ({ content, title }: Props) => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={containerRef}
    >
      {/** children will be the card anchor in parent; the preview panel is positioned absolute */}
      {visible && (
        <div
          role="region"
          aria-label={title ? `${title} preview` : "article preview"}
          className="absolute z-50 top-full left-0 mt-3 w-[560px] max-h-[420px] overflow-auto p-4 rounded-lg bg-background border border-border shadow-lg text-sm"
        >
          {title && <h4 className="font-semibold text-lg mb-2">{title}</h4>}
          <div className="prose prose-sm max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </div>
  );
};

export default HoverPreview;