import "./App.css";
import Header from "./components/Header";
import HamburgerButton from "./components/HamburgerButton";
import Title from "./components/Title";
import Avatar from "./components/Avatar";
import ProfileCard from "./components/ProfileCard";
import ProfileContainer from "./components/ProfileContainer";
import FullscreenButton from "./components/FullscreenButton";
import firstDate from "./assets/image/firstDate.png";
import fourthDate from "./assets/image/fourthtDate.jpg";
import flowers from "./assets/image/PHOTO-2025-08-22-14-19-04.jpg"
import kisses from "./assets/image/IMG_C805BB33A4A4-1.jpeg"
import imgA from "./assets/image/IMG_8636.JPG";
import past from "./assets/image/IMG_AD096E1702AA-1.jpeg"
import whiteHeart from "./assets/image/white_heart.png"




const memories = [
  {
    avatar: firstDate,
    name: "הדייט הראשון",
    description: `זה התחיל במשלוח ברד “תמים” ובפעם הראשונה שהיא הגיעה בזמן,
המשיך לשעתיים סרט, גלש לשש שעות עם שועלים,
ובסוף מצאנו את עצמנו בתוך שמונה שעות של אהבה טהורה.`
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMqnKIYMKWKQTJ6gf_xPyersDzDclnwNIJVp0lw7bUzISPOLJzmPq98-COjhtXZ9c_Ro&usqp=CAU",
    name: "הדייט השני",
    description: `פיקניק שניצלים בירקון,
משחק שאלות לוהט,
זר פרחים מתוק,
שני אגואיסטים שמתים להתנשק,
וטראומה אחת ברכב שסגרה דייט בלתי נשכח.`
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkYEGMi8TuVWbwLlrWE3JbhcjTef003jFrxu4_dOYh81kEGIJfIY3i-qQihnqVtwxU8U&usqp=CAU",
    name: "הדייט השלישי",
    description: `אחרי סופ״ש של געגוע,
  שבת בבריכה בלעדיי 😒,
  נפגשנו על פיצה אליפות ״שאני הכנתי״,
  התכרבלנו מול האח הגדול,
  וסיימנו בלילה מתוק של שמירת נגיעה 🤣.`
  },
  
  {
    avatar: fourthDate, 
    name: "הדייט הרביעי",
    description: `פתחנו בערב סטנדאפ קורע של בן בן ברוך,
  המשכנו לאוכל במסעדה עם קינוחים שגמרו לנו על הבריאות,
  עברנו לסליחות מרגשות 🥹,
  וסיימנו במסאז' תמים שסגר לילה מושלם.`
  },
  {
    avatar: flowers, 
    name: "הפרחים שלי",
    description: `כל פעם שאיחרת לדייט – חיכה לך זר פרחים. תמיד הכי יפה שאני מוצא,
  ואפילו כשכמעט התבאסת שלא שלחתי… הם בסוף הגיעו לחבק את הלב.`
  },
  
  {
    avatar: kisses, 
    name: "הנשיקות שלך",
    description: `כל פעם שהתגעגעתי – חיכתה לי נשיקה שלך במכתב.
  תמיד מלאה ברגש, תמיד הכי מתוק שיש,
  ואפילו כשלא היית לידי – היא הצליחה לחבק את הלב.`
  },
  
  {
    avatar: past,
    name: "העבר שלנו",
    description: `העבר שלנו נכתב מהרגע שבו אמרת לי, ברקע כחול:
  “מי שיקבל אותי איך שאני, ומי שלא — לא.”
  כשאני עמדתי לוותר — את בחרת להישאר.
  הלב שלך החזיק בי, והלב שלי למד לאחוז בחזרה.`
  },
  
  {
    avatar: "https://onlife.co.il/wp-content/uploads/2019/04/family-1517192_1920.jpg",
    name: "העתיד שלנו",
    description: `יום אחד נשב עייפים על הספה,
  נביט בילדים רצים בבית,
  ונדע שכל הדרך הובילה אותנו בדיוק לכאן.
  ועד אז – יש לי עוד אלף חלומות להגשים איתך.`
  }
];

export default function App() {
  return (
    <>
      <Header>
        <Avatar src={imgA} />

        <Title leftText="נחמן" logo={whiteHeart} rightText="סיפור האהבה של רעות"/>
        <FullscreenButton />
        <HamburgerButton />
      </Header>

      <ProfileContainer>
        {memories.map((m, i) => (
          <ProfileCard key={i} avatar={m.avatar} name={m.name} description={m.description} />
        ))}
      </ProfileContainer>
    </>
  );
}
