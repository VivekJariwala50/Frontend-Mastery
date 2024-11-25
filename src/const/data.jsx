import { Link } from "react-router-dom";

// Components
import AKInput from "@components/AKForms/AKFormControls/AKInputControls/AKInput";
import AKListIcon from "@components/AKUIKits/AKList/AKListIcon";
import AKTags from "@components/AKUIKits/AKTagPills/AKTags";
import AKAvatar from "@components/AKUIKits/AKAvatar";
import AKButton from "@components/AKButton";
import AKRating from "@components/AKBonusUI/AKRating";

// Icons
import { svgIcons } from "./svgIcons";

// Import Images
import {
  // Avatar
  AvatarOne,
  AvatarTwo,
  AvatarThree,
  AvatarFour,
  AvatarFive,
  AvatarSix,
  AvatarSeven,
  AvatarNine,
  AvatarEight,
  AvatarTen,

  // NFT
  Nft3,
  Nft7,
  Nft9,
  Nft8,
  CopyCatNft,
  MoonBirdNft,
  VideoGameNft,

  // Flags
  America,
  Austria,
  Brazil,
  China,
  France,
  India,
  Germany,
  Australia,
  Portugal,
  European,
  Japan,
  Mauritius,
  Qatar,
  Scotland,
  Jamaica,
  SouthKorea,
  Hawaii,
  Vietnam,
  Singapore,
  Kenya,
  GameNft,

  // BagShowcase
  BagShowcase,
  BagShowcaseOne,
  BagShowcaseThree,
  BagShowcaseTwo,

  // General
  DigitalPlantArt,
  PixelatedHumanCharacter,
  RealisticFantasyIllustration,
  Pikachu,
  PunkMonkey,
  Tiger,

  // Product
  ProductOne,
  ProductTwo,
  ProductThree,
  ProductFour,
  ProductFive,
  ProductSix,
  ProductSeven,
  ProductEight,
  ProductNine,
  ProductTan,
  ProductEleven,
  ProductTwelve,
  ProductThirteen,
  ProductFourteen,
} from "./imageData";

// Aside Bar
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
// AkSideBar (index)

export const sidebarMenuItems = [
  getItem(
    "MAIN",
    "main-group",
    null,
    [
      getItem(
        "Dashboards",
        "dashboards",
        <i className="ri-dashboard-fill"></i>,
        [
          getItem("NFT", "/dashboard/nft"),
          getItem("Academy", "/dashboard/academy"),
          getItem("Analytics", "/dashboard/analytics"),
          getItem("Ecommerce", "/dashboard/e-commerce"),
          getItem("CRM", "/dashboard/crm"),
          getItem("Logistics", "/dashboard/logistics"),
        ]
      ),
    ],
    "group"
  ),
  {
    type: "divider",
  },
  getItem(
    "PAGES",
    "pages-group",
    null,
    [
      getItem(
        "Authentication",
        "authentication-pages",
        <i className="ri-fingerprint-2-fill"></i>,
        [
          getItem("Login", "/authentication/login"),
          getItem("Register", "/authentication/register"),
          getItem("Verify Email", "/authentication/verify-email"),
          getItem("Forgot Password", "/authentication/forgot-password"),
          getItem("Reset Password", "/authentication/reset-password"),
          getItem("Forgot Email", "/authentication/forgot-email"),
          getItem("OTP Verification", "/authentication/otp"),
        ]
      ),
      getItem(
        "Error Page",
        "/dashboard/error",
        <i className="ri-error-warning-fill"></i>
      ),
      getItem(
        "Coming Soon",
        "/dashboard/coming-soon",
        <i className="ri-megaphone-fill"></i>
      ),
      getItem(
        "Not Found",
        "/dashboard/not-found",
        <i className="ri-forbid-fill"></i>
      ),
      getItem(
        "Under Maintenance",
        "/dashboard/under-maintenance",
        <i className="ri-hammer-fill"></i>
      ),
      getItem(
        "User Profile",
        "/dashboard/user-profile",
        <i className="ri-profile-fill"></i>
      ),
      getItem(
        "User Timeline",
        "/dashboard/user-timeline",
        <i className="ri-timeline-view"></i>
      ),
      getItem(
        "Notifications",
        "/dashboard/notifications",
        <i className="ri-notification-line"></i>
      ),
      getItem(
        "Contacts",
        "/dashboard/contacts",
        <i className="ri-contacts-fill"></i>
      ),
      getItem("Faq", "/dashboard/faq", <i className="ri-question-line"></i>),
      getItem(
        "Account settings",
        "account-settings",
        <i className="ri-settings-5-fill"></i>,
        [
          getItem("My profile", "/dashboard/my-profile"),
          getItem("Account", "/dashboard/account"),
          getItem("Security", "/dashboard/security"),
          getItem("Billing & Plans", "/dashboard/billing-plans"),
        ]
      ),
    ],
    "group"
  ),
  {
    type: "divider",
  },
  getItem(
    "GENERAL",
    "General",
    null,
    [
      getItem("UI Kits", "ui-kits", <i className="ri-stack-fill"></i>, [
        getItem("Typography", "/dashboard/typography"),
        getItem("Avatar", "/dashboard/avatar"),
        getItem("styleguide", "/dashboard/style-guide"),
        getItem("Tag & pills", "/dashboard/tag-pills"),
        getItem("Progress", "/dashboard/progress"),
        getItem("Modal", "/dashboard/modal"),
        getItem("Alert", "/dashboard/alert"),
        getItem("Popover", "/dashboard/popover"),
        getItem("Tooltip", "/dashboard/tooltip"),
        getItem("Dropdown", "/dashboard/dropdown"),
        getItem("Select", "/dashboard/select"),
        getItem("Accordion", "/dashboard/accordion"),
        getItem("Tabs", "/dashboard/tab"),
        getItem("Lists", "/dashboard/list"),
        getItem("Carousal", "/dashboard/carousel"),
        getItem("Calendar", "/dashboard/calendar"),
        getItem("Badge", "/dashboard/badge"),
      ]),
      getItem("Bonus UI", "bonus-ui", <i className="ri-gift-fill"></i>, [
        getItem("Scrollable", "/dashboard/scrollable"),
        getItem("Tree view", "/dashboard/tree-view"),
        getItem("Toasts", "/dashboard/toast"),
        getItem("Rating", "/dashboard/rating"),
        getItem("Dropzone", "/dashboard/dropzone"),
        getItem("SweetAlert", "/dashboard/sweet-alert"),
        getItem("Swiper Slider", "/dashboard/swiper"),
        getItem("Pagination", "/dashboard/pagination"),
        getItem("Breadcrumb", "/dashboard/breadcrumb"),
        getItem("Range slider", "/dashboard/range-slider"),
        getItem("Ribbons", "/dashboard/ribbon"),
        getItem("Image Cropper", "/dashboard/image-cropper"),
        getItem("Basic Card", "/dashboard/card"),
        getItem("Creative Card", "/dashboard/creative-card"),
        getItem("Timeline", "/dashboard/timeline"),
        getItem("Loader", "/dashboard/loader"),
        getItem("Offcanvas", "/dashboard/offcanvas"),
      ]),
      getItem("Icons", "icons", <i className="ri-grid-fill"></i>, [
        getItem("Flag icons", "/dashboard/flag-icons"),
        getItem("General icons", "/dashboard/icons"),
      ]),
      getItem(
        "Buttons",
        "/dashboard/buttons",
        <i className="ri-radio-button-fill"></i>
      ),
      getItem("Charts", "charts", <i className="ri-bar-chart-2-fill"></i>, [
        getItem("Chartjs Charts", "/dashboard/chart"),
        getItem("Google Charts", "/dashboard/google-charts"),
      ]),
    ],
    "group"
  ),
  {
    type: "divider",
  },
  getItem(
    "FORMS",
    "forms",
    null,
    [
      getItem(
        "Form Controls",
        "form-controls",
        <i className="ri-gamepad-fill"></i>,
        [
          getItem("Input Controls", "/dashboard/input-controls"),
          getItem("Checkbox & Radio", "/dashboard/checkbox-radio"),
        ]
      ),
      getItem(
        "Form Widgets",
        "form-widgets",
        <i className="ri-keyboard-box-fill"></i>,
        [
          getItem("Datepicker", "/dashboard/date-picker"),
          getItem("Colorpicker", "/dashboard/color-picker"),
          getItem("Counter", "/dashboard/counter"),
          getItem("Switch", "/dashboard/switch"),
          getItem("Text Editor", "/dashboard/text-editor"),
          getItem("Clipboard", "/dashboard/clip-board"),
        ]
      ),
      getItem(
        "Form Wizard",
        "/dashboard/form-wizard",
        <i className="ri-swap-2-fill"></i>
      ),
    ],
    "group"
  ),
  {
    type: "divider",
  },
  getItem(
    "TABLES",
    "table",
    null,
    [
      getItem("Tables", "tables", <i className="ri-table-fill"></i>, [
        getItem("Basic Table", "/dashboard/basic-table"),
        // getItem("Data Table", "/dashboard/coming-soon"),
        getItem("Advanced Table", "/dashboard/advanced-table"),
      ]),
    ],
    "group"
  ),
  {
    type: "divider",
  },
  getItem(
    "MAP & CHAT",
    "mapchat",
    null,
    [
      getItem("Map", "/dashboard/map", <i className="ri-road-map-fill"></i>),
      getItem("Chat", "/dashboard/chat", <i className="ri-chat-3-fill"></i>),
    ],
    "group"
  ),
];

//
export const themeModeItems = [
  {
    name: "Dark",
    value: "Dark",
  },
  {
    name: "Light",
    value: "Light",
  },
];

export const userDropItems = [
  {
    key: "1",
    label: (
      <a rel="noopener noreferrer" href="/dashboard/my-profile">
        profile
      </a>
    ),
    icon: svgIcons.user,
  },
  {
    key: "2",
    label: (
      <a rel="noopener noreferrer" href="mailto:help.omnibubble@gmail.com">
        inbox
      </a>
    ),
    icon: svgIcons.email,
  },
  {
    key: "3",
    label: (
      <a rel="noopener noreferrer" href="/dashboard/coming-soon">
        task manager
      </a>
    ),
    icon: svgIcons.checkWithSquare,
  },
  {
    key: "4",
    label: (
      <a rel="noopener noreferrer" href="/dashboard/security">
        Settings
      </a>
    ),
    icon: svgIcons.setting,
  },
  {
    key: "5",
    label: (
      <a rel="noopener noreferrer" href="/dashboard/contacts">
        Support
      </a>
    ),
    icon: svgIcons.customerService,
  },
  {
    key: "6",
    label: (
      <a rel="noopener noreferrer" href="/authentication/login">
        Logout
      </a>
    ),
    icon: svgIcons.logout,
  },
];

export const simpleDropDownItems = [
  {
    key: "1",
    label: (
      <a rel="noopener noreferrer" href="javascript:void(0)">
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a rel="noopener noreferrer" href="javascript:void(0)">
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a rel="noopener noreferrer" href="javascript:void(0)">
        3rd menu item
      </a>
    ),
  },
];

