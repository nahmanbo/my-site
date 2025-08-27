import "../styles/title.css";

interface TitleProps {
  text: string;
  emoji: string;
}

export default function Title({ text, emoji }: TitleProps) {
  return (
    <h1 className="main-title">
       {text} {emoji}
    </h1>
  );
}
