export const metadata = {
    title: "Todo List - Day 2",
    description:
        "A simple todo list application built with search functionality",
};

export default function AnotherDemoLayout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to to-indigo-100">
            {/* <h1>INNER BRAND NAME</h1> */}
            {children}
        </div>
    );
}