export const themeColors = [
  {
    name: "theme-dark-pelican",
    theme: "main",
    bgClass: ["#A110C2", "#7367F0", "#C7C9DF", "#606066"],
    value: "theme-dark-pelican",
    mode: "dark",
  },
  {
    name: "theme-dark-falcon",
    theme: "main",
    bgClass: ["#7367F0", "#FF3ABD", "#E7E7E8", "#6B6A6F"],
    value: "theme-dark-falcon",
    mode: "dark",
  },
  {
    name: "theme-dark-kingfisher",
    theme: "main",
    bgClass: ["#7367F0", "#5C21A0", "#b6bee3", "#2f3249"],
    value: "theme-dark-kingfisher",
    mode: "dark",
  },
  {
    name: "theme-dark-rook",
    theme: "main",
    bgClass: ["#008AFF", "#83CC56", "#0F1835", "#93A0B4"],
    value: "theme-dark-rook",
    mode: "dark",
  },
  {
    name: "theme-dark-owl",
    theme: "main",
    bgClass: ["#800080", "#B59DFA", "#b6bee3", "#2f3249"],
    value: "theme-dark-owl",
    mode: "dark",
  },

  {
    name: "theme-dark-egret",
    theme: "main",
    bgClass: ["#12BC95", "#F86767", "#0F1835", "#7F8E8A"],
    value: "theme-dark-egret",
    mode: "dark",
  },
  {
    name: "theme-dark-swan",
    theme: "main",
    bgClass: ["#008000", "#1AA8E9", "#b6bee3", "#2f3249"],
    value: "theme-dark-swan",
    mode: "dark",
  },
  {
    name: "theme-light-hen",
    theme: "main",
    bgClass: ["#000248", "#1AA8E9", "#C0BFCB", "#8e90af"],
    value: "theme-light-hen",
    mode: "light",
  },
  {
    name: "theme-light-kingfisher",
    theme: "main",
    bgClass: ["#dbdade", "#7367f0", "#5C21A0", "#918E9C"],
    value: "theme-light-kingfisher",
    mode: "light",
  },
  {
    name: "theme-light-canary",
    theme: "main",
    bgClass: ["#FF7640", "#72BBFF", "#0F1835", "#9B928A"],
    value: "theme-light-canary",
    mode: "light",
  },
  {
    name: "theme-light-swan",
    theme: "main",
    bgClass: ["#dbdade", "#008000", "rgb(0 128 0 / 50%)", "#918E9C"],
    value: "theme-light-swan",
    mode: "light",
  },
  {
    name: "theme-light-falcon",
    theme: "main",
    bgClass: ["#7367F0", "#FF3ABD", "#0F1835", "#988DAB"],
    value: "theme-light-falcon",
    mode: "light",
  },
  {
    name: "theme-light-rook",
    theme: "main",
    bgClass: ["#008AFF", "#83CC56", "#0F1835", "#93A0B4"],
    value: "theme-light-rook",
    mode: "light",
  },

  {
    name: "theme-light-egret",
    theme: "main",
    bgClass: ["#12BC95", "#F86767", "#0F1835", "#7F8E8A"],
    value: "theme-light-egret",
    mode: "light",
  },

  {
    name: "theme-dark-canary",
    theme: "main",
    bgClass: ["#FF7640", "#72BBFF", "#0F1835", "#9B928A"],
    value: "theme-dark-canary",
    mode: "dark",
  },
];

export const recordsData = [
  {
    name: "Total Revenue",
    description: "$236.18",
    backgroundColor: "rgba(59, 130, 246, 0.2)",
    color: "rgb(59, 130, 246)",
    icon: svgIcons.revenue,
  },
  {
    name: "Total Orders",
    description: "11,220",
    backgroundColor: "rgba(168, 85, 247, 0.2)",
    color: "rgb(168, 85, 247)",
    icon: svgIcons.box,
  },
  {
    name: "Delivered",
    description: "15,550",
    backgroundColor: "rgba(36, 151, 130, 0.2)",
    color: "rgb(36, 151, 130)",
    icon: svgIcons.truck,
  },
  {
    name: "Cancelled",
    description: "4,266",
    backgroundColor: "rgba(239, 68, 68, 0.2)",
    color: "rgb(239, 68, 68)",
    icon: svgIcons.box,
  },
  {
    name: "Sales",
    description: "2,365",
    backgroundColor: "rgba(59, 130, 246, 0.2)",
    color: "rgb(59, 130, 246)",
    icon: svgIcons.shoppingCart,
  },
  {
    name: "Total Visitor",
    description: "3,400",
    backgroundColor: "rgba(168, 85, 247, 0.2)",
    color: "rgb(168, 85, 247)",
    icon: svgIcons.team,
  },
];

const userData = [
  {
    children: "t",
    img: AvatarOne,
  },
  {
    img: AvatarTwo,
  },
  {
    img: AvatarFour,
  },
];

export const analyticsProjectsList = {
  columns: [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Leader",
      dataIndex: "leader",
      key: "leader",
    },
    {
      title: "Team",
      dataIndex: "team",
      key: "team",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 150,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: 30,
      align: "center",
    },
  ],
  row: [
    {
      key: "1",
      name: (
        <AKListIcon
          items={[
            {
              icon: svgIcons.reactJS,
              title: "Admin Template",
              background: "rgba(36, 151, 130, 0.2)",
              color: "rgb(36, 151, 130)",
            },
          ]}
          size="sm"
        />
      ),
      leader: "Sarah Johnson",
      team: <AKAvatar data={userData} size={36} />,
      status: <AKTags color="purple" title="in progress" />,
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "2",
      name: (
        <AKListIcon
          items={[
            {
              icon: svgIcons.angular,
              title: "Angular APIs",
              background: "rgba(168, 85, 247, 0.2)",
              color: "rgb(168, 85, 247)",
            },
          ]}
          size="sm"
        />
      ),
      leader: "Michael Smith",
      team: <AKAvatar data={userData} size={36} />,
      status: <AKTags color="green" title="Completed" />,
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "3",
      name: (
        <AKListIcon
          items={[
            {
              icon: svgIcons.dashboard,
              title: "App Design",
              background: "rgba(59, 130, 246, 0.2)",
              color: "rgb(59, 130, 246)",
            },
          ]}
          size="sm"
        />
      ),
      leader: "Emily Davis",
      team: <AKAvatar data={userData} size={36} />,
      status: <AKTags color="purple" title="in progress" />,
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "4",
      name: (
        <AKListIcon
          items={[
            {
              icon: svgIcons.html,
              title: "Create Website",
              background: "rgba(36, 151, 130, 0.2)",
              color: "rgb(36, 151, 130)",
            },
          ]}
          size="sm"
        />
      ),
      leader: "Christopher Brown",
      team: <AKAvatar data={userData} size={36} />,
      status: <AKTags color="purple" title="in progress" />,
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "5",
      name: (
        <AKListIcon
          items={[
            {
              icon: svgIcons.btc,
              title: "Crypto Admin",
              background: "rgba(168, 85, 247, 0.2)",
              color: "rgb(168, 85, 247)",
            },
          ]}
          size="sm"
        />
      ),
      leader: "Jessica Martinez",
      team: <AKAvatar data={userData} size={36} />,
      status: <AKTags color="green" title="completed" />,
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "6",
      name: (
        <AKListIcon
          items={[
            {
              icon: svgIcons.colorFilter,
              title: "Figma Dashboards",
              background: "rgba(168, 85, 247, 0.2)",
              color: "rgb(168, 85, 247)",
            },
          ]}
          size="sm"
        />
      ),
      leader: "David Wilson",
      team: <AKAvatar data={userData} size={36} />,
      status: <AKTags color="green" title="completed" />,
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "7",
      name: (
        <AKListIcon
          items={[
            {
              icon: svgIcons.image,
              title: "Logo Designs",
              background: "rgba(36, 151, 130, 0.2)",
              color: "rgb(36, 151, 130)",
            },
          ]}
          size="sm"
        />
      ),
      leader: "Matthew Anderson",
      team: <AKAvatar data={userData} size={36} />,
      status: <AKTags color="purple" title="in progress" />,
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
  ],
};

export const productsOverviewData = {
  columns: [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      width: 350,
    },
    {
      title: "Product Id",
      dataIndex: "productId",
      key: "productId",
      width: 100,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 100,
    },
    {
      title: "Sales",
      dataIndex: "sales",
      key: "sales",
      width: 100,
    },
    {
      title: "Revenue",
      dataIndex: "revenue",
      ket: "revenue",
      width: 100,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: 30,
      align: "center",
    },
  ],
  row: [
    {
      key: "1",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductOne} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Orange color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      productId: "#12-456",
      price: "$987",
      status: <AKTags color="green" title="Available" />,
      sales: "39650",
      revenue: "$98567",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "2",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductTwo} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Purple color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      productId: "#15-400",
      price: "$456",
      status: <AKTags color="purple" title="In Offer" />,
      sales: "6352",
      revenue: "$85642",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "3",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductThree} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Blue green color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      productId: "#12-302",
      price: "$325",
      status: <AKTags color="purple" title="In Offer" />,
      sales: "552",
      revenue: "$2356",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "4",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductFour} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Blue color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      productId: "#18-623",
      price: "$201",
      status: <AKTags color="orange" title="Limited Deal" />,
      sales: "800",
      revenue: "$3200",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "5",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductFive} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Green color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      productId: "#10-320",
      price: "$356",
      status: <AKTags color="orange" title="Limited Deal" />,
      sales: "758",
      revenue: "$7586",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "6",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductSix} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Pink color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      productId: "#111-313",
      price: "$230",
      status: <AKTags color="green" title="Available" />,
      sales: "236",
      revenue: "$22365",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "7",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductSeven} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Dark Purple color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      productId: "#707-845",
      price: "$830",
      status: <AKTags color="green" title="Available" />,
      sales: "506",
      revenue: "$45612",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },

    {
      key: "8",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductEight} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Red Color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      productId: "#222-404",
      price: "$325",
      status: <AKTags color="orange" title="Limited Deal" />,
      sales: "457",
      revenue: "$7458",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "9",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductNine} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Midnight Blue color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      productId: "#301-313",
      price: "$830",
      status: <AKTags color="purple" title="In Offer" />,
      sales: "963",
      revenue: "$8963",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "10",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductTan} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Yellow Green color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      productId: "#211-101",
      price: "$606",
      status: <AKTags color="green" title="Available" />,
      sales: "120",
      revenue: "$75468",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "11",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductEleven} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Orange Pink color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      productId: "#659-001",
      price: "$365",
      status: <AKTags color="purple" title="In Offer" />,
      sales: "563",
      revenue: "$7458",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "12",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductTwelve} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Blue Orange color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      productId: "#745-745",
      price: "$708",
      status: <AKTags color="green" title="Available" />,
      sales: "456",
      revenue: "$7474",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "13",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar
            size="large"
            img={ProductThirteen}
            imgContain
            single={true}
          />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Yellow color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      productId: "#66-235",
      price: "$4768",
      status: <AKTags color="orange" title="Limited Deal" />,
      sales: "101",
      revenue: "$6358",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "14",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar
            size="large"
            img={ProductFourteen}
            imgContain
            single={true}
          />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Peach color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      productId: "#745-313",
      price: "$325",
      status: <AKTags color="green" title="Available" />,
      sales: "120",
      revenue: "$45612",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
  ],
};

