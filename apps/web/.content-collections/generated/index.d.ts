import configuration from "../../content-collections.ts";
import { GetTypeByName } from "@content-collections/core";

export type Component = GetTypeByName<typeof configuration, "components">;
export declare const allComponents: Array<Component>;

export type Course = GetTypeByName<typeof configuration, "courses">;
export declare const allCourses: Array<Course>;

export {};
