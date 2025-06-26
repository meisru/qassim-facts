const facts = [
    "📍 Al-Qassim is often called the 'food basket of Saudi Arabia'.",
    "🌴 It's famous for producing some of the best dates in the world.",
    "🐪 The Buraidah Date Festival is one of the biggest date festivals globally.",
    "🕌 Al-Qassim has a unique blend of modern life and old Najdi architecture.",
    "🚴‍♂️ It's also known for hosting the Saudi Tour cycling race.",
    "👨‍🌾 Its people are known for generosity and strong cultural pride."
  ]

function app() {
    return (
    <div className="main-container">
        <div className="img-container">
            <img src="/qassim-logo.svg" alt="Al-Qassim" />
        </div>
        <div className="container">
            <h1>Fun Facts about Al-Qassim!</h1>
            <ul>
                {facts.map((fact, index) => (
                <li key={index} style={{ '--i': index }}>{fact}</li>
                ))}
            </ul>
        </div>
    </div>
    )
}

export default app;