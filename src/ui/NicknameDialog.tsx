"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useUpsertPlayerMutation from "@/data/useUpsertPlayerMutation";
import useIdentityStore from "@/logic/stores/useIdentityStores";
import usePresenceStore from "@/logic/stores/usePresenceStore";
import { NicknameSchema, type NicknameForm } from "@/validation/nickname";

type NicknameDialogProps = {
  triggerClassName?: string;
};

export default function NicknameDialog({ triggerClassName }: NicknameDialogProps) {
  const { username, playerId, guestId, setUsername } = useIdentityStore();
  const upsert = useUpsertPlayerMutation();

  const [open, setOpen] = useState(false);

  const form = useForm<NicknameForm>({
    resolver: zodResolver(NicknameSchema),
    defaultValues: { username },
    mode: "onChange",
  });

  useEffect(() => {
    form.reset({ username });
  }, [username, form]);

  const onSubmit = (values: NicknameForm) => {
    const newName = values.username.trim();
    setUsername(newName);

    const upsertLive = usePresenceStore.getState().upsertPlayer;
    const clientId = sessionStorage.getItem("tr_client_id");

    if (clientId) {
      upsertLive(clientId, {
        clientId,
        playerId: playerId ?? guestId ?? "guest-temp",
        username: newName,
        progressText: "",
        wpm: 0,
        accuracy: 0,
        // eslint-disable-next-line react-hooks/purity
        updatedAt: Date.now(),
      });
    }

    upsert.mutate({
      kind: "guest",
      guest_id: guestId ?? null,
      user_id: null,
      username: newName,
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className={triggerClassName}>
          Change nickname
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose your nickname</DialogTitle>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Nickname</Label>
            <Input
              id="username"
              {...form.register("username")}
              autoFocus
              placeholder="e.g. speedy_fox"
            />
            {form.formState.errors.username && (
              <p className="text-sm text-red-600">{form.formState.errors.username.message}</p>
            )}
          </div>

          <DialogFooter className="gap-2">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!form.formState.isValid || upsert.isPending}>
              {upsert.isPending ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
