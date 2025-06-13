import { useLocalStorage } from "usehooks-ts";

export function useUserLocalStorage() {
  const [user, setUser, removeUser] = useLocalStorage("USER", "");

  function resetUser() {
    setUser("");
  }

  return {
    user,
    setUser,
    removeUser,
    resetUser,
  };
}
