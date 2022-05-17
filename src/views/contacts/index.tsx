import { LIST_CONTACTS } from "../../api/gql/contactsQueries";
import GenericTable from "../../components/GenericTable";

const Contacts = () => {
  const titles = ["Prénom", "Nom", "Email"];

  return (
    <GenericTable query={"contacts"} titles={titles} list={LIST_CONTACTS} />
  );
};

export default Contacts;
