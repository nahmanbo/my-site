import type { PropsWithChildren } from "react";
import "../styles/profileContainer.css";

export default function ProfileContainer({children}:PropsWithChildren) {
  return (
    <div className="profile-container">
    {children}
    </div>
  );
}