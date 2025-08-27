import "../styles/button.css"

export default function Button({ children }: { children: React.ReactNode }) {
    return <button className="btn">{children}</button>;
  }
  