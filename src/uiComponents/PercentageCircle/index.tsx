import classes from "./styles.module.scss";

export interface PercentageCircleProps {
  percentage: number;
  display?: number;
  className?: string;
}

export default function PercentageCircle({
  percentage,
  display,
  className,
}: PercentageCircleProps) {
  return (
    <div className="single-chart">
      <svg
        viewBox="0 0 36 36"
        className={`${className ?? ""} ${classes.circularChart}`}
      >
        <path
          className={classes.circleBg}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className={classes.circle}
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="22.35" className={classes.percentage}>
          {display ?? percentage}
        </text>
      </svg>
    </div>
  );
}
