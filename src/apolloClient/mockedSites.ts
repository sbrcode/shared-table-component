import { LIST_SITES } from "../api/gql/sitesQueries";

export const mockedSites_1 = {
  request: {
    query: LIST_SITES,
    variables: {
      page: 0,
      itemsPerPage: 3,
    },
  },
  result: {
    data: {
      sites: {
        paginationInfo: {
          totalCount: 7,
        },
        items: [
          {
            id: "site-1",
            name: "site1",
            phone: "phone1",
            siret: "siret1",
          },
          {
            id: "site-2",
            name: "site2",
            phone: "phone2",
            siret: "siret2",
          },
          {
            id: "site-3",
            name: "site3",
            phone: "phone3",
            siret: "siret3",
          },
        ],
      },
    },
  },
};

export const mockedSites_2 = {
  request: {
    query: LIST_SITES,
    variables: {
      page: 1,
      itemsPerPage: 3,
    },
  },
  result: {
    data: {
      sites: {
        paginationInfo: {
          totalCount: 7,
        },
        items: [
          {
            id: "site-4",
            name: "site4",
            phone: "phone4",
            siret: "siret4",
          },
          {
            id: "site-5",
            name: "site5",
            phone: "phone5",
            siret: "siret5",
          },
          {
            id: "site-6",
            name: "site6",
            phone: "phone6",
            siret: "siret6",
          },
        ],
      },
    },
  },
};

export const mockedSites_3 = {
  request: {
    query: LIST_SITES,
    variables: {
      page: 2,
      itemsPerPage: 3,
    },
  },
  result: {
    data: {
      sites: {
        paginationInfo: {
          totalCount: 7,
        },
        items: [
          {
            id: "site-7",
            name: "site7",
            phone: "phone7",
            siret: "siret7",
          },
        ],
      },
    },
  },
};

export const mockedSites_4 = {
  request: {
    query: LIST_SITES,
    variables: {
      page: 0,
      itemsPerPage: 5,
    },
  },
  result: {
    data: {
      sites: {
        paginationInfo: {
          totalCount: 7,
        },
        items: [
          {
            id: "site-1",
            name: "site1",
            phone: "phone1",
            siret: "siret1",
          },
          {
            id: "site-2",
            name: "site2",
            phone: "phone2",
            siret: "siret2",
          },
          {
            id: "site-3",
            name: "site3",
            phone: "phone3",
            siret: "siret3",
          },
          {
            id: "site-4",
            name: "site4",
            phone: "phone4",
            siret: "siret4",
          },
          {
            id: "site-5",
            name: "site5",
            phone: "phone5",
            siret: "siret5",
          },
        ],
      },
    },
  },
};

export const mockedSites_5 = {
  request: {
    query: LIST_SITES,
    variables: {
      page: 1,
      itemsPerPage: 5,
    },
  },
  result: {
    data: {
      sites: {
        paginationInfo: {
          totalCount: 7,
        },
        items: [
          {
            id: "site-6",
            name: "site6",
            phone: "phone6",
            siret: "siret6",
          },
          {
            id: "site-7",
            name: "site7",
            phone: "phone7",
            siret: "siret7",
          },
        ],
      },
    },
  },
};
