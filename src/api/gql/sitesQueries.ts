import {
  gql,
  OperationVariables,
  QueryHookOptions,
  useQuery,
} from "@apollo/client";

export const LIST_SITES = gql`
  query getSitesList($page: Int, $itemsPerPage: Int, $searchText: String) {
    sites(page: $page, itemsPerPage: $itemsPerPage, searchText: $searchText) {
      items {
        id
        name
        phone
        siret
      }
      paginationInfo {
        totalCount
      }
    }
  }
`;

export const useListSites = (
  options?: QueryHookOptions<any, OperationVariables> | undefined
) => {
  const { loading, data } = useQuery(LIST_SITES, options);

  return {
    loading,
    data: data?.sites?.items || null,
    totalCount: data?.sites?.paginationInfo?.totalCount || 0,
  };
};
