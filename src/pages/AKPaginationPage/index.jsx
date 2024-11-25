import { AKBasicCard, AKPagination, AKHead } from "@components";
import { AKClsx } from "@utils";
import styles from "./AKPaginationPage.module.css";

const AKPaginationPage = () => {
  const handlePageNumberChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <span className="page-btn prev-button">Previous</span>;
    }
    if (type === "next") {
      return <span className="page-btn next-button">Next</span>;
    }
    return originalElement;
  };

  return (
    <>
      <AKHead title="Pagination" />
      <div className={AKClsx(styles.AKPaginationPageCardWrapper, "grid")}>
        <AKBasicCard
          cardTitle="Basic Pagination:"
          customCardBodyClass="y-visible x-visible"
        >
          <AKPagination
            totalSize={50}
            handleChange={() => console.log("Basic Pagination")}
          />
        </AKBasicCard>
        <AKBasicCard
          cardTitle="Simple Pagination:"
          customCardBodyClass="y-visible x-visible"
        >
          <AKPagination
            totalSize={50}
            simple
            handleChange={() => console.log("Simple Pagination")}
          />
        </AKBasicCard>
        <AKBasicCard
          cardTitle="Small Pagination:"
          customCardBodyClass="y-visible x-visible"
        >
          <AKPagination
            totalSize={500}
            size="small"
            handleChange={() => console.log("Small Pagination")}
          />
        </AKBasicCard>
        <AKBasicCard
          cardTitle="Pagination With Page Jumper:"
          customCardBodyClass="y-visible x-visible"
        >
          <AKPagination
            totalSize={500}
            showQuickJumper
            handleChange={handlePageNumberChange}
          />
        </AKBasicCard>
        <AKBasicCard
          cardTitle="Pagination With Next & Prev Button:"
          customCardBodyClass="y-visible x-visible"
        >
          <AKPagination
            totalSize={50}
            itemRender={itemRender}
            handleChange={() =>
              console.log("Pagination With Next & Prev Button")
            }
          />
        </AKBasicCard>
      </div>
    </>
  );
};

export default AKPaginationPage;
