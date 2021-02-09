import EditIcon from "../components/IconAnimations/EditIcon";
import GridIcon from "../components/IconAnimations/GridIcon";
import ArchiveIcon from "../components/IconAnimations/ArchiveIcon";
import SettingsIcon from "../components/IconAnimations/SettingsIcon";
import EducationIcon from "../components/IconAnimations/EducationIcon";
import ConnectionSignalIcon from "../components/IconAnimations/ConnectionSignalIcon";
import DownloadIcon from "../components/IconAnimations/DownloadIcon";
import ChartScatterIcon from "../components/IconAnimations/ChartScatterIcon";

// import LearnIcon from "../components/IconAnimations/LearnIcon";

let tileDetails = [
  {
    title: "Develop APIs and titles",
    info:
      "Edit, assemble, secure, and test APIs.  Package APIs using products for publishing to consumers",
    icon: EditIcon
  },
  {
    title: "Manage catalogs",
    info: "Manage active APIs and consumers",
    icon: GridIcon
  },
  {
    title: "Manage resources",
    info: "Configure user registries, OAuth providers, and TLS",
    icon: ArchiveIcon
  },
  {
    title: "Manage settings",
    info: "Edit settings for roles, notifications, and more",
    icon: SettingsIcon
  },
  {
    title: "Learn more",
    info: "Documentation and tutorials with step-by-step instructions",
    icon: EducationIcon
    // icon:learnIcon
  },
  {
    title: "Connect",
    info: "Find expert answers in the API Connect community forum",
    icon: ConnectionSignalIcon
  },
  {
    title: "Download toolkit",
    info: "Download toolkit and credentials for various platforms",
    icon: DownloadIcon
  },
  {
    title: "Analytics",
    info: "View and analyze API analytics data",
    icon: ChartScatterIcon
  }
];

export { tileDetails };