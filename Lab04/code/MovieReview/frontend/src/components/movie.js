export default function Movie(props) {
  return <h2>Movie Detail - ID: {props.match.params.id}</h2>;
}