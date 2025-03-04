// redux/contacts/contactsSelectors.js
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectFilteredContacts = (state) => {
  const filter = state.filter.toLowerCase();
  return state.contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(filter),
  );
};
export const selectFilter = (state) => state.filter;
