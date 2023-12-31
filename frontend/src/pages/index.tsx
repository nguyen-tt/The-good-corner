import styles from "@/styles/Home.module.css";
import { RecentAds } from "@/components/RecentAds";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <RecentAds />
    </Layout>
  );
}
