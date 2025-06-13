import { verifyBadWords } from "@/utils/verify-bad-words";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useLinkUserMutation } from "./use-link-user-mutation";
import { useUserDetails } from "./use-user-details";
import { useUserLocalStorage } from "./use-user-local-storage";

type FormValues = {
  name: string;
  password: string;
};

const formSchema = z.object({
  name: z
    .string()
    .toUpperCase()
    .min(1)
    .max(64)
    .refine((n) => !verifyBadWords(n)),
  password: z.string().min(1).max(64),
});

const defaultFormValues: FormValues = {
  name: "",
  password: "",
};

export function useLinkUserForm() {
  const queryClient = useQueryClient();

  const [isEnabledToFetchUserDetails, setIsEnabledToFetchUserDetails] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState,
    setError,
    getFieldState,
    reset: resetForm,
  } = useForm<FormValues>({
    reValidateMode: "onSubmit",
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues,
  });

  const { user, setUser, resetUser } = useUserLocalStorage();

  const { data: userDetails, isLoading } = useUserDetails(
    isEnabledToFetchUserDetails,
    user,
  );

  useEffect(() => {
    if (!!user) {
      setIsEnabledToFetchUserDetails(true);
    }
  }, [user]);

  useEffect(() => {
    if (!!user && isEnabledToFetchUserDetails && !!userDetails) {
      setValue("name", userDetails.name);
      setValue("password", userDetails.password);
      setIsEnabledToFetchUserDetails(false);
    }
  }, [user, isEnabledToFetchUserDetails, userDetails, setValue]);

  const {
    mutateAsync: linkUser,
    data: linkResult,
    reset: resetMutation,
  } = useLinkUserMutation();

  function dissociateUser() {
    setIsEnabledToFetchUserDetails(false);
    resetUser();
    resetForm();
    resetMutation();
    queryClient.removeQueries({ queryKey: ["USER_DETAILS"] });

    toast.success("Utilizador desassociado com sucesso!", {
      id: "user-linking",
    });
  }

  const onSubmit = handleSubmit(async (data) => {
    const result = await linkUser({ name: data.name, password: data.password });

    if (result.isOk) {
      setUser(result.token);

      toast.success("Utilizador associado com sucesso!", {
        id: "user-linking",
      });
    } else {
      const err = result!.error as string;

      if (err === "UNKNOWN") {
        setError("root.serverError", { message: "Erro desconhecido" });

        toast.error("Erro inesperado!", {
          description:
            "Não foi possível associar um utilizador. Entre em contato com o suporte.",
          id: "user-linking",
        });
      } else {
        setError("password", {
          message: "Usuário já existe. PALAVRA-PASSE INCORRETA",
        });

        toast.error("Palavra-passe incorreta!", {
          description: "Este utilizador já existe. PALAVRA-PASSE INCORRETA!",
          id: "user-linking",
        });
      }
    }
  });

  return {
    register,
    onSubmit,
    formState,
    linkResult,
    dissociateUser,
    isAssociated: !!user,
    resetForm,
    isLoading,
    getFieldState,
  };
}
