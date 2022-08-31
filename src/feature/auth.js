import req from "../req/req";

const authentication = (authType, payload) => {
  const authOptions = {
    login: async () => {
      try {
        const response = await req.post("login", payload);
        return response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
  return authOptions[authType];
};

export default authentication;
