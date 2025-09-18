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

export type Resource = {
  category:
    | "UI"
    | "Typography"
    | "colors"
    | "tools"
    | "inspiration"
    | "assets"
    | "other"
    | "icons"
    | "ui-design"

  description: string;
  link: string;
  title: string;
  isFavorite: boolean;
}
