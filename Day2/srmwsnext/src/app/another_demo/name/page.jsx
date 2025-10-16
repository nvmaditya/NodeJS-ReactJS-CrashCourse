export default function Page({ searchParams }) {
    const name = searchParams.name || "no name provided";
    return (
        <div>
            <h3>Name Display</h3>
            <p>Hello, {name}!</p>
        </div>
    );
}
