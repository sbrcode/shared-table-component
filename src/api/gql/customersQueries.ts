import {
  gql,
  OperationVariables,
  QueryHookOptions,
  useQuery,
} from "@apollo/client";

export const LIST_CUSTOMERS = gql`
  query getCustomersList($page: Int, $itemsPerPage: Int, $searchText: String) {
    customers(
      page: $page
      itemsPerPage: $itemsPerPage
      searchText: $searchText
    ) {
      items {
        id
        name
        address
        manager {
          id
          firstName
          lastName
        }
        nbSites
        nbInterventions
      }
      paginationInfo {
        totalCount
      }
    }
  }
`;

export const useListCustomers = (
  options?: QueryHookOptions<any, OperationVariables> | undefined
) => {
  const { loading, data } = useQuery(LIST_CUSTOMERS, options);

  return {
    loading,
    data: data?.customers?.items || null,
    totalCount: data?.customers?.paginationInfo?.totalCount || 0,
  };
};
