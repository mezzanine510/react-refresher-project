export default function TabButton({ children }) {
    function handleClick() {
        console.log('Hello wurld!');
    }
    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}