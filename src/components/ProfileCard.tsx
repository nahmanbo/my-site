import "../styles/profileCard.css";
import Button from "./Button";

interface ProfileCardProps {
    avatar: string;
    name: string;
    description: string;
  }

export default function ProfileCard({ avatar, name, description }: ProfileCardProps) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={name} className="avatar" />
      <h2 className="name">{name}</h2>
      <p className="description">{description}</p>
      <Button>Follow</Button>
    </div>
  );
}
