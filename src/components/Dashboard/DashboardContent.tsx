import React, {useEffect, useState} from "react";
import {Content} from "./DashboardStyles";
import {getUserProfileInfo} from "../../api/authApi.ts";

const DashboardContent: React.FC = () => {
  const [profile, setProfile] = useState<any>(null); // типизируй, если знаешь структуру
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const data = await getUserProfileInfo();
        setProfile(data);
      } catch (error) {
        console.error("Ошибка при загрузке профиля", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInfo();
  }, []);

  if (loading) return <Content>Загрузка...</Content>;

  return (
    <Content>
      <h2>Добро пожаловать!</h2>
      <p>Это ваша главная панель. Здесь вы увидите уведомления, статистику и другие функции.</p>
      {profile && (
        <div>
          <p>Имя: {JSON.stringify(profile)}</p>
          <p>Email: {profile.email}</p>
          {/* Выведи любые нужные поля */}
        </div>
      )}
    </Content>
  );
};

export default DashboardContent;