export const salesByCountryList = [
  {
    title: "$202k",
    description: "India",
    avatar: India,
    content: (
      <div className="fw-700 h4 mb-0" style={{ color: "green" }}>
        96%
      </div>
    ),
  },
  {
    title: "$455k",
    description: "United states",
    avatar: America,
    content: (
      <div className="fw-700 h4 mb-0" style={{ color: "green" }}>
        75%
      </div>
    ),
  },
  {
    title: "$852k",
    description: "Brazil",
    avatar: Brazil,
    content: (
      <div className="fw-700 h4 mb-0" style={{ color: "green" }}>
        85%
      </div>
    ),
  },
  {
    title: "$455k",
    description: "Australia",
    avatar: Austria,
    content: (
      <div className="fw-700 h4 mb-0" style={{ color: "green" }}>
        80%
      </div>
    ),
  },
  {
    title: "$562k",
    description: "France",
    avatar: France,
    content: (
      <div className="fw-700 h4 mb-0" style={{ color: "#f44336" }}>
        52%
      </div>
    ),
  },
];

export const sourceVisits = [
  {
    title: "Direct Source",
    description: "Direct link click",
    avatar: AvatarOne,
    content: (
      <div className="fw-700 h4 mb-0" style={{ color: "green" }}>
        75%
      </div>
    ),
  },
  {
    title: "Social Network",
    description: "Social Channels",
    avatar: AvatarThree,
    content: (
      <div className="fw-700 h4 mb-0" style={{ color: "green" }}>
        85%
      </div>
    ),
  },
  {
    title: "Email Newsletter",
    description: "Mail Campaigns",
    avatar: AvatarOne,
    content: (
      <div className="fw-700 h4 mb-0" style={{ color: "#f44336" }}>
        10%
      </div>
    ),
  },
  {
    title: "Referrals",
    description: "Impact Radius Visit",
    avatar: AvatarTwo,
    content: (
      <div className="fw-700 h4 mb-0" style={{ color: "green" }}>
        80%
      </div>
    ),
  },
  {
    title: "ADVT",
    description: "Google ADVT",
    avatar: AvatarFour,
    content: (
      <div className="fw-700 h4 mb-0" style={{ color: "#f44336" }}>
        12%
      </div>
    ),
  },
];

export const ticketsList = [
  {
    extraContent: "142",
    icon: svgIcons.ticket,
    title: "New Tickets",
    background: "rgba(59, 130, 246, 0.2)",
    color: "rgb(59, 130, 246)",
  },
  {
    extraContent: "28",
    icon: svgIcons.check,
    title: "Open Tickets",
    background: "rgba(168, 85, 247, 0.2)",
    color: "rgb(168, 85, 247)",
  },
  {
    extraContent: "1 Day",
    icon: svgIcons.clock,
    title: "Response Time",
    background: "rgba(36, 151, 130, 0.2)",
    color: "rgb(36, 151, 130)",
  },
];

export const monthlyCampaignStateList = [
  {
    extraContent: "10%",
    icon: svgIcons.email,
    title: "Emails",
    background: "rgba(59, 130, 246, 0.2)",
    color: "rgb(59, 130, 246)",
  },
  {
    extraContent: "20%",
    icon: svgIcons.openedLock,
    title: "Opened",
    background: "rgba(168, 85, 247, 0.2)",
    color: "rgb(168, 85, 247)",
  },
  {
    extraContent: "5%",
    icon: svgIcons.mouse,
    title: "Clicked",
    background: "rgba(36, 151, 130, 0.2)",
    color: "rgb(36, 151, 130)",
  },
  {
    extraContent: "15%",
    icon: svgIcons.notification,
    title: "Subscribe",
    background: "rgba(239, 68, 68, 0.2)",
    color: "rgb(239, 68, 68)",
  },
  {
    extraContent: "0.5%",
    icon: svgIcons.sad,
    title: "Complaints",
    background: "rgba(59, 130, 246, 0.2)",
    color: "rgb(59, 130, 246)",
  },
  {
    extraContent: "1%",
    icon: svgIcons.notificationOff,
    title: "Unsubscribe",
    background: "rgba(168, 85, 247, 0.2)",
    color: "rgb(168, 85, 247)",
  },
];

export const nftData = [
  {
    name: "Discover, collect and sell your NFT",
    img: PixelatedHumanCharacter,
    description:
      "NFT means non-fungible tokens (NFTs), which are generally created using the same type of programming used for cryptocurrencies.It is is a unique digital identifier that cannot be copied.",
    subtitle: "NFT means non-fungible",
    list: [
      { name: "NFT, Non Fungible." },
      { name: "NFT, Non Fungible." },
      { name: "NFT, Non Fungible." },
      { name: "NFT, Non Fungible." },
    ],
  },
  {
    name: "Discover, collect and sell your NFT",
    img: DigitalPlantArt,
    description:
      " NFT means non-fungible tokens (NFTs), which are generally created using the same type of programming used for cryptocurrencies.It is is a unique digital identifier that cannot be copied.",
    subtitle: "NFT means non-fungible",
    list: [
      { name: "NFT, NFT means non-fungible" },
      { name: "NFT, NFT means non-fungible" },
      { name: "NFT, NFT means non-fungible" },
      { name: "NFT, NFT means non-fungible" },
    ],
  },
  {
    name: "Discover, collect and sell your NFT",
    img: RealisticFantasyIllustration,
    description:
      " NFT means non-fungible tokens (NFTs), which are generally created using the same type of programming used for cryptocurrencies.It is is a unique digital identifier that cannot be copied.",
    subtitle: "NFT means non-fungible",
    list: [
      { name: "NFT, NFT means non-fungible" },
      { name: "NFT, NFT means non-fungible" },
      { name: "NFT, NFT means non-fungible" },
      { name: "NFT, NFT means non-fungible" },
    ],
  },
];

export const topCreatorsData = {
  columns: [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
      title: "Items Sold",
      dataIndex: "itemsSold",
      key: "itemsSold",
      width: 100,
    },
    {
      title: "Total Value",
      dataIndex: "value",
      key: "value",
      width: 120,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: 30,
      align: "center",
    },
  ],
  row: [
    {
      key: "1",
      name: (
        <div className="flex gap-3">
          <AKAvatar size="large" img={AvatarOne} imgContain single={true} />
          <div>
            <p className="mb-0">David Williams</p>
            <p className="mb-0">davidW43@</p>
          </div>
        </div>
      ),
      itemsSold: "145",
      value: "$1,982",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "2",
      name: (
        <div className="flex gap-3">
          <AKAvatar size="large" img={AvatarTwo} imgContain single={true} />
          <div>
            <p className="mb-0">Sophie Müller</p>
            <p className="mb-0">sophie@</p>
          </div>
        </div>
      ),
      itemsSold: "120",
      value: "$1,982",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "3",
      name: (
        <div className="flex gap-3">
          <AKAvatar size="large" img={AvatarThree} imgContain single={true} />
          <div>
            <p className="mb-0">Emily Jones</p>
            <p className="mb-0">emilyJ55@</p>
          </div>
        </div>
      ),
      itemsSold: "100",
      value: "$1,982",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "4",
      name: (
        <div className="flex gap-3">
          <AKAvatar size="large" img={AvatarFour} imgContain single={true} />
          <div>
            <p className="mb-0">Matthew Davis</p>
            <p className="mb-0">matthew72@</p>
          </div>
        </div>
      ),
      itemsSold: "80",
      value: "$1,982",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "5",
      name: (
        <div className="flex gap-3">
          <AKAvatar size="large" img={AvatarOne} imgContain single={true} />
          <div>
            <p className="mb-0">Sarah Taylor</p>
            <p className="mb-0">sarah36@</p>
          </div>
        </div>
      ),
      itemsSold: "45",
      value: "$1,982",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "6",
      name: (
        <div className="flex gap-3">
          <AKAvatar size="large" img={AvatarOne} imgContain single={true} />
          <div>
            <p className="mb-0">Maria Garcia</p>
            <p className="mb-0">mariaGarcia@</p>
          </div>
        </div>
      ),
      itemsSold: "140",
      value: "$1,982",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "7",
      name: (
        <div className="flex gap-3">
          <AKAvatar size="large" img={AvatarTwo} imgContain single={true} />
          <div>
            <p className="mb-0">Christopher Wilson</p>
            <p className="mb-0">christopherW98@</p>
          </div>
        </div>
      ),
      itemsSold: "160",
      value: "$1,982",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "8",
      name: (
        <div className="flex gap-3">
          <AKAvatar size="large" img={AvatarThree} imgContain single={true} />
          <div>
            <p className="mb-0">Jennifer Smith</p>
            <p className="mb-0">jennifer25@</p>
          </div>
        </div>
      ),
      itemsSold: "55",
      value: "$1,982",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "9",
      name: (
        <div className="flex gap-3">
          <AKAvatar size="large" img={AvatarFour} imgContain single={true} />
          <div>
            <p className="mb-0">Michael Johnson</p>
            <p className="mb-0">michaelJ63@</p>
          </div>
        </div>
      ),
      itemsSold: "152",
      value: "$1,982",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "10",
      name: (
        <div className="flex gap-3">
          <AKAvatar size="large" img={AvatarOne} imgContain single={true} />
          <div>
            <p className="mb-0">Jessica Brown</p>
            <p className="mb-0">jessicaB55@</p>
          </div>
        </div>
      ),
      itemsSold: "110",
      value: "$1,982",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
  ],
};

export const personalListing = [
  {
    title: "George Johnson",
    description: "@johnson533",
    avatar: AvatarOne,
    content: <div className="fw-700 h4 mb-0">$75</div>,
  },
  {
    title: "Isabella Davies",
    description: "@davies563",
    avatar: AvatarThree,
    content: <div className="fw-700 h4 mb-0">$85</div>,
  },
  {
    title: "William Wilson",
    description: "@wilson853",
    avatar: AvatarOne,
    content: <div className="fw-700 h4 mb-0">$10</div>,
  },
  {
    title: "Sophie Robinson",
    description: "@robinson333",
    avatar: AvatarTwo,
    content: <div className="fw-700 h4 mb-0">$80</div>,
  },
  {
    title: "Thomas Clarke",
    description: "@clarke563",
    avatar: AvatarFour,
    content: <div className="fw-700 h4 mb-0">$12</div>,
  },
  {
    title: "Ava Thompson",
    description: "@Thompson88",
    avatar: AvatarOne,
    content: <div className="fw-700 h4 mb-0">$75</div>,
  },
];

export const topCollectorsData = [
  {
    title: "Jack Smith",
    description: "@jacksmith52",
    avatar: AvatarOne,
    content: <div className="fw-400 h4 mb-0">75%</div>,
  },
  {
    title: "Emily Jones",
    description: "@EmilyJ74",
    avatar: AvatarThree,
    content: <div className="fw-400 h4 mb-0">85%</div>,
  },
  {
    title: "Harry Brown",
    description: "@harrybrown65",
    avatar: AvatarOne,
    content: <div className="fw-400 h4 mb-0">60%</div>,
  },
  {
    title: "Olivia Taylor",
    description: "@oliviaT45",
    avatar: AvatarTwo,
    content: <div className="fw-400 h4 mb-0">80%</div>,
  },
  {
    title: "Charlie Williams",
    description: "@charlieW52",
    avatar: AvatarOne,
    content: <div className="fw-400 h4 mb-0">85%</div>,
  },
  {
    title: "Amelia Patel",
    description: "@ameliaP40",
    avatar: AvatarOne,
    content: <div className="fw-400 h4 mb-0">96%</div>,
  },
];

