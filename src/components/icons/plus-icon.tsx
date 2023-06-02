import { IconProps } from "./icon-prop-type";

export default function PlusIcon({ size, color }: IconProps) {
  return (
    <svg
      width={size ?? "12"}
      height={size ?? "12"}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5.25"
        width="1.5"
        height="12"
        rx="0.75"
        fill={color ?? "black"}
      />
      <rect
        x="12"
        y="5.25"
        width="1.5"
        height="12"
        rx="0.75"
        transform="rotate(90 12 5.25)"
        fill={color ?? "black"}
      />
    </svg>
  );
}
