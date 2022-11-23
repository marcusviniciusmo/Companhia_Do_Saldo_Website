import { BreadcrumbProps } from "../../types/Breadcrumb";
import { HGroup, Path, Title } from "./styles";

export function Breadcrumb(props: BreadcrumbProps) {
  return (
    <HGroup>
      <Path>{props.path}</Path>
      <Title>{props.title}</Title>
    </HGroup>
  );
};