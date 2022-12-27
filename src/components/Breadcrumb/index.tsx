import { Link } from "./styles";

interface BreadcrumbProps {
  link?: string;
  page?: string;
  pageTitle: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  link,
  page,
  pageTitle,
}) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <>
          {page && (
            <li className="breadcrumb-item">
              <Link href={link} data-testid="link-page">
                {page}
              </Link>
            </li>
          )}
        </>
        <li className="breadcrumb-item active text-white" aria-current="page">
          {pageTitle}
        </li>
      </ol>
    </nav>
  );
};
