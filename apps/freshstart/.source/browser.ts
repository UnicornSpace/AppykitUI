// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  blogs: create.doc("blogs", {"design-foundations.mdx": () => import("../content/blogs/design-foundations.mdx?collection=blogs"), "how-to-publish-app-in-playstore.mdx": () => import("../content/blogs/how-to-publish-app-in-playstore.mdx?collection=blogs"), "how-to-run-flutter-apps-on-physicalDevice.mdx": () => import("../content/blogs/how-to-run-flutter-apps-on-physicalDevice.mdx?collection=blogs"), "how-to-set-app-icon-in-flutter.mdx": () => import("../content/blogs/how-to-set-app-icon-in-flutter.mdx?collection=blogs"), "how-to-use-custom-fonts-in-expo-with-nativewind.mdx": () => import("../content/blogs/how-to-use-custom-fonts-in-expo-with-nativewind.mdx?collection=blogs"), "programming-foundations.mdx": () => import("../content/blogs/programming-foundations.mdx?collection=blogs"), "react-native-errors.mdx": () => import("../content/blogs/react-native-errors.mdx?collection=blogs"), "rn-to-flutter.mdx": () => import("../content/blogs/rn-to-flutter.mdx?collection=blogs"), "what-is-bad-in-reactnative.mdx": () => import("../content/blogs/what-is-bad-in-reactnative.mdx?collection=blogs"), "work-with-Assests-in-flutter.mdx": () => import("../content/blogs/work-with-Assests-in-flutter.mdx?collection=blogs"), }),
};
export default browserCollections;