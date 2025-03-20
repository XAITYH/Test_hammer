import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "main",
    path: `${APP_PREFIX_PATH}/main`,
    title: "Основные",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "main-dashboard",
        path: `${APP_PREFIX_PATH}/main/dashboard`,
        title: "Дашборд",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-catalog",
        path: `${APP_PREFIX_PATH}/main/catalog`,
        title: "Каталог",
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "main-catalog-products",
            path: `${APP_PREFIX_PATH}/main/catalog/products`,
            title: "Товары",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-catalog-categories",
            path: `${APP_PREFIX_PATH}/main/catalog/categories`,
            title: "Категории",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-catalog-collections",
            path: `${APP_PREFIX_PATH}/main/catalog/collections`,
            title: "Коллекции",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-catalog-combo",
            path: `${APP_PREFIX_PATH}/main/catalog/combo`,
            title: "Комбо",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "main-orders",
        path: `${APP_PREFIX_PATH}/main/orders`,
        title: "Заказы",
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-clients",
        path: `${APP_PREFIX_PATH}/main/clients`,
        title: "Клиенты",
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "main-clients-list",
            path: `${APP_PREFIX_PATH}/main/clients/list`,
            title: "Список клиентов",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-clients-groups",
            path: `${APP_PREFIX_PATH}/main/clients/groups`,
            title: "Группы клиентов",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "main-banners",
        path: `${APP_PREFIX_PATH}/main/banners`,
        title: "Баннеры",
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-promo",
        path: `${APP_PREFIX_PATH}/main/promo`,
        title: "Промокоды",
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-offline",
        path: `${APP_PREFIX_PATH}/main/offline`,
        title: "Оффлайн точки",
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-stuff",
        path: `${APP_PREFIX_PATH}/main/stuff`,
        title: "Сотрудники",
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-mailings",
        path: `${APP_PREFIX_PATH}/main/mailings`,
        title: "Рассылки",
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const System = [
  {
    key: "system",
    path: `${APP_PREFIX_PATH}/system`,
    title: "Системные",
    icon: SettingOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "system-settings",
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: "Настройки",
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "system-mobile-app",
        path: `${APP_PREFIX_PATH}/system/mobile`,
        title: "Мобильное приложение",
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "system-logs",
        path: `${APP_PREFIX_PATH}/system/logs`,
        title: "Логи",
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree, ...System];

export default navigationConfig;
