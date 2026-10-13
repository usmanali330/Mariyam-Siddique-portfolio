import * as React from "react";
import type { IconBaseProps } from "react-icons";
import {
  LuArrowLeft,
  LuArrowRight,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuChevronUp,
  LuCircle,
  LuGripVertical,
  LuPanelLeft,
  LuSearch,
  LuX,
  LuEllipsis,
} from "react-icons/lu";

export type LucideProps = IconBaseProps;

export const ArrowLeft = LuArrowLeft;
export const ArrowRight = LuArrowRight;
export const Check = LuCheck;
export const ChevronDown = LuChevronDown;
export const ChevronLeft = LuChevronLeft;
export const ChevronRight = LuChevronRight;
export const ChevronUp = LuChevronUp;
export const Circle = LuCircle;
export const GripVertical = LuGripVertical;
export const MoreHorizontal = LuEllipsis;
export const PanelLeft = LuPanelLeft;
export const Search = LuSearch;
export const X = LuX;

export const Dot = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function Dot(props, ref) {
  return (
    <svg ref={ref} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
});
