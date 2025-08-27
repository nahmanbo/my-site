import "../styles/title.css";

interface TitleProps {
  leftText: string;
  rightText: string;
  logo: string;
}

export default function Title({ leftText, rightText, logo }: TitleProps) {
  return (
    <h1 className="main-title">
      <span className="title-left">{leftText}</span>
      <img src={logo} alt="logo" className="title-logo" />
      <span className="title-right">{rightText}</span>
    </h1>
  );
}
