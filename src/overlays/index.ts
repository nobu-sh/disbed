import { FC } from "react";
import SavedOverlay from "./Saved";
import SettingsOverlay from "./Settings";

export const overlays: Record<string, FC> = {
  "settings": SettingsOverlay,
  "saved_embeds": SavedOverlay
}