export const trendingNftsData = {
  columns: [
    {
      title: "Collection",
      dataIndex: "collection",
      key: "collection",
      width: 260,
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      width: 100,
    },
    {
      title: "Volume",
      dataIndex: "volume",
      key: "volume",
      width: 150,
    },
    {
      title: "24h %",
      dataIndex: "oneDay",
      key: "oneDay",
      width: 100,
    },
    {
      title: "7d %",
      dataIndex: "oneWeek",
      key: "oneWeek",
      width: 100,
    },
    {
      title: "Floor Price",
      dataIndex: "floorPrice",
      key: "floorPrice",
      width: 120,
    },
    {
      title: "Items",
      dataIndex: "items",
      key: "items",
      width: 100,
    },
  ],
  row: [
    {
      key: "1",
      collection: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={Pikachu}
            imgContain
            single={true}
            shape="square"
            className="flex-0-0-auto"
          />
          <div>
            <p className="mb-0">Pikachu NFT</p>
            <p className="mb-0">@sophierobinson758</p>
          </div>
        </div>
      ),
      rank: "#1",
      volume: "2.56ETH",
      oneDay: "15.2%",
      oneWeek: "3.1%",
      floorPrice: "2.31ETH",
      items: "15.5K",
    },
    {
      key: "2",
      collection: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={PunkMonkey}
            imgContain
            single={true}
            shape="square"
            className="flex-0-0-auto"
          />
          <div>
            <p className="mb-0">Punk Monkey NFT</p>
            <p className="mb-0">@williamwilson856</p>
          </div>
        </div>
      ),
      rank: "#2",
      volume: "2.22ETH",
      oneDay: "16.6%",
      oneWeek: "4.2%",
      floorPrice: "3.21ETH",
      items: "12K",
    },
    {
      key: "3",
      collection: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={Tiger}
            imgContain
            single={true}
            shape="square"
            className="flex-0-0-auto"
          />
          <div>
            <p className="mb-0">Tiger NFT</p>
            <p className="mb-0">@isabelladavies854</p>
          </div>
        </div>
      ),
      rank: "#3",
      volume: "4.21ETH",
      oneDay: "15.5%",
      oneWeek: "4.4%",
      floorPrice: "3.31ETH",
      items: "14K",
    },
    {
      key: "4",
      collection: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={PixelatedHumanCharacter}
            imgContain
            single={true}
            shape="square"
            className="flex-0-0-auto"
          />
          <div>
            <p className="mb-0">Pixelated Human Character NFT</p>
            <p className="mb-0">@georgejohnson545</p>
          </div>
        </div>
      ),
      rank: "#4",
      volume: "4.66ETH",
      oneDay: "14.4%",
      oneWeek: "3.5%",
      floorPrice: "5.42ETH",
      items: "24K",
    },
    {
      key: "5",
      collection: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={RealisticFantasyIllustration}
            imgContain
            single={true}
            shape="square"
            className="flex-0-0-auto"
          />
          <div>
            <p className="mb-0">Realistic Fantasy NFT</p>
            <p className="mb-0">@ameliapatel456</p>
          </div>
        </div>
      ),
      rank: "#5",
      volume: "2.14ETH",
      oneDay: "16.2%",
      oneWeek: "6.1%",
      floorPrice: "5.55ETH",
      items: "24K",
    },
    {
      key: "6",
      collection: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={DigitalPlantArt}
            imgContain
            single={true}
            shape="square"
            className="flex-0-0-auto"
          />
          <div>
            <p className="mb-0">Digital Plant Art NFT</p>
            <p className="mb-0">@charliewilliams888</p>
          </div>
        </div>
      ),
      rank: "#6",
      volume: "2.56ETH",
      oneDay: "14.2%",
      oneWeek: "6.1%",
      floorPrice: "2.31ETH",
      items: "24K",
    },
    {
      key: "7",
      collection: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={CopyCatNft}
            imgContain
            single={true}
            shape="square"
            className="flex-0-0-auto"
          />
          <div>
            <p className="mb-0">Copy Cat NFT</p>
            <p className="mb-0">@oliviataylor222</p>
          </div>
        </div>
      ),
      rank: "#7",
      volume: "3.42ETH",
      oneDay: "18.2%",
      oneWeek: "8.1%",
      floorPrice: "1.31ETH",
      items: "24K",
    },
    {
      key: "8",
      collection: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={MoonBirdNft}
            imgContain
            single={true}
            shape="square"
            className="flex-0-0-auto"
          />
          <div>
            <p className="mb-0">Moon Bird NFT</p>
            <p className="mb-0">@jacks893</p>
          </div>
        </div>
      ),
      rank: "#8",
      volume: "2.26ETH",
      oneDay: "16.2%",
      oneWeek: "2.1%",
      floorPrice: "3.31ETH",
      items: "24K",
    },
    {
      key: "9",
      collection: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={GameNft}
            imgContain
            single={true}
            shape="square"
            className="flex-0-0-auto"
          />
          <div>
            <p className="mb-0">Game NFT</p>
            <p className="mb-0">@harrybrown523</p>
          </div>
        </div>
      ),
      rank: "#9",
      volume: "3.26ETH",
      oneDay: "18.2%",
      oneWeek: "4.1%",
      floorPrice: "2.22ETH",
      items: "24K",
    },
    {
      key: "10",
      collection: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={VideoGameNft}
            imgContain
            single={true}
            shape="square"
            className="flex-0-0-auto"
          />
          <div>
            <p className="mb-0">Video Game NFT</p>
            <p className="mb-0">@emilyjones125</p>
          </div>
        </div>
      ),
      rank: "#10",
      volume: "1.321ETH",
      oneDay: "12.2%",
      oneWeek: "2.1%",
      floorPrice: "4.41ETH",
      items: "24K",
    },
  ],
};

export const nftViewData = [
  {
    name: "Total Assets",
    value: "$ 6245",
    path: "/",
    pathname: "View All",
    bg: "purple",
    icon: svgIcons.folder,
  },
  {
    name: "Total Value",
    value: "$ 3254",
    path: "/",
    pathname: "View All",
    bg: "orange",
    icon: svgIcons.calculator,
  },
  {
    name: "Total Sales",
    value: "$ 5251",
    path: "/",
    pathname: "View All",
    bg: "skyblue",
    icon: svgIcons.pen,
  },
  {
    name: "Total Revenue",
    value: "$ 9235",
    path: "/",
    pathname: "View All",
    bg: "green",
    icon: svgIcons.dollar,
  },
];

export const nftFeaturedCollections = [
  {
    name: "Jack Smith",
    email: "@jackS5",
    description: "Collection rank : #1",
    user: true,
    userImg: AvatarThree,
    img: DigitalPlantArt,
  },
  {
    name: "Amelia Patel",
    email: "@ameliaP125",
    description: "Collection rank : #2",
    user: true,
    userImg: AvatarTwo,
    img: PixelatedHumanCharacter,
  },
  {
    name: "Charlie Williams",
    email: "@charlieW56",
    description: "Collection rank : #3",
    user: true,
    userImg: AvatarOne,
    img: RealisticFantasyIllustration,
  },
];

export const nftShowCaseData = [
  {
    userImg: AvatarOne,
    img: Pikachu,
    name: "Ergos NFT",
    email: "@ergos52",
    description: "Cyborg Pikachu NFT",
    user: true,
    pathName: "Place Bid",
    link: "/dashboard/coming-soon",
  },
  {
    userImg: AvatarTwo,
    img: PunkMonkey,
    name: "Bloom NFT",
    email: "@bloom152",
    description: "Punk Monkey NFT",
    user: true,
    pathName: "Place Bid",
    link: "/dashboard/coming-soon",
  },
  {
    userImg: AvatarThree,
    img: Tiger,
    name: "Caros NFT",
    email: "@caros14",
    description: "A Tiger With A Big Eye NFT",
    user: true,
    pathName: "Place Bid",
    link: "/dashboard/coming-soon",
  },
];

export const topCourseCategories = [
  {
    name: "50+ Courses",
    description: "UI/UX Design",
    backgroundColor: "rgba(59, 130, 246, 0.2)",
    color: "rgb(59, 130, 246)",
    icon: svgIcons.dashboard,
  },
  {
    name: "90+ Courses",
    description: "Digital Marketing",
    backgroundColor: "rgba(168, 85, 247, 0.2)",
    color: "rgb(168, 85, 247)",
    icon: svgIcons.planeSend,
  },
  {
    name: "40+ Development",
    description: "Web Development",
    backgroundColor: "rgba(36, 151, 130, 0.2)",
    color: "rgb(36, 151, 130)",
    icon: svgIcons.codeBox,
  },
  {
    name: "10+ Development",
    description: "Stocks & Trading",
    backgroundColor: "rgba(239, 68, 68, 0.2)",
    color: "rgb(239, 68, 68)",
    icon: svgIcons.bar,
  },
];

export const notificationList = [
  {
    icon: svgIcons.gift,
    title: "Order No: 123456 Has Shipped To Your Delivery Address",
    background: "rgba(36, 151, 130, 0.2)",
    color: "rgb(36, 151, 130)",
  },
  {
    icon: svgIcons.discountPercent,
    title: "Discount Available On Selected Products",
    background: "rgba(168, 85, 247, 0.2)",
    color: "rgb(168, 85, 247)",
  },
  {
    icon: svgIcons.check,
    title: "Your Account Has Been Verified Sucessfully",
    background: "rgba(239, 68, 68, 0.2)",
    color: "rgb(239, 68, 68)",
  },
  {
    icon: svgIcons.userFollow,
    title: "Order Placed ID: #1116773",
    background: "rgba(168, 85, 247, 0.2)",
    color: "rgb(168, 85, 247)",
  },
  {
    icon: svgIcons.clock,
    title: "Order Delayed ID: #2216773",
    background: "rgba(59, 130, 246, 0.2)",
    color: "rgb(59, 130, 246)",
  },
];

export const topCourseList = [
  {
    extraContent: "1.2k Views",
    icon: svgIcons.reactJS,
    title: "React JS",
    background: "rgba(36, 151, 130, 0.2)",
    color: "rgb(36, 151, 130)",
  },
  {
    extraContent: "834 Views",
    icon: svgIcons.dashboard,
    title: "UI/UX Design",
    background: "rgba(168, 85, 247, 0.2)",
    color: "rgb(168, 85, 247)",
  },
  {
    extraContent: "3.7k views",
    icon: svgIcons.customerService,
    title: "Digital Marketing",
    background: "rgba(59, 130, 246, 0.2)",
    color: "rgb(59, 130, 246)",
  },
  {
    extraContent: "2.5k views",
    icon: svgIcons.html,
    title: "HTML/CSS",
    background: "rgba(239, 68, 68, 0.2)",
    color: "rgb(239, 68, 68)",
  },
  {
    extraContent: "948 views",
    icon: svgIcons.javaScript,
    title: "JavaScript",
    background: "rgba(36, 151, 130, 0.2)",
    color: "rgb(36, 151, 130)",
  },
  {
    extraContent: "948 views",
    icon: svgIcons.nodeJS,
    title: "Node JS",
    background: "rgba(168, 85, 247, 0.2)",
    color: "rgb(168, 85, 247)",
  },
];

