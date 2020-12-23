import CatalogIcon from "../components/IconAnimations/CatalogIcon";
import ConnectIcon from "../components/IconAnimations/ConnectIcon";
import DevelopIcon from "../components/IconAnimations/DevelopIcon";
import DownloadIcon from "../components/IconAnimations/DownloadIcon";
// import LearnIcon from "../components/IconAnimations/LearnIcon";
import ResourcesIcon from "../components/IconAnimations/ResourcesIcon";
import SettingsIcon from "../components/IconAnimations/SettingsIcon";
import AnalyticsIcon from "../components/IconAnimations/AnalyticsIcon";
import EducationIcon from "../components/IconAnimations/EducationIcon";

let tileDetails = [
  {
    title: "Develop APIs and Titles",
    info:
      "Edit, assemble, secure, and test APIs.  Package APIs using products for publishing to consumers",
    icon: DevelopIcon
  },
  {
    title: "Manage Catalogs",
    info: "Manage active APIs and consumers",
    icon: CatalogIcon
  },
  {
    title: "Manage Resources",
    info: "Configure user registries, OAuth providers, and TLS",
    icon: ResourcesIcon
  },
  {
    title: "Manage Settings",
    info: "Edit settings for roles, notifications, and more",
    icon: SettingsIcon
  },
  {
    title: "Learn More",
    info: "Documentation and tutorials with step-by-step instructions",
    icon: EducationIcon
    // icon:learnIcon
  },
  {
    title: "Connect",
    info: "Find expert answers in the API Connect community forum",
    icon: ConnectIcon
  },
  {
    title: "Download Toolkit",
    info: "Download toolkit and credentials for various platforms",
    icon: DownloadIcon
  },
  {
    title: "Analytics",
    info: "View and analyze API analytics data",
    icon: AnalyticsIcon
  }
];

export { tileDetails };
