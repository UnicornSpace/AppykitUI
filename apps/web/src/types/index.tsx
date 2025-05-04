// type Params = Promise<{slug:} // TODO: make it dynamic
export type ParamsAsSlug = Promise<{ slug: string }>;

export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

/*
 const params = await props.params
  const searchParams = await props.searchParams
  const slug = params.slug
  const query = searchParams.query
*/

export interface Resource {
  category:
    | "UI"
    | "typography"
    | "resources"
    | "tools"
    | "inspiration"
    | "assets"
    | "other"
    | "react-native"
    | "icons";

  description: string;
  link: string;
  title: string;
  isFavorite: boolean;
}
