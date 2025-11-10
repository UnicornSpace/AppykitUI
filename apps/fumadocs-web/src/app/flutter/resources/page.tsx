// Todo: Think

import ResourceGallery from "@/app/reactnative/resources/resource-gallery";
import { Resource } from "@/lib/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Webdev Resources - UnicornSpaceUI",
  description:
    "A free collection of web development resources, tools, and utilities to boost your development process. Simple to use and open-source.",
};

// TODO: Write a type for the resource object and make sure category a enum and isFavorite is used wisely and not overused

const page = () => {
  // const searchParams = use(props.searchParams);

  // if (searchParams.filter) {
  //   console.log(searchParams.filter);
  // }
  return (
    <div className="">
      <h1 className="text-2xl font-bold">Flutter</h1>
      <ResourceGallery data={resourcesData} />

      {/* 
      <div className="flex flex-wrap gap-x-2 gap-y-1 py-4">
        {resources.map((resource, i) => (
          <div key={i}>
            <Badge>{resource.category}</Badge>
          </div>
        ))}
      </div>
      <main className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {resources.map((resource, i) => (
          <ResourceCard
            key={i}
            category={resource.category}
            description={resource.description}
            title={resource.title}
            link={resource.link}
          />
        ))}
      </main> */}
    </div>
  );
};

export default page;

const resourcesData: Resource[] = [
  {
    category: "UI",
    description:
      "UI components for React Native + templates + informative blog",
    link: "https://appykit-ui.vercel.app/",
    title: "AppyKit UI",
    isFavorite: true,
  },
];
// const resourcesData: Resource[] = [
//   {
//     category: "UI",
//     description:
//       "UI components for React Native + templates + informative blog",
//     link: "https://appykit-ui.vercel.app/",
//     title: "AppyKit UI",
//     isFavorite: true,
//   },
//   {
//     category: "UI",
//     description: "Cross-Platform React Native UI Toolkit",
//     link: "https://reactnativeelements.com/",
//     title: "React Native Elements",
//     isFavorite: false,
//   },
//   {
//     category: "UI",
//     description: "Cross-Platform React Native UI Toolkit",
//     link: "https://reactnativepaper.com/",
//     title: "React Native Paper",
//     isFavorite: false,
//   },
//   {
//     category: "UI",
//     description: "Bringing shadcn/ui to React Native. Beautifully crafted components with Nativewind, open source, and almost as easy to use.",
//     link: "https://reactnativereusables.com/",
//     title: "React Native Reusables",
//     isFavorite: true,
//   },
//   {
//     category: "UI",
//     description: "Theming library for React Native & Web",
//     link: "https://tamagui.dev/",
//     title: "Tamagui",
//     isFavorite: false,
//   },
//   {
//     category: "UI",
//     description: "React & React Native Components Library & Patterns",
//     link: "https://gluestack.io/",
//     title: "Gluestack UI",
//     isFavorite: false,
//   },
//   {
//     category: "UI",
//     description: "Unstyled universal components with a focus on accessibility. They offer a unified API across iOS, Android, and web platforms.",
//     link: "https://rn-primitives.vercel.app/",
//     title: "RN Primitives",
//     isFavorite: false,
//   },
//   {
//     category: "UI",
//     description: "A React Native framework for creating stunning cross-platform mobile applications",
//     link: "https://akveo.github.io/react-native-ui-kitten/",
//     title: "UI Kitten",
//     isFavorite: false,
//   },
//   {
//     category: "UI",
//     description: "RNUI is a UI Toolset & Components Library for React Native",
//     link: "https://wix.github.io/react-native-ui-lib/",
//     title: "RNUI",
//     isFavorite: false,
//   },
//   {
//     category: "inspiration",
//     description: "Discover the best React Native app designs from around the world",
//     link: "https://dribbble.com/shots/following/mobile",
//     title: "Dribbble Mobile",
//     isFavorite: false,
//   },
//   {
//     category: "inspiration",
//     description: "Mobile design inspirations",
//     link: "https://mobbin.com/",
//     title: "Mobbin",
//     isFavorite: false,
//   },
//   {
//     category: "assets",
//     description: "Free vector icons in SVG, PNG, CSH and AI format for web and mobile projects",
//     link: "https://giphy.com/",
//     title: "GIPHY",
//     isFavorite: false,
//   },
//   {
//     category: "assets",
//     description: "The internet’s source for visuals.",
//     link: "https://unsplash.com/",
//     title: "Unsplash",
//     isFavorite: false,
//   },
//   {
//     category: "assets",
//     description: "The internet’s source for visuals.",
//     link: "https://www.vecteezy.com/free-vector",
//     title: "Vecteezy",
//     isFavorite: false,
//   },
//   {
//     category: "icons",
//     description: "Icons for  projects",
//     link: "https://icons8.com/icons",
//     title: "Icons 8 Icons",
//     isFavorite: false,
//   },
//   {
//     category: "icons",
//     description: "Icons for  projects",
//     link: "https://hugeicons.com/",
//     title: "Huge Icons",
//     isFavorite: false,
//   },
//   {
//     category: "assets",
//     description: "Illustrations for  projects",
//     link: "https://icons8.com/illustrations",
//     title: "Icons 8 Illustrations",
//     isFavorite: false,
//   },
//   {
//     category: "colors",
//     description: "Color tools and resources",
//     link: "https://www.colorhexa.com/",
//     title: "ColorHexa",
//     isFavorite: false,
//   },
//   {
//     category: "colors",
//     description: "Color tools and resources",
//     link: "https://www.colorhexa.com/",
//     title: "ColorHexa",
//     isFavorite: false,
//   },
//   {
//     category: "colors",
//     description: "Color tools and resources",
//     link: "https://www.materialpalette.com/",
//     title: "Material Palette",
//     isFavorite: false,
//   },
//   {
//     category: "ui-design",
//     description: "Wireframe and design tool",
//     link: "https://excalidraw.com/",
//     title: "Excalidraw",
//     isFavorite: false,
//   },
//   {
//     category: "ui-design",
//     description: "Wireframe and design tool",
//     link: "https://app.eraser.io/dashboard/all",
//     title: "Eraser",
//     isFavorite: false,
//   },
//   {
//     category: "icons",
//     description: "Icons for  projects",
//     link: "https://icons.expo.fyi/Index",
//     title: "Expo Icons",
//     isFavorite: false,
//   },
//   {
//     category: "icons",
//     description: "Icons for  projects",
//     link: "https://react-icons.github.io/react-icons/",
//     title: "React Icons",
//     isFavorite: false,
//   },
//   {
//     category: "icons",
//     description: "Icons for  projects",
//     link: "https://lucide.dev/icons/",
//     title: "Lucide Icons",
//     isFavorite: false,
//   },
//   {
//     category: "icons",
//     description: "Icons for  projects",
//     link: "https://fonts.google.com/icons",
//     title: "Google Material Icons",
//     isFavorite: false,
//   },
//   {
//     category: "icons",
//     description: "Icons for  projects",
//     link: "https://icons.expo.fyi/Index",
//     title: "Expo Icons",
//     isFavorite: false,
//   },

