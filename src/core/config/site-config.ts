import { SiteConfig } from "@/core/types";

export const siteConfig: SiteConfig = {
  companyName: ["Pooah", "Zyndi", "Bloera"],
  firstname: "Remco",
  lastname: "Stoeten",
  title: "Remco Stoeten's All-in-One Dashboard",
  description: "Manage your personal projects with Remco Stoeten's All-in-One Dashboard.",
  username: "remcostoeten",
  name: "Remco Stoeten",
  repositoryName: "productivity-panel",
  github: "https://github.com/remcostoeten",
  deployUrl: "https://productivity.remcostoeten.com",
  repository: "https://github.com/remcostoeten/productivity-panel",
  linkedin: "https://www.linkedin.com/in/remco-stoeten/",
};


export const ADMIN_EMAILS: AdminEmails = {
  MAIN: process.env.ADMIN_EMAIL_MAIN,
  SECONDARY: process.env.ADMIN_EMAIL_SECONDARY,
};
