import { createContext } from "react";
import { PersonalDetails } from "./types";

export const PersonalDetailsContext = createContext<PersonalDetails | undefined>(undefined);