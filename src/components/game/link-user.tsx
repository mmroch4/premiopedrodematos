"use client";

import { useLinkUserForm } from "@/hooks/use-link-user-form";
import { cn } from "@/utils/cn";
import { CheckIcon } from "lucide-react";

export function LinkUser() {
  const {
    register,
    onSubmit,
    dissociateUser,
    isAssociated,
    formState,
    isLoading,
    getFieldState,
  } = useLinkUserForm();

  const { isSubmitting } = formState;

  const fieldNameError = getFieldState("name").invalid && getFieldState("name").isDirty;
  const fieldPasswordError =
    getFieldState("password").invalid && getFieldState("password").isDirty;

  return (
    <div className="w-full px-6 pb-4">
      <div className="mx-auto mb-2 flex w-full max-w-screen-lg">
        <h2 className="text-lg font-bold">Associar utilizador</h2>
      </div>

      {isAssociated && !isLoading && (
        <div className="my-2 flex flex-1 items-center justify-start">
          <CheckIcon className="mr-2 size-4 flex-shrink-0 text-green-500" />
          <p>Utilizador associado!</p>
        </div>
      )}

      {!isLoading ? (
        <form
          onSubmit={onSubmit}
          className="mx-auto flex w-full max-w-screen-lg flex-wrap items-center justify-between gap-2"
        >
          <div className="flex flex-wrap items-start gap-2">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Nome"
                disabled={isSubmitting || isAssociated}
                {...register("name")}
                className={cn(
                  "rounded border bg-slate-50 px-3 py-2",
                  isAssociated
                    ? "border-green-400 bg-green-100 text-green-950"
                    : "",
                  fieldNameError ? "border-red-400 text-red-950" : "",
                )}
              />
              {fieldNameError && (
                <small className="font-medium text-red-700">
                  Nome inválido
                </small>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <input
                placeholder="Palavra-passe"
                type="text"
                disabled={isSubmitting || isAssociated}
                {...register("password")}
                className={cn(
                  "rounded border bg-slate-50 px-3 py-2",
                  isAssociated
                    ? "border-green-400 bg-green-100 text-green-950"
                    : "",
                  fieldPasswordError ? "border-red-400 text-red-950" : "",
                )}
              />
              {fieldPasswordError && (
                <small className="font-medium text-red-700">
                  Palavra-passe inválida
                </small>
              )}
            </div>
          </div>

          {isAssociated ? (
            <div>
              <button
                onClick={dissociateUser}
                className="cursor-pointer rounded bg-red-100 px-4 py-3 hover:bg-red-200"
              >
                Desassociar
              </button>
            </div>
          ) : (
            <div>
              <button
                type="submit"
                className={cn(
                  "cursor-pointer rounded bg-slate-200 px-4 py-3 hover:bg-slate-300",
                  isSubmitting ? "cursor-not-allowed opacity-50" : "",
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Associando..." : "Associar"}
              </button>
            </div>
          )}
        </form>
      ) : (
        <div className="mx-auto flex w-full max-w-screen-lg flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              placeholder="Carregando..."
              disabled
              className="rounded border bg-slate-50 px-3 py-2 opacity-50"
            />

            <input
              placeholder="Carregando..."
              type="text"
              disabled
              className="rounded border bg-slate-50 px-3 py-2 opacity-50"
            />
          </div>
          <div>
            <button
              disabled
              className="cursor-pointer rounded bg-slate-200 px-4 py-3 opacity-50 hover:bg-slate-300"
            >
              Carregando...
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
