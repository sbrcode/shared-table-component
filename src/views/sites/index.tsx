import { LIST_SITES } from "../../api/gql/sitesQueries";
import GenericTable from "../../components/GenericTable";

const Sites = () => {
  const titles = ["Nom", "Téléphone", "SIRET"];

  return <GenericTable query={"sites"} titles={titles} list={LIST_SITES} />;
};

export default Sites;
