
import { accordionCode } from "./accordion";
import { avatarCode } from "./avatar";
import { badgeCode } from "./badge";
import { buttonCode } from "./button";
import { cardCode } from "./card";
import { checkboxCode } from "./checkbox";
import { inputCode } from "./input";
import { modalCode } from "./modal";
import { selectCode } from "./select";
import { seperatorCode } from "./seperator";
import { skeletonCode } from "./skeleton";
import { switchCode } from "./switch";
import { tabsCode } from "./tabs";
import { textCode } from "./text";
import { textareaCode } from "./textarea";


export const componentsMap: Record<
  string,
  {
    filename: string;
    content: string;
    dependencies: string[];
  }
> = {
  avatar: {
    filename: "avatar.tsx",
    content: avatarCode,
    dependencies: ["@rn-primitives/avatar"],
  },
  accordion: {
    filename: "accordion.tsx",
    content: accordionCode,
    dependencies: ["@rn-primitives/accordion"],
  },
  button: {
    filename: "button.tsx",
    content: buttonCode,
    dependencies: [""],
  },
  badge: {
    filename: "badge.tsx",
    content: badgeCode,
    dependencies: ["@rn-primitives/slot"],
  },
  card: {
    filename: "card.tsx",
    content: cardCode,
    dependencies: [""],
  },
  checkbox: {
    filename: "checkbox.tsx",
    content: checkboxCode,
    dependencies: ["@rn-primitives/checkbox"],
  },
  input: {
    filename: "input.tsx",
    content: inputCode,
    dependencies: [""],
  },
  modal: {
    filename: "modal.tsx",
    content: modalCode,
    dependencies: ["@rn-primitives/dialog"],
  },
  switch: {
    filename: "switch.tsx",
    content: switchCode,
    dependencies: ["@rn-primitives/switch"],
  },
  select: {
    filename: "select.tsx",
    content: selectCode,
    dependencies: ["@rn-primitives/select"],
  },
  seperator: {
    filename: "seperator.tsx",
    content: seperatorCode,
    dependencies: ["@rn-primitives/seperator"],
  },
  skeleton: {
    filename: "skeleton.tsx",
    content: skeletonCode,
    dependencies: [""],
  },
  tabs: {
    filename: "tabs.tsx",
    content: tabsCode,
    dependencies: ["@rn-primitives/tabs"],
  },
  text: {
    filename: "text.tsx",
    content: textCode,
    dependencies: ["@rn-primitives/slot","@rn-primitives/types"],
  },
  textarea: {
    filename: "textarea.tsx",
    content: textareaCode,
    dependencies: [""],
  },
  

};
