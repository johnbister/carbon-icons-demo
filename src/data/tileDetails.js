import Edit32 from "@carbon/icons-vue/lib/edit/32";
import Grid32 from "@carbon/icons-vue/lib/grid/32";
import Archive32 from "@carbon/icons-vue/lib/archive/32";
import Settings32 from "@carbon/icons-vue/lib/settings/32";
import Education32 from "@carbon/icons-vue/lib/education/32";
import ConnectionSignal32 from "@carbon/icons-vue/lib/connection-signal/32";
import Download32 from "@carbon/icons-vue/lib/download/32";
import ChartScatter32 from "@carbon/icons-vue/lib/chart--scatter/32";

let tileDetails = [
  {
    title: "Develop APIs and titles",
    info:
      "Edit, assemble, secure, and test APIs.  Package APIs using products for publishing to consumers",
    icon: Edit32
  },
  {
    title: "Manage catalogs",
    info: "Manage active APIs and consumers",
    icon: Grid32
  },
  {
    title: "Manage resources",
    info: "Configure user registries, OAuth providers, and TLS",
    icon: Archive32
  },
  {
    title: "Manage settings",
    info: "Edit settings for roles, notifications, and more",
    icon: Settings32
  },
  {
    title: "Learn more",
    info: "Documentation and tutorials with step-by-step instructions",
    icon: Education32
  },
  {
    title: "Connect",
    info: "Find expert answers in the API Connect community forum",
    icon: ConnectionSignal32
  },
  {
    title: "Download toolkit",
    info: "Download toolkit and credentials for various platforms",
    icon: Download32
  },
  {
    title: "Analytics",
    info: "View and analyze API analytics data",
    icon: ChartScatter32
  }
];

export { tileDetails };