export const newStudents = {
  columns: [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 280,
    },
    {
      title: "Courses",
      dataIndex: "courses",
      key: "courses",
    },
    {
      title: "Completed",
      dataIndex: "completed",
      key: "completed",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: 80,
      align: "center",
    },
  ],
  row: [
    {
      key: "1",
      name: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={AvatarOne}
            imgContain
            single={true}
            style={{ flexShrink: 0 }}
          />
          <div>
            <p className="mb-0">Jack Smith</p>
            <p className="mb-0">smithj52@gmail.com</p>
          </div>
        </div>
      ),
      courses: "8",
      completed: "1",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "2",
      name: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={AvatarTwo}
            imgContain
            single={true}
            style={{ flexShrink: 0 }}
          />
          <div>
            <p className="mb-0">Emily Jones</p>
            <p className="mb-0">emilyjones563@gmail.com</p>
          </div>
        </div>
      ),
      courses: "10",
      completed: "2",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "3",
      name: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={AvatarThree}
            imgContain
            single={true}
            style={{ flexShrink: 0 }}
          />
          <div>
            <p className="mb-0">Harry Brown</p>
            <p className="mb-0">harrybrown@gmail.com</p>
          </div>
        </div>
      ),
      courses: "5",
      completed: "0",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "4",
      name: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={AvatarOne}
            imgContain
            single={true}
            style={{ flexShrink: 0 }}
          />
          <div>
            <p className="mb-0">Olivia Taylor</p>
            <p className="mb-0">oliviataylor875@gmail.com</p>
          </div>
        </div>
      ),
      courses: "5",
      completed: "0",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "5",
      name: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={AvatarTwo}
            imgContain
            single={true}
            style={{ flexShrink: 0 }}
          />
          <div>
            <p className="mb-0">Charlie Williams</p>
            <p className="mb-0">charliew536@gmail.com</p>
          </div>
        </div>
      ),
      courses: "10",
      completed: "4",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "6",
      name: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={AvatarOne}
            imgContain
            single={true}
            style={{ flexShrink: 0 }}
          />
          <div>
            <p className="mb-0">Jack Smith</p>
            <p className="mb-0">smithj52@gmail.com</p>
          </div>
        </div>
      ),
      courses: "8",
      completed: "1",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "7",
      name: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={AvatarTwo}
            imgContain
            single={true}
            style={{ flexShrink: 0 }}
          />
          <div>
            <p className="mb-0">Emily Jones</p>
            <p className="mb-0">emilyjones563@gmail.com</p>
          </div>
        </div>
      ),
      courses: "10",
      completed: "2",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "8",
      name: (
        <div className="flex gap-5">
          <AKAvatar
            size="large"
            img={AvatarThree}
            imgContain
            single={true}
            style={{ flexShrink: 0 }}
          />
          <div>
            <p className="mb-0">Harry Brown</p>
            <p className="mb-0">harrybrown@gmail.com</p>
          </div>
        </div>
      ),
      courses: "5",
      completed: "0",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
  ],
};

export const aLLCourseListData = {
  columns: [
    {
      title: "Courses",
      dataIndex: "courses",
      key: "courses",
      width: 450,
    },
    {
      title: "Classes",
      dataIndex: "classes",
      key: "classes",
      width: 100,
    },
    {
      title: "Total Hours",
      dataIndex: "totalhours",
      key: "totalhours",
      width: 120,
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
      width: 120,
    },
    {
      title: "Last Updated",
      dataIndex: "lastUpdated",
      key: "lastUpdated",
      width: 120,
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
      key: "instructor",
      width: 150,
    },
    {
      title: "Students",
      dataIndex: "students",
      key: "students",
      width: 80,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: 80,
      align: "center",
    },
  ],
  row: [
    {
      key: "1",
      courses: (
        <AKListIcon
          items={[
            {
              icon: svgIcons.reactJS,
              title: (
                <div className="mb-0 webkit-line-clamp-1 text-capitalize fw-700">
                  React.js Certification Training - Beginner to Expert Level
                </div>
              ),
              background: "rgba(36, 151, 130, 0.2)",
              color: "rgb(36, 151, 130)",
            },
          ]}
          size="sm"
        />
      ),
      classes: "150",
      totalhours: "15 hours",
      level: "Beginner",
      lastUpdated: "24-03-2024",
      instructor: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarFour} imgContain single={true} />
          <div>
            <p className="mb-0">Lily Foster</p>
          </div>
        </div>
      ),
      students: "562",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "2",
      srno: "#2",
      courses: (
        <AKListIcon
          items={[
            {
              icon: svgIcons.dashboard,
              title: (
                <div className="mb-0 webkit-line-clamp-1 text-capitalize fw-700">
                  UI Design with Photoshop: From Beginner to Expert
                </div>
              ),
              background: "rgba(168, 85, 247, 0.2)",
              color: "rgb(168, 85, 247)",
            },
          ]}
          size="sm"
        />
      ),
      classes: "15",
      totalhours: "52 hours",
      level: "Beginner",
      lastUpdated: "20-03-2024",
      instructor: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarOne} imgContain single={true} />
          <div>
            <p className="mb-0">Jacob Hughes</p>
          </div>
        </div>
      ),
      students: "650",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "3",
      srno: "#3",
      courses: (
        <AKListIcon
          items={[
            {
              icon: svgIcons.customerService,
              title: (
                <div className="mb-0 webkit-line-clamp-1 text-capitalize fw-700">
                  Social Media Marketing Mastery
                </div>
              ),
              background: "rgba(59, 130, 246, 0.2)",
              color: "rgb(59, 130, 246)",
            },
          ]}
          size="sm"
        />
      ),
      classes: "8",
      totalhours: "72 hours",
      level: "All Level",
      lastUpdated: "20-03-2024",
      instructor: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarFour} imgContain single={true} />
          <div>
            <p className="mb-0">Grace Carter</p>
          </div>
        </div>
      ),
      students: "500",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "4",
      srno: "#4",
      courses: (
        <AKListIcon
          items={[
            {
              icon: svgIcons.html,
              title: (
                <div className="mb-0 webkit-line-clamp-1 text-capitalize fw-700">
                  Learn HTML & CSS: How To Start Your Web Development Career
                </div>
              ),
              background: "rgba(239, 68, 68, 0.2)",
              color: "rgb(239, 68, 68)",
            },
          ]}
          size="sm"
        />
      ),
      classes: "15",
      totalhours: "22 hours",
      level: "All Level",
      lastUpdated: "20-03-2024",
      instructor: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarFour} imgContain single={true} />
          <div>
            <p className="mb-0">Samuel Green</p>
          </div>
        </div>
      ),
      students: "642",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "5",
      srno: "#5",
      courses: (
        <AKListIcon
          items={[
            {
              icon: svgIcons.javaScript,
              title: (
                <div className="mb-0 webkit-line-clamp-1 text-capitalize fw-700">
                  JavaScript Algorithms and Data Structures Masterclass
                </div>
              ),
              background: "rgba(36, 151, 130, 0.2)",
              color: "rgb(36, 151, 130)",
            },
          ]}
          size="sm"
        />
      ),
      classes: "15",
      totalhours: "36 hours",
      level: "All Level",
      lastUpdated: "20-03-2024",
      instructor: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarFour} imgContain single={true} />
          <div>
            <p className="mb-0">Poppy King</p>
          </div>
        </div>
      ),
      students: "956",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "6",
      srno: "#6",
      courses: (
        <AKListIcon
          items={[
            {
              icon: svgIcons.nodeJS,
              title: (
                <div className="mb-0 webkit-line-clamp-1 text-capitalize fw-700">
                  Node with React: Full Stack Web Development
                </div>
              ),
              background: "rgba(59, 130, 246, 0.2)",
              color: "rgb(59, 130, 246)",
            },
          ]}
          size="sm"
        />
      ),
      classes: "50",
      totalhours: "28 hours",
      level: "All Level",
      lastUpdated: "20-03-2024",
      instructor: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarOne} imgContain single={true} />
          <div>
            <p className="mb-0">Ethan Wright</p>
          </div>
        </div>
      ),
      students: "650",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "7",
      srno: "#7",
      courses: (
        <AKListIcon
          customClass="mb-0"
          items={[
            {
              icon: svgIcons.codeSlash,
              title: (
                <div className="mb-0 webkit-line-clamp-1 text-capitalize fw-700">
                  Front-end Development
                </div>
              ),
              background: "rgba(168, 85, 247, 0.2)",
              color: "rgb(168, 85, 247)",
            },
          ]}
          size="sm"
        />
      ),
      classes: "18",
      totalhours: "85 hours",
      level: "All Level",
      lastUpdated: "20-03-2024",
      instructor: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarFour} imgContain single={true} />
          <div>
            <p className="mb-0">William Wilson</p>
          </div>
        </div>
      ),
      students: "250",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "8",
      srno: "#8",
      courses: (
        <AKListIcon
          items={[
            {
              icon: svgIcons.java,
              title: (
                <div className="mb-0 webkit-line-clamp-1 text-capitalize fw-700">
                  Java Programming Masterclass for Software Developers
                </div>
              ),
              background: "rgba(36, 151, 130, 0.2)",
              color: "rgb(36, 151, 130)",
            },
          ]}
          size="sm"
        />
      ),
      classes: "50",
      totalhours: "22 hours",
      level: "All Level",
      lastUpdated: "18-02-2024",
      instructor: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarFour} imgContain single={true} />
          <div>
            <p className="mb-0">George Johnson</p>
          </div>
        </div>
      ),
      students: "220",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "9",
      srno: "#9",
      courses: (
        <AKListIcon
          items={[
            {
              icon: svgIcons.git,
              title: (
                <div className="mb-0 webkit-line-clamp-1 text-capitalize fw-700">
                  Git Essentials: Learn Git with Bitbucket and Sourcetree
                </div>
              ),
              background: "rgba(59, 130, 246, 0.2)",
              color: "rgb(59, 130, 246)",
            },
          ]}
          size="sm"
        />
      ),
      classes: "10",
      totalhours: "30 hours",
      level: "Beginner",
      lastUpdated: "20-03-2024",
      instructor: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarFour} imgContain single={true} />
          <div>
            <p className="mb-0">Ava Thompson</p>
          </div>
        </div>
      ),
      students: "200",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "10",
      srno: "#10",
      courses: (
        <AKListIcon
          items={[
            {
              icon: svgIcons.braces,
              title: (
                <div className="mb-0 webkit-line-clamp-1 text-capitalize fw-700">
                  Building RESTful Web APIs with JSON Server
                </div>
              ),
              background: "rgba(239, 68, 68, 0.2)",
              color: "rgb(239, 68, 68)",
            },
          ]}
          size="sm"
        />
      ),
      classes: "20",
      totalhours: "45 hours",
      level: "Beginner",
      lastUpdated: "20-03-2024",
      instructor: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarFour} imgContain single={true} />
          <div>
            <p className="mb-0">Thomas Clarke</p>
          </div>
        </div>
      ),
      students: "250",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
    {
      key: "11",
      srno: "#11",
      courses: (
        <AKListIcon
          items={[
            {
              icon: svgIcons.dataBase,
              title: (
                <div className="mb-0 webkit-line-clamp-1 text-capitalize fw-700">
                  Relational Database Fundamental
                </div>
              ),
              background: "rgba(36, 151, 130, 0.2)",
              color: "rgb(36, 151, 130)",
            },
          ]}
          size="sm"
        />
      ),
      classes: "20",
      totalhours: "18 hours",
      level: "Beginner",
      lastUpdated: "20-03-2024",
      instructor: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarFour} imgContain single={true} />
          <div>
            <p className="mb-0">Sophie Robinson</p>
          </div>
        </div>
      ),
      students: "320",
      actions: (
        <div className="flex gap-5 justify-center">
          <Link
            className="custom-btn-icon custom-link"
            to="/dashboard/coming-soon"
          >
            {svgIcons.eye}
          </Link>
        </div>
      ),
    },
  ],
};

