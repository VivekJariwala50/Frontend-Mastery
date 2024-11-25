import Helmet from "react-helmet";

export const AKHead = ({ title, children, description, content }) => {
  return (
    <Helmet>
      {/* title */}
      <title>{title} || Annakoot</title>
      {children}
    </Helmet>
  );
};
