export default defineEventHandler((event) => {
  deleteCookie(event, 'id');
  deleteCookie(event, 'auth');
  return 'Log out is successful';
});