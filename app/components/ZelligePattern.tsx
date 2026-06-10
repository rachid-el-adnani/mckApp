type Props = {
  className?: string;
  color?: string;
  opacity?: number;
};

export function ZelligePattern({
  className = "",
  color = "currentColor",
  opacity = 0.08,
}: Props) {
  return (
    <svg
      aria-hidden
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="zellige"
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke={color} strokeWidth="1.25" opacity={opacity}>
            <path d="M40 0 L80 40 L40 80 L0 40 Z" />
            <path d="M40 16 L64 40 L40 64 L16 40 Z" />
            <circle cx="40" cy="40" r="3" fill={color} stroke="none" />
            <path d="M0 0 L16 16 M64 0 L80 16 M0 80 L16 64 M80 80 L64 64" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#zellige)" />
    </svg>
  );
}
