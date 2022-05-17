import { LIST_CUSTOMERS } from "../../api/gql/customersQueries";
import GenericTable from "../../components/GenericTable";

const Customers = () => {
  const titles = [
    "Nom",
    "Adresse",
    "Responsable",
    "Nombre de sites",
    "Nombre d'interventions",
  ];

  return (
    <GenericTable query={"customers"} titles={titles} list={LIST_CUSTOMERS} />
  );
};

export default Customers;
