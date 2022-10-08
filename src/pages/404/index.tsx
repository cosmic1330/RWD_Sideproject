import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
export default function NotFoundPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      404
      <Button onClick={handleClick}>{t("notfound.link")}</Button>
    </div>
  );
}
