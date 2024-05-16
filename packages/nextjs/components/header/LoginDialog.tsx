"use client";

import { useState } from "react";
import { useAccount, useAuthenticate } from "@alchemy/aa-alchemy/react";
import { InboxIcon } from "@heroicons/react/24/outline";

export const LOGIN_DIALOG_ID = "login-dialog";

export const LoginDialog = () => {
  const { authenticate, isPending: isAuthenticatingUser } = useAuthenticate();
  const { isLoadingAccount } = useAccount({
    type: "MultiOwnerModularAccount",
    skipCreate: true,
  });
  const [email, setEmail] = useState<string>("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    authenticate({ type: "email", email });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const sentEmail = isAuthenticatingUser || isLoadingAccount;
  return (
    <dialog id={LOGIN_DIALOG_ID} className="modal">
      {sentEmail ? (
        <div className="modal-box flex items-center">
          <InboxIcon className="h-8 w-8 fill-secondary mr-2" />
          <div> An email is on its way!</div>
        </div>
      ) : (
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login with your email</h3>
          <p className="py-1">Provide your email address below to login</p>
          <form method="dialog" className="flex flex-col items-start" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="you@example.org"
              className="input input-bordered w-full max-w-xs"
              onChange={handleEmailChange}
              value={email}
            />
            <button type="submit" className="btn btn-primary my-4">
              Send Email
            </button>
          </form>
        </div>
      )}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
