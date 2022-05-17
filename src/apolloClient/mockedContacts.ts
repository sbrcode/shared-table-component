import { LIST_CONTACTS } from "../api/gql/contactsQueries";

export const mockedContacts_1 = {
  request: {
    query: LIST_CONTACTS,
    variables: {
      page: 0,
      itemsPerPage: 3,
    },
  },
  result: {
    data: {
      contacts: {
        paginationInfo: {
          totalCount: 6,
        },
        items: [
          {
            id: "contact-1",
            firstName: "contact-firstName-1",
            lastName: "contact-lastName-1",
            email: "email1",
          },
          {
            id: "contact-2",
            firstName: "contact-firstName-2",
            lastName: "contact-lastName-2",
            email: "email2",
          },
          {
            id: "contact-3",
            firstName: "contact-firstName-3",
            lastName: "contact-lastName-3",
            email: "email3",
          },
        ],
      },
    },
  },
};

export const mockedContacts_2 = {
  request: {
    query: LIST_CONTACTS,
    variables: {
      page: 1,
      itemsPerPage: 3,
    },
  },
  result: {
    data: {
      contacts: {
        paginationInfo: {
          totalCount: 6,
        },
        items: [
          {
            id: "contact-4",
            firstName: "contact-firstName-4",
            lastName: "contact-lastName-4",
            email: "email4",
          },
          {
            id: "contact-5",
            firstName: "contact-firstName-5",
            lastName: "contact-lastName-5",
            email: "email5",
          },
          {
            id: "contact-6",
            firstName: "contact-firstName-6",
            lastName: "contact-lastName-6",
            email: "email6",
          },
        ],
      },
    },
  },
};

export const mockedContacts_3 = {
  request: {
    query: LIST_CONTACTS,
    variables: {
      page: 0,
      itemsPerPage: 5,
    },
  },
  result: {
    data: {
      contacts: {
        paginationInfo: {
          totalCount: 6,
        },
        items: [
          {
            id: "contact-1",
            firstName: "contact-firstName-1",
            lastName: "contact-lastName-1",
            email: "email1",
          },
          {
            id: "contact-2",
            firstName: "contact-firstName-2",
            lastName: "contact-lastName-2",
            email: "email2",
          },
          {
            id: "contact-3",
            firstName: "contact-firstName-3",
            lastName: "contact-lastName-3",
            email: "email3",
          },
          {
            id: "contact-4",
            firstName: "contact-firstName-4",
            lastName: "contact-lastName-4",
            email: "email4",
          },
          {
            id: "contact-5",
            firstName: "contact-firstName-5",
            lastName: "contact-lastName-5",
            email: "email5",
          },
        ],
      },
    },
  },
};

export const mockedContacts_4 = {
  request: {
    query: LIST_CONTACTS,
    variables: {
      page: 1,
      itemsPerPage: 5,
    },
  },
  result: {
    data: {
      contacts: {
        paginationInfo: {
          totalCount: 6,
        },
        items: [
          {
            id: "contact-6",
            firstName: "contact-firstName-6",
            lastName: "contact-lastName-6",
            email: "email6",
          },
        ],
      },
    },
  },
};
