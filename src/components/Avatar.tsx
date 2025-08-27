import "../styles/header.css";

interface AvatarProps {
  src: string;
  alt?: string;
}

export default function Avatar({ src, alt = "avatar" }: AvatarProps) {
  return <img className="header-avatar" src={src} alt={alt} />;
}
