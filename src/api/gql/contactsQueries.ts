import {
  gql,
  OperationVariables,
  QueryHookOptions,
  useQuery,
} from "@apollo/client";

export const LIST_CONTACTS = gql`
  query getContactsList($page: Int, $itemsPerPage: Int, $searchText: String) {
    contacts(
      page: $page
      itemsPerPage: $itemsPerPage
      searchText: $searchText
    ) {
      items {
        id
        firstName
        lastName
        email
      }
      paginationInfo {
        totalCount
      }
    }
  }
`;

export const useListContacts = (
  options?: QueryHookOptions<any, OperationVariables> | undefined
) => {
  const { loading, data } = useQuery(LIST_CONTACTS, options);

  return {
    loading,
    data: data?.contacts?.items || null,
    totalCount: data?.contacts?.paginationInfo?.totalCount || 0,
  };
};
