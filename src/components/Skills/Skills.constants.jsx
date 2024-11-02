import reactIcon from "../../assets/images/skills/react.png";
import vueIcon from "../../assets/images/skills/vuejs.png";
import angularIcon from "../../assets/images/skills/angularjs.png";
import nodeIcon from "../../assets/images/skills/nodejs.png";
import htmlIcon from "../../assets/images/skills/html.png";
import cssIcon from "../../assets/images/skills/css.png";
import bootstrapIcon from "../../assets/images/skills/bootstrap.png";
import dotnetIcon from "../../assets/images/skills/dotnet.png";
import sqlIcon from "../../assets/images/skills/db.png";
import jsIcon from "../../assets/images/skills/js.png";
import tsIcon from "../../assets/images/skills/typescript.png";
import csharpIcon from "../../assets/images/skills/csharp.png";
import androidIcon from "../../assets/images/skills/android.png";
import flutterIcon from "../../assets/images/skills/flutter.png";

import psIcon from "../../assets/images/skills/ps.png";
import figmaIcon from "../../assets/images/skills/figma.png";
import xdIcon from "../../assets/images/skills/xd.png";

export const skillCat = {
  web: {
    categoryName: "Web Dev",
    percentage: 50,
    skillList: [
      { name: "JavaScript", xp: "11 YRS", icon: jsIcon },
      { name: "HTML", xp: "11 YRS", icon: htmlIcon },
      { name: "CSS", xp: "11 YRS", icon: cssIcon },
      { name: "TypeScript", xp: "8 YRS", icon: tsIcon },
      { name: "Bootstrap", xp: "5 YRS", icon: bootstrapIcon },
      { name: "React.js", xp: "8 YRS", icon: reactIcon },
      { name: "Vue.js", xp: "5 YRS", icon: vueIcon },
      { name: "Angular.js", xp: "5 YRS", icon: angularIcon },
      { name: "Node.js", xp: "8 YRS", icon: nodeIcon },
      { name: "SQL", xp: "5 YRS", icon: sqlIcon },
      { name: "C#", xp: "3 YRS", icon: csharpIcon },
      { name: ".net", xp: "2 YRS", icon: dotnetIcon },
    ],
  },
  game: {
    categoryName: "Mobile Dev",
    percentage: 40,
    skillList: [
      { name: "React Native", xp: "6 YRS", icon: reactIcon },
      { name: "Google Flutter", xp: "3 YRS", icon: flutterIcon },
      { name: "Android", xp: "5 YRS", icon: androidIcon },
    ],
  },
  design: {
    categoryName: "Design",
    percentage: 10,
    skillList: [
      { name: "Photoshop", xp: "13 YRS", icon: psIcon },
      { name: "Figma", xp: "3 YRS", icon: figmaIcon },
      { name: "Adobe XD", xp: "3 YRS", icon: xdIcon },
    ],
  },
  soft: {
    categoryName: ["Creative", "Collabrative", "Patient", "Enthusiastic", "Innovative"],
    percentage: 100,
  },
};
