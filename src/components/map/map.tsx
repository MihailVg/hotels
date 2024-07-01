type MapProps = {
  className: string;
}

export default function Map({className} : MapProps) {
  return <section className={`${className} map`}></section>;
}
