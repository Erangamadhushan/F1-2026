import { create } from "zustand";

interface SceneState {
  selectedTeam: string | null;
  setSelectedTeam: (team: string) => void;
}

export const useSceneStore = create<SceneState>((set) => ({
  selectedTeam: null,
  setSelectedTeam: (team) =>
    set({ selectedTeam: team }),
}));