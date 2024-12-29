import Settings from "@/components/Settings";
import PageLayout from "@/components/layouts/PageLayout";

const SettingsPage = () => {
  return (
    <PageLayout
      title="Settings"
      description="Configure your application settings"
    >
      <Settings />
    </PageLayout>
  );
};

export default SettingsPage;