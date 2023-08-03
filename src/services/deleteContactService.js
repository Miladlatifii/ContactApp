import http from "./httpService";

const deleteOneContact = (id) => {
  return http.delete(`/contacts/${id}`);
};
export default deleteOneContact;
