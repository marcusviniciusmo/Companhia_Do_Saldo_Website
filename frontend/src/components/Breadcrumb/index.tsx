import { BreadcrumbProps } from "../../types/Breadcrumb";

export function Breadcrumb(props: BreadcrumbProps) {
  return (
    <>
      <h1>BREADCRUMB Component</h1>
      <h3>{props.path}</h3>
      <h1>{props.title}</h1>
    </>
  );
};