export const topInstructorsData = [
  {
    title: "Jack Smith",
    description: "Business Intelligence",
    avatar: AvatarOne,
    content: (
      <>
        <div className="mb-0 text-kingfisher fw-700 h4">500 classes</div>
      </>
    ),
  },
  {
    title: "Emily Jones",
    description: "Digital Marketing",
    avatar: AvatarThree,
    content: (
      <>
        <div className="mb-0 text-kingfisher fw-700 h4">225 classes</div>
      </>
    ),
  },
  {
    title: "Harry Brown",
    description: "UI/UX Design",
    avatar: AvatarTwo,
    content: (
      <>
        <div className="mb-0 text-kingfisher fw-700 h4">120 classes</div>
      </>
    ),
  },
  {
    title: "Olivia Taylor",
    description: "React Native",
    avatar: AvatarFour,
    content: (
      <>
        <div className="mb-0 text-kingfisher fw-700 h4">400 classes</div>
      </>
    ),
  },
  {
    title: "Charlie Williams",
    description: "Frontend Designer",
    avatar: AvatarThree,
    content: (
      <>
        <div className="mb-0 text-kingfisher fw-700 h4">420 classes</div>
      </>
    ),
  },
];

export const academyViewData = [
  {
    name: "Total Students",
    value: "5000",
    path: "/",
    pathname: "View All",
    bg: "purple",
    icon: svgIcons.team,
  },
  {
    name: "Total Instructors",
    value: "208",
    path: "/",
    pathname: "View All",
    bg: "orange",
    icon: svgIcons.presentation,
  },
  {
    name: "Total Courses",
    value: "800",
    path: "/",
    pathname: "View All",
    bg: "skyblue",
    icon: svgIcons.bookOpen,
  },
  {
    name: "YTD Earnings",
    value: "$ 9825",
    path: "/",
    pathname: "View All",
    bg: "green",
    icon: svgIcons.dollar,
  },
];

export const recentSearchData = [
  {
    name: "Notifications",
    message: "Notifications",
  },
  {
    name: "Alerts",
    message: "Alerts",
  },
  {
    name: "Mail",
    message: "Mail",
  },
];

export const myProfileProjects = [
  {
    extraContent: (
      <>
        <AKTags color="green" title="complete" />
      </>
    ),
    icon: svgIcons.reactJS,
    title: "React JS",
    background: "rgba(36, 151, 130, 0.2)",
    color: "rgb(36, 151, 130)",
  },
  {
    extraContent: (
      <>
        <AKTags color="orange" title="Inprogress" />
      </>
    ),
    icon: svgIcons.dashboard,
    title: "UI/UX Design",
    background: "rgba(168, 85, 247, 0.2)",
    color: "rgb(168, 85, 247)",
  },
  {
    extraContent: (
      <>
        <AKTags color="purple" title="Hold" />
      </>
    ),
    icon: svgIcons.customerService,
    title: "Digital Marketing",
    background: "rgba(59, 130, 246, 0.2)",
    color: "rgb(59, 130, 246)",
  },
  {
    extraContent: (
      <>
        <AKTags color="green" title="complete" />
      </>
    ),
    icon: svgIcons.html,
    title: "HTML/CSS",
    background: "rgba(239, 68, 68, 0.2)",
    color: "rgb(239, 68, 68)",
  },
  {
    extraContent: (
      <>
        <AKTags color="purple" title="Hold" />
      </>
    ),
    icon: svgIcons.javaScript,
    title: "JavaScript",
    background: "rgba(36, 151, 130, 0.2)",
    color: "rgb(36, 151, 130)",
  },
  {
    extraContent: (
      <>
        <AKTags color="green" title="complete" />
      </>
    ),
    icon: svgIcons.nodeJS,
    title: "Node JS",
    background: "rgba(168, 85, 247, 0.2)",
    color: "rgb(168, 85, 247)",
  },
];

export const countryOption = [
  {
    value: "India",
    label: "India",
  },
  {
    value: "America",
    label: "America",
  },
  {
    value: "Japan",
    label: "Japan",
  },
];

export const languageOption = [
  {
    value: "English",
    label: "English",
  },
  {
    value: "German",
    label: "German",
  },
  {
    value: "French",
    label: "French",
  },
];

export const timeZonOption = [
  {
    value: "Asia/Kabul",
    label: "Asia/Kabul",
  },
  {
    value: "Europe/Tirane",
    label: "Europe/Tirane",
  },
  {
    value: "America/Anguilla",
    label: "America/Anguilla",
  },
];

export const currencyOption = [
  {
    value: "USD",
    label: "USD",
  },
  {
    value: "Euro",
    label: "Euro",
  },
  {
    value: "Bitcoin",
    label: "Bitcoin",
  },
];

export const confirmDeleteAccModeItems = [
  {
    name: "Yes",
    value: "Yes",
  },
  {
    name: "No",
    value: "No",
  },
];

export const productsOrdersData = {
  columns: [
    {
      title: "Product Name",
      key: "productName",
      dataIndex: "productName",
      width: 300,
    },
    {
      title: "User Name",
      key: "username",
      dataIndex: "username",
      width: 150,
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
      width: 80,
    },
    {
      title: "Delivery Date",
      key: "deliverydate",
      dataIndex: "deliverydate",
      width: 70,
    },
  ],
  row: [
    {
      key: "1",
      username: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarOne} imgContain single={true} />
          <div>
            <p className="mb-0">Ezekiel</p>
          </div>
        </div>
      ),
      price: "$299",
      deliverydate: "24 May 2024",
      productName: (
        <div className="flex items-center gap-5">
          <AKAvatar
            size="large"
            img={ProductFourteen}
            imgContain
            single={true}
          />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Peach color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      username: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarThree} imgContain single={true} />
          <div>
            <p className="mb-0">Atticus</p>
          </div>
        </div>
      ),
      price: "$536",
      deliverydate: "05 Oct 2024",
      productName: (
        <div className="flex items-center gap-5">
          <AKAvatar
            size="large"
            img={ProductThirteen}
            imgContain
            single={true}
          />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Yellow color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      username: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarTwo} imgContain single={true} />
          <div>
            <p className="mb-0">Aurora</p>
          </div>
        </div>
      ),
      price: "$456",
      deliverydate: "04 Nov 2024",
      productName: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductTwelve} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Blue Orange color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "4",
      username: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarOne} imgContain single={true} />
          <div>
            <p className="mb-0">Juniper</p>
          </div>
        </div>
      ),
      price: "$786",
      deliverydate: "16 Dec 2024",
      productName: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductEleven} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Orange Pink color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "5",
      username: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarOne} imgContain single={true} />
          <div>
            <p className="mb-0">Seraphina</p>
          </div>
        </div>
      ),
      price: "$456",
      deliverydate: "01 Dec 2024",
      productName: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductTan} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Yellow Green color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "6",
      username: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarOne} imgContain single={true} />
          <div>
            <p className="mb-0">Marigold</p>
          </div>
        </div>
      ),
      price: "$602",
      deliverydate: "06 Jun 2024",
      productName: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductNine} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Midnight Blue color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "7",
      username: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={AvatarOne} imgContain single={true} />
          <div>
            <p className="mb-0">Clementine</p>
          </div>
        </div>
      ),
      price: "$456",
      deliverydate: "03 May 2024",
      productName: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductEight} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Red Color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
    },
  ],
};

export const topCustomersList = [
  {
    title: "John Smith",
    description: "15 Purchases",
    avatar: AvatarOne,
    content: (
      <>
        <b>$75</b>
      </>
    ),
  },
  {
    title: "Sarah Johnson",
    description: "22 Purchases",
    avatar: AvatarTwo,
    content: (
      <>
        <b>$80</b>
      </>
    ),
  },
  {
    title: "Michael Brown",
    description: "20 Purchases",
    avatar: AvatarThree,
    content: (
      <>
        <b>$65</b>
      </>
    ),
  },
  {
    title: "Jennifer Davis",
    description: "16 Purchases",
    avatar: AvatarOne,
    content: (
      <>
        <b>$36</b>
      </>
    ),
  },
  {
    title: "David Martinez",
    description: "10 Purchases",
    avatar: AvatarTwo,
    content: (
      <>
        <b>$74</b>
      </>
    ),
  },
];

export const topSellingProductData = {
  columns: [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      width: 350,
      className: "w-pr-lg",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 120,
    },
    {
      title: "Total Sales",
      dataIndex: "totalSales",
      key: "totalSales",
      width: 120,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      width: 80,
    },
  ],
  row: [
    {
      key: "1",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductOne} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Orange color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      category: "Bag",
      stock: <AKTags color="green" title="In Stock" />,
      totalSales: "4567",
    },
    {
      key: "2",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductTwo} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Purple color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      category: "Bag",
      stock: <AKTags color="green" title="In Stock" size="sm" />,
      totalSales: "5689",
    },
    {
      key: "3",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductThree} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Blue green color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      category: "Bag",
      stock: <AKTags color="red" title="Out Of Stock" />,
      totalSales: "3652",
    },
    {
      key: "4",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductFour} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Blue color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      category: "Bag",
      stock: <AKTags color="green" title="In Stock" />,
      totalSales: "1025",
    },
    {
      key: "5",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductFive} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Green color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      category: "Bag",
      stock: <AKTags color="green" title="In Stock" />,
      totalSales: "50236",
    },
    {
      key: "6",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductSix} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Pink color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      category: "Bag",
      stock: <AKTags color="green" title="In Stock" />,
      totalSales: "5623",
    },
    {
      key: "7",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductSeven} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Dark Purple color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      category: "Bag",
      stock: <AKTags color="green" title="In Stock" />,
      totalSales: "4567",
    },
    {
      key: "8",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductEight} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Red Color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      category: "Bag",
      stock: <AKTags color="green" title="In Stock" />,
      totalSales: "1025",
    },
    {
      key: "9",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductNine} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Midnight Blue color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      category: "Bag",
      stock: <AKTags color="green" title="In Stock" />,
      totalSales: "1025",
    },
    {
      key: "10",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductTan} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Yellow Green color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      category: "Bag",
      stock: <AKTags color="green" title="In Stock" />,
      totalSales: "1025",
    },
    {
      key: "11",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductEleven} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Orange Pink color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      category: "Bag",
      stock: <AKTags color="green" title="In Stock" />,
      totalSales: "1025",
    },
    {
      key: "12",
      name: (
        <div className="flex items-center gap-5">
          <AKAvatar size="large" img={ProductOne} imgContain single={true} />
          <div>
            <p className="mb-0 webkit-line-clamp-1 text-capitalize">
              Orange color Stylish Handmade Woolen hand bag for Women
            </p>
          </div>
        </div>
      ),
      category: "Bag",
      stock: <AKTags color="green" title="In Stock" />,
      totalSales: "4567",
    },
  ],
};

