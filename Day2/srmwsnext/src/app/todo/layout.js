export const metadata = {
    title: "Todo List",
    description: "Stuff",
};

export default function TodoLayout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-tl from-blue-300 via-yellow-200 to-red-300">
            {children}
        </div>
    );
}
