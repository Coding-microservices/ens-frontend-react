import React from "react";
import { Content } from "./DashboardStyles";

const DashboardContent: React.FC = () => {
  return (
    <Content>
      <h2>Добро пожаловать!</h2>
      <p>Это ваша главная панель. Здесь вы увидите уведомления, статистику и другие функции.</p>
    </Content>
  );
};

export default DashboardContent;
