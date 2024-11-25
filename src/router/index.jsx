import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { AuthenticationLayout } from "../layouts/AuthenticationLayout";
import AKComingSoon from "../pages/AKAuthentication/AKComingSoon";
import AKButtons from "../pages/AKButtons";
import AKAcademyDashboard from "../pages/AKDashboard/AKAcademyDashboard";
import AKECommerceDashboard from "../pages/AKDashboard/AKECommerceDashboard";
import AKAnalyticsDashboard from "../pages/AKDashboard/AKAnalyticsDashboard";
import AKNFTDashboard from "../pages/AKDashboard/AKNFTDashboard";
import AKCheckboxAndRadio from "../pages/AKFormControls/AKCheckboxAndRadio";
import AKInputControls from "../pages/AKFormControls/AKInputControls";
import AKTablesPage from "../pages/AKTablesPage";
import AKTagPillsPage from "../pages/AKTagPillsPage";
import AKTabPage from "../pages/AKTabPage";
import AKBasicCardPage from "../pages/AKBasicCardPage";
import AKListPage from "../pages/AKListPage";
import AKDropdownPage from "../pages/AKDropdownPage";
import AKModalPage from "../pages/AKModalPage";
import AKOffCanvasPage from "../pages/AKOffCanvasPage";
import AKChartPage from "../pages/AKChartPage";
import AKSelectPage from "../pages/AKSelectPage";
import AKAvatarPage from "../pages/AKAvatarPage";
import AKCarouselPage from "../pages/AKCarouselPage";
import AKProgressPage from "../pages/AKProgressPage";
import AKTypographyPage from "../pages/AKTypographyPage";
import AKAlertPage from "../pages/AKAlertPage";
import AKTimelinePage from "../pages/AKTimelinePage";
import AKCalendarPage from "../pages/AKCalendarPage";
import AKDatePickerPage from "../pages/AKDatePickerPage";
import AKColorPickerPage from "../pages/AKColorPickerPage";
import AKSwitchPage from "../pages/AKSwitchPage";
import AKCounterPage from "../pages/AKCounterPage";
import AKClipBoardPage from "../pages/AKClipBoardPage";
import AKTextEditorPage from "../pages/AKTextEditorPage";
import AKLoaderPage from "../pages/AKLoaderPage";
import AKAccordionPage from "../pages/AKAccordionPage";
import AKTooltipPage from "../pages/AKTooltipPage";
import AKPopoverPage from "../pages/AKPopoverPage";
import AKBreadcrumbPage from "../pages/AKBreadcrumbPage";
import AKPaginationPage from "../pages/AKPaginationPage";
import AKRatingPage from "../pages/AKRatingPage";
import AKToastPage from "../pages/AKToastPage";
import AKBadgePage from "../pages/AKBadgePage";
import AKError from "../pages/AKError";
import AKUnderMaintenance from "../pages/AKAuthentication/AKUnderMaintenance";
import AKNotFound from "../pages/AKAuthentication/AKNotFound";
import AKMapPage from "../pages/AKMapPage";
import AKChat from "../pages/AKChat";
import AKForgotPassword from "../pages/AKAuthentication/AKForgotPassword";
import AKOTP from "../pages/AKAuthentication/AKOTP";
import AKResetPassword from "../pages/AKAuthentication/AKResetPassword";
import AKSignIn from "../pages/AKAuthentication/AkSignIn";
import AKSignUp from "../pages/AKAuthentication/AkSignUp";
import AKVerifyEmail from "../pages/AKAuthentication/AKVerifyEmail";
import AKMyProfile from "../pages/AKMyProfile";
import AKAccountPage from "../pages/AKAccountPage";
import AKAdvancedTablePage from "../pages/AKAdvancedTablePage";
import AKIconsPage from "../pages/AKIconsPage";
import AKFlagIconPage from "../pages/AKFlagIconPage";
import AKSecurity from "../pages/AKSecurity";
import AKBillingPlans from "../pages/AKBillingPlans";
import AKNotifications from "../pages/AKNotifications";
import AKRangeSliderPage from "../pages/AKRangeSliderPage";
import AKDropzonePage from "../pages/AKDropzonePage";
import AKTreeViewPage from "../pages/AKTreeViewPage";
import AKSweetAlertPage from "../pages/AKSweetAlertPage";
import AKFormWizardPage from "../pages/AKFormWizardPage";
import AKCreativeCardPage from "../pages/AKCreativeCardPage";
import AKScrollablePage from "../pages/AKScrollablePage";
import AKRibbonPage from "../pages/AKRibbonPage";
import AKSwiperPage from "../pages/AKSwiperPage";
import AKImageCropperPage from "../pages/AKImageCropperPage";
import AKUserTimeline from "../pages/AKUserTimeline";
import AKContacts from "../pages/AKContacts";
import AKFaq from "../pages/AKFaq";
export const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [
      {
        key: 0,
        path: "*",
        element: <AKNotFound />,
      },
      {
        key: 1,
        path: "/dashboard/analytics",
        element: <AKAnalyticsDashboard />,
      },
      {
        key: 2,
        path: "/dashboard/academy",
        element: <AKAcademyDashboard />,
      },
      {
        key: 3,
        path: "/dashboard/crm",
        element: <AKComingSoon />,
      },
      {
        key: 4,
        path: "/dashboard/e-commerce",
        element: <AKECommerceDashboard />,
      },
      {
        key: 5,
        path: "/dashboard/logistics",
        element: <AKComingSoon />,
      },
      {
        key: 7,
        path: "/dashboard/input-controls",
        element: <AKInputControls />,
      },
      {
        key: 8,
        path: "/dashboard/checkbox-radio",
        element: <AKCheckboxAndRadio />,
      },
      {
        key: 9,
        path: "/dashboard/buttons",
        element: <AKButtons />,
      },
      {
        key: 10,
        path: "/dashboard/basic-table",
        element: <AKTablesPage />,
      },
      {
        key: 11,
        path: "/dashboard/tag-pills",
        element: <AKTagPillsPage />,
      },
      {
        key: 12,
        path: "/dashboard/tab",
        element: <AKTabPage />,
      },
      {
        key: 13,
        path: "/dashboard/card",
        element: <AKBasicCardPage />,
      },
      {
        key: 14,
        path: "/dashboard/list",
        element: <AKListPage />,
      },
      {
        key: 15,
        path: "/dashboard/dropdown",
        element: <AKDropdownPage />,
      },
      {
        key: 16,
        path: "/dashboard/modal",
        element: <AKModalPage />,
      },
      {
        key: 17,
        path: "/dashboard/offcanvas",
        element: <AKOffCanvasPage />,
      },
      {
        key: 18,
        path: "/dashboard/chart",
        element: <AKChartPage />,
      },
      {
        key: 19,
        path: "/dashboard/select",
        element: <AKSelectPage />,
      },
      {
        key: 20,
        path: "/dashboard/avatar",
        element: <AKAvatarPage />,
      },
      {
        key: 21,
        path: "/dashboard/carousel",
        element: <AKCarouselPage />,
      },
      {
        key: 22,
        path: "/dashboard/progress",
        element: <AKProgressPage />,
      },
      {
        key: 23,
        path: "/dashboard/typography",
        element: <AKTypographyPage />,
      },
      {
        key: 24,
        path: "/dashboard/alert",
        element: <AKAlertPage />,
      },
      {
        key: 26,
        path: "/dashboard/timeline",
        element: <AKTimelinePage />,
      },
      {
        key: 27,
        path: "/dashboard/calendar",
        element: <AKCalendarPage />,
      },
      {
        key: 28,
        path: "/dashboard/date-picker",
        element: <AKDatePickerPage />,
      },
      {
        key: 29,
        path: "/dashboard/color-picker",
        element: <AKColorPickerPage />,
      },
      {
        key: 30,
        path: "/dashboard/switch",
        element: <AKSwitchPage />,
      },
      {
        key: 31,
        path: "/dashboard/counter",
        element: <AKCounterPage />,
      },
      {
        key: 32,
        path: "/dashboard/clip-board",
        element: <AKClipBoardPage />,
      },
      {
        key: 33,
        path: "/dashboard/text-editor",
        element: <AKTextEditorPage />,
      },
      {
        key: 34,
        path: "/dashboard/loader",
        element: <AKLoaderPage />,
      },
      {
        key: 35,
        path: "/dashboard/accordion",
        element: <AKAccordionPage />,
      },
      {
        key: 36,
        path: "/dashboard/tooltip",
        element: <AKTooltipPage />,
      },
      {
        key: 37,
        path: "/dashboard/popover",
        element: <AKPopoverPage />,
      },
      {
        key: 38,
        path: "/dashboard/nft",
        element: <AKNFTDashboard />,
      },
      {
        key: 39,
        path: "/dashboard/breadcrumb",
        element: <AKBreadcrumbPage />,
      },
      {
        key: 40,
        path: "/dashboard/pagination",
        element: <AKPaginationPage />,
      },
      {
        key: 41,
        path: "/dashboard/rating",
        element: <AKRatingPage />,
      },
      {
        key: 42,
        path: "/dashboard/toast",
        element: <AKToastPage />,
      },
      {
        key: 43,
        path: "/dashboard/badge",
        element: <AKBadgePage />,
      },
      {
        key: 44,
        path: "/dashboard/coming-soon",
        element: <AKComingSoon />,
      },
      {
        key: 45,
        path: "/dashboard/error",
        element: <AKError />,
      },
      {
        key: 46,
        path: "/dashboard/under-maintenance",
        element: <AKUnderMaintenance />,
      },
      {
        key: 47,
        path: "/dashboard/not-found",
        element: <AKNotFound />,
      },
      {
        key: 48,
        path: "/dashboard/user-profile",
        element: <AKComingSoon />,
      },
      {
        key: 49,
        path: "/dashboard/map",
        element: <AKMapPage />,
      },
      {
        key: 50,
        path: "/dashboard/chat",
        element: <AKChat />,
      },
      {
        key: 51,
        path: "/",
        element: <AKAnalyticsDashboard />,
      },
      {
        key: 52,
        path: "/dashboard/my-profile",
        element: <AKMyProfile />,
      },
      {
        key: 53,
        path: "/dashboard/account",
        element: <AKAccountPage />,
      },
      {
        key: 54,
        path: "/dashboard/advanced-table",
        element: <AKAdvancedTablePage />,
      },
      {
        key: 55,
        path: "/dashboard/icons",
        element: <AKIconsPage />,
      },
      {
        key: 56,
        path: "/dashboard/flag-icons",
        element: <AKFlagIconPage />,
      },
      {
        key: 57,
        path: "/dashboard/security",
        element: <AKSecurity />,
      },
      {
        key: 58,
        path: "/dashboard/billing-plans",
        element: <AKBillingPlans />,
      },
      {
        key: 59,
        path: "/dashboard/notifications",
        element: <AKNotifications />,
      },
      {
        key: 60,
        path: "/dashboard/range-slider",
        element: <AKRangeSliderPage />,
      },
      {
        key: 61,
        path: "/dashboard/dropzone",
        element: <AKDropzonePage />,
      },
      {
        key: 62,
        path: "/dashboard/tree-view",
        element: <AKTreeViewPage />,
      },
      {
        key: 63,
        path: "/dashboard/sweet-alert",
        element: <AKSweetAlertPage />,
      },
      {
        key: 64,
        path: "/dashboard/form-wizard",
        element: <AKFormWizardPage />,
      },
      {
        key: 65,
        path: "/dashboard/creative-card",
        element: <AKCreativeCardPage />,
      },
      {
        key: 66,
        path: "/dashboard/scrollable",
        element: <AKScrollablePage />,
      },
      {
        key: 67,
        path: "/dashboard/ribbon",
        element: <AKRibbonPage />,
      },
      {
        key: 68,
        path: "/dashboard/swiper",
        element: <AKSwiperPage />,
      },
      {
        key: 69,
        path: "/dashboard/google-charts",
        element: <AKComingSoon />,
      },
      {
        key: 70,
        path: "/dashboard/image-cropper",
        element: <AKImageCropperPage />,
      },
      {
        key: 71,
        path: "/dashboard/user-timeline",
        element: <AKUserTimeline />,
      },
      {
        key: 72,
        path: "/dashboard/contacts",
        element: <AKContacts />,
      },
      {
        key: 73,
        path: "/dashboard/faq",
        element: <AKFaq />,
      },
    ],
  },
  {
    element: <AuthenticationLayout />,
    children: [
      { key: 1, path: "/authentication/login", element: <AKSignIn /> },
      { key: 2, path: "/authentication/register", element: <AKSignUp /> },
      { key: 3, path: "/authentication/otp", element: <AKOTP /> },
      {
        key: 4,
        path: "/authentication/reset-password",
        element: <AKResetPassword />,
      },
      {
        key: 5,
        path: "/authentication/verify-email",
        element: <AKVerifyEmail />,
      },
      {
        key: 6,
        path: "/authentication/forgot-password",
        element: <AKForgotPassword />,
      },
      {
        key: 7,
        path: "/authentication/forgot-email",
        element: <AKComingSoon />,
      },
    ],
  },
]);