//   {
//     category: "other",
//     description: "A curated list of awesome React Native libraries and resources.",
//     link: "https://reactnative.directory/",
//     title: "React Native Directory",
//     isFavorite: false,
//   },
//   {
//     category: "other",
//     description: "A curated list of awesome React Native libraries and resources.",
//     link: "https://unscart.com/extension/color-picker/",
//     title: "Unscart Color Picker",
//     isFavorite: false,
//   },
//   {
//     category: "other",
//     description: "craft with AI today",
//     link: "https://21st.dev/home",
//     title: "21st.dev",
//     isFavorite: false,
//   },
//   {
//     category: "other",
//     description: "Craft Your own Logo",
//     link: "https://logofast.app/",
//     title: "Logo Fast",
//     isFavorite: false,
//   },
//   {
//     category: "Typography",
//     description: "Free fonts for commercial use",
//     link: "https://fonts.google.com/",
//     title: "Google Fonts",
//     isFavorite: false,
//   },
//   {
//     category: "Flutter",
//     description: "To Search, Discover and Share Flutter packages",
//     link: "https://pub.dev/",
//     title: "Pub Dev",
//     isFavorite: false,
//   },
//   {
//     category: "audio",
//     description: "Free sound effects and royalty free music for your projects",
//     link: "https://bluefireteam.github.io/audioplayers/",
//     title: "Audioplayers",
//     isFavorite: false,
//   },
//   {
//     category: "audio",
//     description: "Free sound effects and royalty free music for your projects",
//     link: "https://freesound.org/",
//     title: "Free sound",
//     isFavorite: false,
//   },

// ];
