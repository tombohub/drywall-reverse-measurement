interface InchesDisplayProps {
  measurement: number;
}

export default function InchesDisplay(props: InchesDisplayProps) {
  return <>{`${props.measurement.toString()}"`}</>;
}
