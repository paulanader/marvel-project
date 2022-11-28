import { Title } from "./styles";

interface ISectionTitleProps {
  title: string;
}
export const SectionTitle: React.FC<ISectionTitleProps> = ({ title }) => {
  return <Title className="mt-3 fw-bold">{title}</Title>;
};