export const flagIconImgData = [
  { imgSrc: India, imgAlt: "india-flag" },
  { imgSrc: America, imgAlt: "america-flag" },
  { imgSrc: Germany, imgAlt: "germany-flag" },
  { imgSrc: Brazil, imgAlt: "brazil-flag" },
  { imgSrc: China, imgAlt: "china-flag" },
  { imgSrc: Austria, imgAlt: "austria-flag" },
  { imgSrc: France, imgAlt: "france-flag" },
  { imgSrc: Australia, imgAlt: "australia-flag" },
  { imgSrc: Portugal, imgAlt: "portugal-flag" },
  { imgSrc: European, imgAlt: "european-flag" },
  { imgSrc: Japan, imgAlt: "japan-flag" },
  { imgSrc: Mauritius, imgAlt: "mauritius-flag" },
  { imgSrc: Qatar, imgAlt: "qatar-flag" },
  { imgSrc: Scotland, imgAlt: "scotland-flag" },
  { imgSrc: Jamaica, imgAlt: "jamaica-flag" },
  { imgSrc: SouthKorea, imgAlt: "south-korea-flag" },
  { imgSrc: Hawaii, imgAlt: "hawaii" },
  { imgSrc: Vietnam, imgAlt: "vietnam-flag" },
  { imgSrc: Singapore, imgAlt: "singapore-flag" },
  { imgSrc: Kenya, imgAlt: "kenya-flag" },
];

export const accordionItems = [
  {
    key: "1",
    label: "This is panel header 1",
    children: (
      <p>
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </p>
    ),
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: (
      <p>
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </p>
    ),
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: (
      <p>
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </p>
    ),
  },
];

export const twoStepVerficationAccordionItem = [
  {
    key: "1",
    label: "Enable two step verification",
    children: (
      <>
        <p className="mb-2">
          Enter your mobile phone number with country code and we will send you
          a verification code.
        </p>
        <AKInput
          id={"phoneNumber"}
          type="number"
          label={"Phone Number:"}
          placeholder={"Enter phone number"}
          AKInputContainerClassName="mb-4"
        />
        <div className="flex flex-wrap gap-4">
          <AKButton
            type="fill"
            handleClick={() => console.log("handleClick")}
            size="small"
          >
            Submit
          </AKButton>
          <AKButton
            type="no-fill"
            handleClick={() => console.log("handleClick")}
            size="small"
          >
            Cancel
          </AKButton>
        </div>
      </>
    ),
  },
];

export const recentCommentsList = [
  {
    title: "John Smith",
    description: (
      <>
        <div className="mb-2">
          Just love it ,mesmerized packaging & awesome quality.
        </div>
        <div>
          <AKRating value={5} />
        </div>
      </>
    ),
    avatar: AvatarOne,
  },
  {
    title: "Sarah Johnson",
    description: (
      <>
        <div className="mb-2">It will enhance your look..</div>
        <div>
          <AKRating value={3} />
        </div>
      </>
    ),
    avatar: AvatarTwo,
  },
  {
    title: "Michael Brown",
    description: (
      <>
        <div className="mb-2">Good quality and same as image showns</div>
        <div>
          <AKRating value={4} />
        </div>
      </>
    ),
    avatar: AvatarThree,
  },
];

export const customerGrowth = [
  {
    title: "Washington",
    growth: "$484 – $786",
    percentage: 30,
  },
  {
    title: "Oregon",
    growth: "$290 – $590",
    percentage: 60,
  },
  {
    title: "Idaho",
    growth: "$476 – $578",
    percentage: 70,
  },
  {
    title: "California",
    growth: "$476 – $578",
    percentage: 80,
  },
  {
    title: "Nevada",
    growth: "$137 – $488",
    percentage: 40,
  },
];

export const analyticsViewData = [
  {
    name: "Earnings",
    value: "$33,200",
    path: "/",
    pathname: "View All",
    bg: "purple",
    icon: svgIcons.clock,
  },
  {
    name: "Order ",
    value: "2080",
    path: "/",
    pathname: "View All",
    bg: "orange",
    icon: svgIcons.dataBase,
  },
  {
    name: "Team Members",
    value: "800",
    path: "/",
    pathname: "View All",
    bg: "skyblue",
    icon: svgIcons.team,
  },
  {
    name: "Profit",
    value: "$ 9825",
    path: "/",
    pathname: "View All",
    bg: "green",
    icon: svgIcons.dollar,
  },
  {
    name: "Projects",
    value: "5000",
    path: "/",
    pathname: "View All",
    bg: "pink",
    icon: svgIcons.dataBaseTwo,
  },
  {
    name: "Total Visitor",
    value: "208",
    path: "/",
    pathname: "View All",
    bg: "yellow",
    icon: svgIcons.group,
  },
];

export const analyticsProgressData = [
  {
    name: "Products Sold",
    totalItems: "14,865",
    percentage: 80,
  },
  {
    name: "Customers",
    totalItems: "22,456",
    percentage: 50,
  },
  {
    name: "Followers",
    totalItems: "54,412",
    percentage: 74,
  },
];

export const billingPlanData = [
  {
    color: "orange",
    label: "Team",
    price: "$150",
    year: "month",
    billingPlanListData: [
      "1 user per account",
      "Unlimited events",
      "Registration form",
      "Email announcements",
      "Integrate webinars",
      "Sales using mobile app",
    ],
  },
  {
    color: "green",
    label: "Agency",
    price: "$400",
    year: "month",
    billingPlanListData: [
      "Unlimited paid ticket",
      "Google analytics integration",
      "Customizable registration",
      "500 email invitations event",
      "Payments with mobile app",
      "Google analytics integration",
    ],
  },
  {
    color: "purple",
    label: "Enterprise",
    price: "$999",
    year: "month",
    billingPlanListData: [
      "Unlimited account user",
      "Custom domain support",
      "Registration transfers",
      "Email notifications",
      "Group discount",
      "Speaker management",
      "Standard REST API",
      "Email support",
      "Business hour chat support",
    ],
  },
];

export const basicSwiperSliderData = [
  {
    bannerImg: BagShowcase,
  },
  {
    bannerImg: BagShowcaseOne,
  },
  {
    bannerImg: BagShowcaseTwo,
  },
  {
    bannerImg: BagShowcaseThree,
  },
];

export const productCardSwiperData = [
  {
    userImg: AvatarThree,
    cardImg: BagShowcase,
    name: "Bloom NFT",
    email: "@bloom116",
    tagColor: "purple",
    tagTitle: "15 MAY 2014",
    productLabel: "BIG SAVING DAYS",
    productTitle: "Biggest sale is back.",
    paragraphText:
      "Bank Offer 10% off on Aches Bank Credit Cards, up to $10. On orders of $500 and above",
  },
  {
    userImg: AvatarThree,
    cardImg: BagShowcaseOne,
    name: "Bloom NFT",
    email: "@bloom116",
    tagColor: "purple",
    tagTitle: "15 MAY 2014",
    productLabel: "BIG SAVING DAYS",
    productTitle: "Biggest sale is back.",
    paragraphText:
      "Bank Offer 10% off on Aches Bank Credit Cards, up to $10. On orders of $500 and above",
  },
  {
    userImg: AvatarThree,
    cardImg: BagShowcaseTwo,
    name: "Bloom NFT",
    email: "@bloom116",
    tagColor: "purple",
    tagTitle: "15 MAY 2014",
    productLabel: "BIG SAVING DAYS",
    productTitle: "Biggest sale is back.",
    paragraphText:
      "Bank Offer 10% off on Aches Bank Credit Cards, up to $10. On orders of $500 and above",
  },
  {
    userImg: AvatarThree,
    cardImg: BagShowcaseThree,
    name: "Bloom NFT",
    email: "@bloom116",
    tagColor: "purple",
    tagTitle: "15 MAY 2014",
    productLabel: "BIG SAVING DAYS",
    productTitle: "Biggest sale is back.",
    paragraphText:
      "Bank Offer 10% off on Aches Bank Credit Cards, up to $10. On orders of $500 and above",
  },
  {
    userImg: AvatarThree,
    cardImg: BagShowcase,
    name: "Bloom NFT",
    email: "@bloom116",
    tagColor: "purple",
    tagTitle: "15 MAY 2014",
    productLabel: "BIG SAVING DAYS",
    productTitle: "Biggest sale is back.",
    paragraphText:
      "Bank Offer 10% off on Aches Bank Credit Cards, up to $10. On orders of $500 and above",
  },
  {
    userImg: AvatarThree,
    cardImg: BagShowcaseOne,
    name: "Bloom NFT",
    email: "@bloom116",
    tagColor: "purple",
    tagTitle: "15 MAY 2014",
    productLabel: "BIG SAVING DAYS",
    productTitle: "Biggest sale is back.",
    paragraphText:
      "Bank Offer 10% off on Aches Bank Credit Cards, up to $10. On orders of $500 and above",
  },
];

export const singleUserData = [
  {
    bg: "red",
    children: "t",
    img: "https://i.pravatar.cc/300",
  },
];

export const userChatListData = [
  {
    userName: "Eleanor Pena",
    userMsg: "Good Afternoon..! Tell me ho...",
    msgTime: "02:15 PM",
    msgNumber: "2",
    onlineLabel: true,
    onlineLabelBg: "green",
  },
  {
    userName: "Eleanor Pena",
    userMsg: "Good Afternoon..! Tell me ho...",
    msgTime: "02:15 PM",
    msgNumber: "14",
    onlineLabel: true,
    onlineLabelBg: "red",
  },
  {
    userName: "Eleanor Pena",
    userMsg: "Good Afternoon..! Tell me ho...",
    msgTime: "02:15 PM",
    msgNumber: "1",
    onlineLabel: true,
    onlineLabelBg: "green",
  },
  {
    userName: "Eleanor Pena",
    userMsg: "Good Afternoon..! Tell me ho...",
    msgTime: "02:15 PM",
    msgNumber: "5",
    onlineLabel: true,
    onlineLabelBg: "green",
  },
  {
    userName: "Eleanor Pena",
    userMsg: "Good Afternoon..! Tell me ho...",
    msgTime: "02:15 PM",
    msgNumber: "26",
    onlineLabel: true,
    onlineLabelBg: "yellow",
  },
  {
    userName: "Eleanor Pena",
    userMsg: "Good Afternoon..! Tell me ho...",
    msgTime: "02:15 PM",
    msgNumber: "7",
    onlineLabel: true,
    onlineLabelBg: "red",
  },
];

export const userChatData = [
  {
    msgText: "Hello, Good Afternoon",
  },
  {
    msgText: "Hope you're doing well..!",
    msgTimeShow: true,
    msgTime: "active 3 hours ago",
  },
  {
    rightSideChat: true,
    msgText:
      "Good Afternoon..!Yes i am good. Thanks for asking. Tell me how can I help you?",
    msgTimeShow: true,
    msgTime: "03:55 pm",
  },
];

