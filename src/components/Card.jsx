export default function Card(props) {
    return (
        <div
            class=" bg-white p-5"
            classList={{"rounded-md": props.rounded, "shadow-md": !props.flat}}
        >
            {props.children}
        </div>
    )
}