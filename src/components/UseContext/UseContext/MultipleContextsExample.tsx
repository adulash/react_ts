import { createContext, useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
// User Context
type UserContextType = {
  username: string;
  role: string;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

// Language Context
type LanguageContextType = {
  language: string;
  greeting: string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider Component
function AppProvider({ children }: { children: React.ReactNode }) {
  const user = { username: "Ahmed", role: "admin" };
  const language = { language: "Arabic", greeting: "مرحباً" };

  return (
    <UserContext.Provider value={user}>
      <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>
    </UserContext.Provider>
  );
}

// Consumer Component
// Consumer Component
function UserProfile() {
  const userContext = useContext(UserContext);
  const languageContext = useContext(LanguageContext);
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || "dark";

  if (!userContext || !languageContext) {
    throw new Error("UserProfile must be used within AppProvider");
  }

  return (
    <div className={`p-4 rounded ${theme === "dark" ? "bg-neutral-700" : "bg-base-100"}`}>
      <p className={theme === "dark" ? "text-white" : "text-base-content"}>
        <strong>{languageContext.greeting}</strong>, {userContext.username}!
      </p>
      <p className={theme === "dark" ? "text-white" : "text-base-content"}>
        Role: {userContext.role}
      </p>
      <p className={theme === "dark" ? "text-white" : "text-base-content"}>
        Language: {languageContext.language}
      </p>
    </div>
  );
}
// Main Component
export default function MultipleContextsExample() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || "dark";
  return (
    <div
      className={`card shadow-xl p-6 ${theme === "dark" ? "bg-neutral-800" : "bg-base-300"} ${
        theme === "dark" ? "text-white" : "text-base-content"
      }`}>
      {" "}
      <h2 className="card-title text-2xl mb-4">Multiple Contexts Example</h2>{" "}
      <AppProvider>
        {" "}
        <UserProfile />{" "}
      </AppProvider>{" "}
    </div>
  );
}