export const moreItems = [
  {
    key: "1",
    label: (
      <button className="py-0 px-3 bg-transparent border-0 dropdown-menu-title-content">
        Download
      </button>
    ),
  },
  {
    key: "2",
    label: (
      <button className="py-0 px-3 bg-transparent border-0 dropdown-menu-title-content">
        Refresh
      </button>
    ),
  },
  {
    key: "3",
    label: (
      <button className="py-0 px-3 bg-transparent border-0 dropdown-menu-title-content">
        Share
      </button>
    ),
  },
];

export const moreItemsChart = [
  {
    key: "1",
    label: (
      <button className="py-0 px-3 bg-transparent border-0 dropdown-menu-title-content">
        Today
      </button>
    ),
  },
  {
    key: "2",
    label: (
      <button className="py-0 px-3 bg-transparent border-0 dropdown-menu-title-content">
        This Week
      </button>
    ),
  },
  {
    key: "3",
    label: (
      <button className="py-0 px-3 bg-transparent border-0 dropdown-menu-title-content">
        Last Week
      </button>
    ),
  },
];

export const contactsList = [
  {
    img: AvatarOne,
    title: "George Johnson",
    subtitleOne: (
      <a className="custom-link" href="mailto:someone@example.com">
        georgejohnson123@gmail.com
      </a>
    ),
    subtitleTwo: <a href="tel:+4733378901">+47 333 78 901</a>,
  },
  {
    img: AvatarTwo,
    title: "Thomas Clarke",
    subtitleOne: (
      <a className="custom-link" href="mailto:someone@example.com">
        thomasclarke45@gmail.com
      </a>
    ),
    subtitleTwo: <a href="tel:+4733378901">+17 888 88 754</a>,
  },
  {
    img: AvatarThree,
    title: "Isabella Davies",
    subtitleOne: (
      <a className="custom-link" href="mailto:someone@example.com">
        isabelladavies78@gmail.com
      </a>
    ),
    subtitleTwo: <a href="tel:+4733378901">+14 475 52 457</a>,
  },
  {
    img: AvatarFour,
    title: "Sophie Robinson",
    subtitleOne: (
      <a className="custom-link" href="mailto:someone@example.com">
        sophierobinson14@gmail.com
      </a>
    ),
    subtitleTwo: <a href="tel:+4733378901">+19 111 87 457</a>,
  },
  {
    img: AvatarFive,
    title: "Ava Thompson",
    subtitleOne: (
      <a className="custom-link" href="mailto:someone@example.com">
        avathompson88@gmail.com
      </a>
    ),
    subtitleTwo: <a href="tel:+4733378901">+19 111 45 888</a>,
  },
  {
    img: AvatarSix,
    title: "Petra Weber",
    subtitleOne: (
      <a className="custom-link" href="mailto:someone@example.com">
        petraweber45@gmail.com
      </a>
    ),
    subtitleTwo: <a href="tel:+4733378901">+19 222 45 652</a>,
  },
  {
    img: AvatarSeven,
    title: "Jan Schneider",
    subtitleOne: (
      <a className="custom-link" href="mailto:someone@example.com">
        janschneider25@gmail.com
      </a>
    ),
    subtitleTwo: <a href="tel:+4733378901">+12 563 75 578</a>,
  },
  {
    img: AvatarEight,
    title: "Bianca Zimmermann",
    subtitleOne: (
      <a className="custom-link" href="mailto:someone@example.com">
        biancazimmermann56@gmail.com
      </a>
    ),
    subtitleTwo: <a href="tel:+4733378901">+11 222 78 444</a>,
  },
  {
    img: AvatarNine,
    title: "Luca Keller",
    subtitleOne: (
      <a className="custom-link" href="mailto:someone@example.com">
        lucakeller41@gmail.com
      </a>
    ),
    subtitleTwo: <a href="tel:+4733378901">+16 475 66 235</a>,
  },
  {
    img: AvatarTen,
    title: "Lea Fischer",
    subtitleOne: (
      <a className="custom-link" href="mailto:someone@example.com">
        leafischer47@gmail.com
      </a>
    ),
    subtitleTwo: <a href="tel:+4733378901">+19 235 40 108</a>,
  },
];

export const faqGeneralTopics = [
  {
    key: "1",
    label: "Where can I subscribe to your newsletter? ",
    children: <p>NFT means non-fungible</p>,
  },
  {
    key: "2",
    label: " Where can in edit my address?",
    children: <p>NFT means non-fungible</p>,
  },
  {
    key: "3",
    label: "What are your opening hours?",
    children: <p>NFT means non-fungible</p>,
  },
];

export const faqCustomerSupport = [
  {
    key: "1",
    label: "What is the order procedure?  ",
    children: (
      <p>
        Discover, collect and sell your NFT NFT means non-fungible tokens
        (NFTs), which are generally created using the same type of programming
        used for cryptocurrencies.It is is a unique digital identifier that
        cannot be copied. Discover, collect and sell your NFT Discover, collect
        and sell your NFT NFT means non-fungible tokens (NFTs), which are
        generally created using the same type of programming used for
        cryptocurrencies.It is is a unique digital identifier that cannot be
        copied. Discover, collect and sell your NFT Discover, collect and sell
        your NFT NFT means non-fungible tokens (NFTs), which are generally
        created using the same type of programming used for cryptocurrencies.It
        is is a unique digital identifier that cannot be copied.
      </p>
    ),
  },
  {
    key: "2",
    label: " How and when do I receive the invoices? ",
    children: (
      <p>
        Discover, collect and sell your NFT NFT means non-fungible tokens
        (NFTs), which are generally created using the same type of programming
        used for cryptocurrencies.It is is a unique digital identifier that
        cannot be copied. Discover, collect and sell your NFT Discover, collect
        and sell your NFT NFT means non-fungible tokens (NFTs), which are
        generally created using the same type of programming used for
        cryptocurrencies.It is is a unique digital identifier that cannot be
        copied. Discover, collect and sell your NFT Discover, collect and sell
        your NFT NFT means non-fungible tokens (NFTs), which are generally
        created using the same type of programming used for cryptocurrencies.It
        is is a unique digital identifier that cannot be copied.
      </p>
    ),
  },
  {
    key: "3",
    label: "Which method of ordering is best for me?",
    children: (
      <p>
        Discover, collect and sell your NFT NFT means non-fungible tokens
        (NFTs), which are generally created using the same type of programming
        used for cryptocurrencies.It is is a unique digital identifier that
        cannot be copied. Discover, collect and sell your NFT Discover, collect
        and sell your NFT NFT means non-fungible tokens (NFTs), which are
        generally created using the same type of programming used for
        cryptocurrencies.It is is a unique digital identifier that cannot be
        copied. Discover, collect and sell your NFT Discover, collect and sell
        your NFT NFT means non-fungible tokens (NFTs), which are generally
        created using the same type of programming used for cryptocurrencies.It
        is is a unique digital identifier that cannot be copied.
      </p>
    ),
  },
];

// AKAvatarPage
export const avatarUserData = [
  {
    bg: "red",
    children: "t",
    img: "https://i.pravatar.cc/300",
  },
  {
    bg: "green",
    children: "k",
  },
  {
    bg: "blue",
    children: "t",
  },
];

// AKBadgePage
export const topisInterested = [
  {
    name: "UI Design",
    color: "#07B8D0",
  },
  {
    name: "UX Design",
    color: "#29B169",
  },
  {
    name: "Music",
    color: "#96999F",
  },
  {
    name: "Animation",
    color: "#CE4F53",
  },

  {
    name: "React",
    color: "#CE4F53",
  },
  {
    name: "SEO",
    color: "#E08F44",
  },
];

// AKBreadcrumbPage
export const basicItems = [
  {
    title: "Home",
  },
  {
    title: <a href="">Application Center</a>,
  },
  {
    title: <a href="">Application List</a>,
  },
  {
    title: "An Application",
  },
];

export const ItemsWithIcon = [
  {
    href: "",
    title: <i className="ri-home-4-line"></i>,
  },
  {
    href: "",
    title: <i className="ri-user-line"></i>,
  },
  {
    href: "",
    title: <i className="ri-mail-line"></i>,
  },
  {
    title: <i className="ri-chat-1-line"></i>,
  },
];

export const ItemsWithSeparator = [
  {
    title: "Location",
  },
  {
    type: "separator",
    separator: ":",
  },
  {
    href: "",
    title: "Application Center",
  },
  {
    type: "separator",
    separator: ">",
  },
  {
    href: "",
    title: "Application List",
  },
  {
    type: "separator",
  },
  {
    title: "An Application",
  },
];

// AKCarouselPage
export const dataOne = [
  {
    name: "www",
    img: Nft3,
  },
  {
    name: "www",
    img: Nft3,
  },
  {
    name: "www",
    img: Nft7,
  },
];

export const dataTwo = [
  {
    name: "www",
    img: Nft3,
  },
  {
    name: "www",
    img: Nft3,
  },
  {
    name: "www",
    img: Nft9,
  },
];

export const dataThree = [
  {
    name: "www",
    img: Nft8,
  },
  {
    name: "www",
    img: Nft3,
  },
  {
    name: "www",
    img: Nft9,
  },
];

export const dataFour = [
  {
    name: "www",
    img: Nft3,
  },
  {
    name: "www",
    img: Nft3,
  },
  {
    name: "www",
    img: Nft7,
  },
];

export const dataFive = [
  {
    name: "www",
    img: Nft7,
  },
  {
    name: "www",
    img: Nft3,
  },
  {
    name: "www",
    img: Nft3,
  },
];

export const dataSix = [
  {
    name: "www",
    img: Nft3,
  },
  {
    name: "www",
    img: Nft7,
  },
  {
    name: "www",
    img: Nft3,
  },
];

export const data = [
  {
    name: "www",
    img: Nft3,
  },
  {
    name: "www",
    img: Nft3,
  },
  {
    name: "www",
    img: Nft7,
  },
];

// AKTreeViewPage
export const treeData = [
  {
    title: "Parent 1",
    key: "0-0",
    children: [
      {
        title: "Parent 1-0",
        key: "0-0-0",
        children: [
          {
            title: "Leaf",
            key: "0-0-0-0",
          },
          {
            title: "Leaf",
            key: "0-0-0-1",
          },
        ],
      },
      {
        title: "Parent 1-1",
        key: "0-0-1",
        children: [
          {
            title: "Leaf",
            key: "0-0-1-0",
          },
        ],
      },
    ],
  },
  {
    title: "Parent 2",
    key: "0-2",
    children: [
      {
        title: "Parent 2-0",
        key: "0-0-2",
        children: [
          {
            title: "Leaf",
            key: "0-0-0-2",
          },
          {
            title: "Leaf",
            key: "0-0-0-0-2",
          },
        ],
      },
    ],
  },
];

export const directoryTreeData = [
  {
    title: "Parent 0",
    key: "0-0",
    children: [
      {
        title: "Leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
      {
        title: "Leaf 0-1",
        key: "0-0-1",
        isLeaf: true,
      },
    ],
  },
  {
    title: "Parent 1",
    key: "0-1",
    children: [
      {
        title: "Leaf 1-0",
        key: "0-1-0",
        isLeaf: true,
      },
      {
        title: "Leaf 1-1",
        key: "0-1-1",
        isLeaf: true,
      },
    ],
  },
];
