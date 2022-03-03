export function Person({ name, height, skin_color }) {
    return (
        <div style={{ margin: "2rem" }}>
            {name}
            <ul>
                <li>height: {height} cm</li>
                <li>skin: {skin_color}</li>
            </ul>
        </div>
    );
}
