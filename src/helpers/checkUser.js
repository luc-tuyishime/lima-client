module.exports = () => {
   try {
      const profile = JSON.parse(localStorage.user || '{}');
      const isAuth = !!(localStorage.tokenUser && Object.keys(profile).length);

      return {
         profile,
         isAuth,
      };
   } catch (error) {
      return {
         profile: {},
         isAuth: false,
      };
   }
};